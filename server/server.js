const express = require("express");
const config = require("config");
const { connectDB } = require("../connection/connectionPostgres");
const exphbs = require("express-handlebars");
const serveIndex = require("serve-index");
const { pageRouter } = require("../src/routes/page.routes");
const { userRouter } = require("../src/routes/user.routes");
const morgan = require("morgan");

// set app server
const app = express();

// setup handlebars
const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

// access json
// app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// static files
app.use(
    "/public",
    express.static("public"),
    serveIndex("public", { icons: true })
);

// show request to console only development
if (app.get("env") === "development") {
    app.use(morgan("tiny"));
    // Write log
}

// all routes
app.use(pageRouter);
app.use("/user", userRouter);

// set PORT
const PORT = process.env.PORT || config.get("PORT") || 5000;

// run server
app.listen(
    PORT,
    async() =>
    await connectDB()
    .then(() => {
        console.log(`Server is runnig on ${PORT} 😎 `);
    })
    .catch((error) => {
        console.log(error);
    })
);