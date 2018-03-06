
var
filer = require('fs'),
path  = require('path')

module.exports = (folder, extension, external_cb) =>
{
  var internal_cb = (error, data) =>
  {
    if(error) return external_cb(error)

    data = data.filter(item => path.extname(item) === '.' + extension)

    external_cb(null, data)
  }

  filer.readdir(folder, internal_cb)
}

