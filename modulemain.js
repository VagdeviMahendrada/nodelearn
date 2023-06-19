//use module.exports in other files for exporting into module use require() in main file for accessing data
const nam=require('./modulenames1.js')
const sayhi=require('./modulefun2.js')
const data=require('./modulelistdic3.js')
//directly accessing the function
require('./modulesum4.js')
console.log(nam)
sayhi('samuel')
sayhi(nam.hiva)
sayhi(nam.hami)
console.log(data) 