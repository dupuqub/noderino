
var
helper    = require('./modular_helper.js'),
folder    = process.argv[2],
extension = process.argv[3],

callback = (error, data) =>
{
  if(error) return console.log('error')

  data.forEach(item => console.log(item))
}

helper(folder, extension, callback)

