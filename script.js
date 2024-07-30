const password = document.getElementById('password')
const checknum = document.getElementById("check")
const checkSymbols = document.getElementById("checkSymbols")
const copied = document.getElementById("copied")

let numAllowed = false
let symbolsAllowed = false
function generatePassword() {
    let pass = ""
    let str = "ABCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = 123456789
    let symbols = "!@#$%$#^&*"
        let newstr = str
        if(checknum.checked ){
            numAllowed = true
            newstr += num
        } else{
            numAllowed = false
        }
         if(checkSymbols.checked){
            symbolsAllowed = true;
            newstr += symbols
        }else{
            symbolsAllowed = false
        }

    for (let i = 1; i <= 15; i++) {
        let char = Math.floor(Math.random()*newstr.length + 1)
        let data = newstr.charAt(char)
        pass +=data 

    }
    if (pass.length < 15) {
        
        generatePassword()
    } else {
        password.value = pass
    }

}
function copy(){
    navigator.clipboard.writeText(password.value)
    copied.style.display = "block"
    setTimeout(()=>{copied.style.display = "none"}, 2000)
    
}