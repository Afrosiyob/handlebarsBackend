const authPageController = async(req, res) => {
    res.render("auth", {
        title: "auth page",
        isAuthPage: true,
    });
};

module.exports = {
    authPageController,
};