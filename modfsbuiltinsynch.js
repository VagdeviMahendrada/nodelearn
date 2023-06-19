const { readFileSync, writeFileSync }=require('fs')
const fir=readFileSync('./mainfol/fsreadfile1.txt','utf-8')
const sec=readFileSync('./mainfol/fsreadfile2.txt','utf-8')
console.log(fir)
console.log(sec)
//writing data into a file by replacing old contents in case of old
//file otherwise creates new file with given data
//file replacing
writeFileSync('./mainfol/fswritefile1.txt',`here is the result:${fir},${sec}`)
//use flag a for appending
writeFileSync('./mainfol/fswritefile2.txt',`here is the result:${fir},${sec}`,{flag:'a'})

