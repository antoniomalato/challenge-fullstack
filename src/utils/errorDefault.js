module.exports = (err, _req, res, _next) => {
  if(err.status) {
    const { status, message } = err;
    return res.status(status).json(message);
  }
  console.error(err, '---------ERROR DEFAULT---------')
  return res.status(500).json({message: 'Invalid Server Error!'})
}