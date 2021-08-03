const { Router } = require("express");

const router = Router();

router.get("/", async(req, res) => {
    res.redirect("/auth/login");
});

router.get("/auth/login", async(req, res) => {
    res.render("login", {
        isLogin: true,
        title: "login page",
    });
});

router.get("/auth/registration", async(req, res) => {
    res.render("registration", {
        isRegistration: true,
        title: "login page",
    });
});

router.get("/*", async(req, res) => {
    res.render("notFound", {
        isNotFound: true,
        title: "page not found",
    });
});

module.exports = {
    pageRouter: router,
};