const bcrypt = require("bcryptjs");
const { User } = require("../models/models");

const createUser = async(req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (user && user instanceof User) {
            res.status(400).json({ message: "please enter other user name" });
        } else {
            const hashedPassword = await bcrypt.hash(password, 12);
            await User.create({
                    username,
                    password: hashedPassword,
                })
                .then((user) => {
                    console.log(user);
                    // res.status(201).json({
                    //     data: {
                    //         username: user.username,
                    //         id: user.id,
                    //         role: user.role,
                    //         updatedAt: user.updatedAt,
                    //         createdAt: user.createdAt,
                    //     },
                    // });
                    res.redirect("/auth/login");
                })
                .catch((error) => {
                    console.log(error);
                    res.status(400).json({ message: "some error in createing user" });
                });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" });
    }
};

module.exports = {
    createUser,
};