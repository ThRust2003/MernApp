const {
  login,
  register,
  getAllUsers,
  setAvtar,
  logOut,
} = require("../controller/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.post("/setavtar/:id", setAvtar);
router.get("/logout/:id", logOut);

module.exports = router;