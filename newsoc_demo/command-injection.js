const { exec } = require('child_process')

// newsoc test file: deliberate command injection (request data goes into a shell command)
module.exports = function run (req, res) {
  exec('ls ' + req.query.dir, (err, out) => res.send(out))
}
