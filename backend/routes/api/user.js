const router = require("express").Router();
let User = require("../../models/user.models");
const { response } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../util/auth");

// GET ALL USERS
router.get("/", (request, response) => {
  User.find()
    .then((users) => {
      return response.json(users);
    })
    .catch((err) => {
      return response.status(400).json("Error: " + err);
    });
});

// POST NEW USER
router.post("/new", async (request, response) => {
  const email = request.body.email;
  const password = request.body.password;
  const name = request.body.name;
  const phoneNumber = request.body.phoneNumber;
  const address = request.body.address;
  console.log("EMAIL: " + email)
  // Checking if user exists
  await User.findOne({ email: `${email}` })
    .then((user) => {
      if (user) {
        return response.status(400).json("User already exists!");
      }
      // If user does not exist
      else {
        const newUser = new User({
          email,
          password,
          name,
          phoneNumber,
          address,
        });

        // Create Salt & Hash
        bcrypt.genSalt(10, async (err, salt) => {
          hash = await bcrypt.hash(newUser.password, salt);
          newUser.password = hash;
          console.log(hash);
          // Adding newUser to Database
          newUser
            .save()
            .then((user) => {
              // response.json("User successfully added!");

              jwt.sign(
                { id: user.id },
                process.env.jwtSecret,
                {
                  expiresIn: 3600,
                },
                (err, token) => {
                  if (err) {
                    throw err;
                  }
                  response.json({
                    token,
                    user: {
                      id: user.id,
                      email: user.email,
                      name: user.name,
                      phoneNumber: user.phoneNumber,
                      address: user.address,
                    },
                  });
                }
              );
            })
            .catch((err) => {
              response.status(400).json("Error: " + err);
            });
        });
      }
    })
    .catch((err) => {
      return response.status(400).json("Error: " + err);
    });
});

// POST EXISTING USER
router.post("/existing", async (request, response) => {
  const email = request.body.email;
  const password = request.body.password;

  // Checking if user exists
  await User.findOne({ email: `${email}` })
    .then((user) => {
      if (!user) {
        return response.status(400).json("User does not exists!");
      }
      // If user does not exist
      else {
        // Validate Password
        bcrypt
          .compare(password, user.password)
          .then((isMatch) => {
            if (!isMatch) {
              return response.status(400).json("Invalid credentials!");
            } else {
              jwt.sign(
                { id: user.id },
                process.env.jwtSecret,
                {
                  expiresIn: 3600,
                },
                (err, token) => {
                  if (err) {
                    throw err;
                  }
                  response.json({
                    token,
                    user: {
                      id: user.id,
                      email: user.email,
                      name: user.name,
                      phoneNumber: user.phoneNumber,
                      address: user.address,
                    },
                  });
                }
              );
            }
          })
          .catch((err) => { });
      }
    })
    .catch((err) => {
      return response.status(400).json("Error: " + err);
    });
});

// UPDATE USER

// GET USER DATA (AUTHENTICATED)
router.get("/auth", auth, (request, response) => {
  User.findById(request.user.id)
    .select("-password")
    .then((user) => {
      response.json(user);
    })
    .catch((err) => {
      response.status(400).json("Error: " + err);
    });
});

module.exports = router;
