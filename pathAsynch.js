
var
filer     = require('fs'),
folder    = process.argv[2],
extension = process.argv[3],

callback = (error, list) =>
{
  if(!error)
  {
    list
      .map    (item => item.split('.'))
      .filter (item => item.length > 1)
      .filter (item => item[item.length - 1] === extension)
      .map    (item => item.reduce((a, b) => a + '.' + b))
      .forEach(item => console.log(item))
  }
},

readContent = filer.readdir(folder, callback)

