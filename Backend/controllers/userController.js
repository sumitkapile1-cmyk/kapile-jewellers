import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// =======================
// Register User
// =======================
export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      phone,
      password,
    });

    res.status(201).json({
      success: true,
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.log("Register Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Login User
// =======================
export const loginUser = async (req, res) => {
  try {
    console.log("========== LOGIN ==========");
    console.log("Request Body:", req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    console.log("User Found:", user ? user.email : "No User");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const isMatch = await user.matchPassword(password);

    console.log("Password Match:", isMatch);

    if (isMatch) {
      console.log("✅ Login Success");

      return res.json({
        success: true,
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        token: generateToken(user._id),
      });
    }

    console.log("❌ Wrong Password");

    return res.status(401).json({
      success: false,
      message: "Invalid Email or Password",
    });
  } catch (error) {
    console.log("Login Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Get Profile
// =======================
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("Profile Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};