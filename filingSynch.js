
var
filer  = require('fs'),
buffer = filer.readFileSync(process.argv[2]),
text   = buffer.toString(),
lines  = text.split('\n').length - 1

console.log(lines)

// if there's no need for a buffer...
//
// text = filer.readFileSync(process.argv[2], 'utf8')

