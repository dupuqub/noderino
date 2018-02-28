
//......................................................................................................................
// OGGTHETROLL
//
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

//......................................................................................................................
// LEARNYOUNODE
//
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})

