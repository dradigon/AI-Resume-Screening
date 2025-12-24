import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 1. Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required"
      });
    }

    // 2. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({
        message: "User already exists"
      });
    }

    // 3. Create user (password hashing happens automatically)
    const user = await User.create({
      name,
      email,
      password,
      role
    });

    // 4. Generate JWT
    const token = generateToken(user);

    // 5. Send response (never send password)
    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({
      message: "Server error during registration"
    });
  }
};

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
export const loginUser= async (req,res) => {
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message:"Email and password are required"
            });
        }

        const user= await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"User not Registered"
            });
        }

        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({
                message:"Invalid Password"
            });
        }

        const token = generateToken(user);

        res.status(200).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    }catch(error){
        console.error("Login Error:", error);
        res.status(500).json({
            message: "Server error during login"
        });
    }
};
