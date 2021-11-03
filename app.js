const path = require("path");
const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const userRouter = require("./routes/userRoutes");
const destinationRouter = require("./routes/destinationRoutes");
const bookRouter = require("./routes/bookRoutes");
const comInfoRouter = require("./routes/comInfoRoutes");
const commentRouter = require("./routes/commentRoutes");
const contactRouter = require("./routes/contactRoutes");
const faqRouter = require("./routes/faqRoutes");
const packageRouter = require("./routes/packageRoutes");
const postRouter = require("./routes/postRoutes");
const serviceRouter = require("./routes/serviceRoutes");
const tourRouter = require("./routes/tourRoute");
// Start express app
const multer = require("multer");
const app = express();

app.enable("trust proxy");

app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
 
app.use(cors());

app.options("*", cors());
 
app.use(express.static(path.join(__dirname, "public")));
 
app.use(helmet());


if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

 
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

app.use(cookieParser());

 
app.use(mongoSanitize());
 
app.use(xss());
 
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

app.use(compression());

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

// 3) ROUTES
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/v1/users", userRouter);
app.use("/api/v1/destinations", destinationRouter);
app.use("/api/v1/book", bookRouter);
app.use("/api/v1/comInfo", comInfoRouter);
app.use("/api/v1/comment", commentRouter);
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/faq", faqRouter);
app.use("/api/v1/package", packageRouter);
app.use("/api/v1/post", postRouter);
app.use("/api/v1/services", serviceRouter);
app.use("/api/v1/tour", tourRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
