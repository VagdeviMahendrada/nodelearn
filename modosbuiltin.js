const os=require('os')
//user info
const user=os.userInfo()
console.log(user)
//uptime info
console.log(`uptime of os=${os.uptime()} sec`)
const currentos={
    name:os.type(),
    totalmemory:os.totalmem(),
    release:os.release(),
    freememory:os.freemem()
}
console.log(currentos)