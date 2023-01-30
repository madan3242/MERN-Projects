import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/User.js";
import { check, validationResult} from "express-validator";
import authinticate from "../middleware/authinticate.js";


const router = express.Router();

router.route('/register').post(
    [
        check("name").notEmpty().withMessage("User name is required"),
        check("email").notEmpty().withMessage("Please enter proper email"),
        check("password")
            .isLength({ min: 6})
            .withMessage("Password must be atleast 6 characters"),
    ],
    async(req, res) => {
        console.log("Inside post request");
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            console.log("Lot of errors");
            return res.status(401).json({
                errors: errors.array()
            })
        }
        try {
            let { name, email, password } = req.body;

            //User exist or not 
            let user = await User.findOne({ email: email });
            
            if(user) {
                return res
                    .status(401)
                    .json({
                        errors: [{msg: "User already exist- Please login"}]
                    })
            }

            //save from data, into database
            let address = {
                flat: " ",
                street: " ",
                landmark: " ",
                pin: " ",
                city: " ",
                country: " ",
                state: " ",
                mobile: " ",
            };
            let salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password, salt);

            user = new User({
                name, email, password, address
            })
            user = await user.save();
            res.status(200).json({
                msg: "User created successfully",
                user
            })
        } catch (error) {
            return res.status(500).json({
                errors: "Server error"
            })
        }
    }
)

router.route('/login').post(
    [
        check("email").notEmpty().withMessage("Please enter proper email"),
        check("password")
            .isLength({ min: 6})
            .withMessage("Password must be atleast 6 characters"),
    ],
    async (req, res) => {
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(401).json({
                errors: errors.array()
            })
        }
        try {
            let { email, password} = req.body;

            //User exist or not 
            let user = await User.findOne({ email: email });
            
            if(!user) {
                return res
                    .status(401)
                    .json({
                        errors: [{msg: "User not exist- Please register"}]
                    })
            }

            //verify password
            let isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res
                    .status(401)
                    .json({
                        errors: [{ msg: "Invalid Credintials"}]
                    })
            }
            //create a token 
            let payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(payload, process.env.JWT_KEY, (err, token) => {
                if(err) throw err;
                res.status(200).json({
                    msg: "Login success",
                    token: token
                });
            });
        } catch (error) {
            return res.status(500).json({
                errors: "Server error"
            })
        }
    }
)

router.route('/').get(authinticate, async (req, res) => {
    try {
        let user = await User.findById(req.user.id).select("-password");

        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
            errors: [{msg: "Server error"}]
        })
    }
})

export default router;