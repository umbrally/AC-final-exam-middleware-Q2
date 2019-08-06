const moment = require('moment')

module.exports = (req, res, next) => {
  req.start = moment()

  res.on('finish', () => {
    res.start = moment()
    console.log(`${req.start.format('YYYY-MM-DD HH:mm:ss')} | ${req.method} from ${req.url} total times: ${res.start - req.start}ms`)
  })

  next()
}