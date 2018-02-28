
var filer = require('fs')

var callback = (error, contents) =>
{
  var
  lines = contents.split('\n').length - 1,
  text  = error ? 'error!!!' : 'lines: ' + lines

  console.log(text)
}

filer.readFile(process.argv[2], 'utf8', callback)

