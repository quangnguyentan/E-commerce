const userRouter = require("./user");
const { errHandler, notFound } = require("../middlewares/errorHandler");
const initRouter = (app) => {
  app.use("/api/user", userRouter);
  app.use(notFound);
  app.use(errHandler);
};
module.exports = initRouter;
