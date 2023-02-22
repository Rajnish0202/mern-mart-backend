module.exports = (catchAsyncFunc) => (req, res, next) => {
  Promise.resolve(catchAsyncFunc(req, res, next)).catch(next);
};
