// const btn=document.querySelector(".generate-btn")
const box=document.querySelector("#pass-box")

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let number = "1234567890"
let symbol = "~!@#$%^&*:;%"
let length = 9;
let combination = upperCase + number + symbol + lowerCase 
let count=1;
function generatePassword(){
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length )]
    console.log(`1 ${password}`)
    password += lowerCase[Math.floor(Math.random() * lowerCase.length )]
    console.log(`2 ${password}`)
    password += number[Math.floor(Math.random() * number.length )]
    console.log(`3 ${password}`)
    password += symbol[Math.floor(Math.random() * symbol.length )]
    console.log(`4 ${password}`)

    while(length > password.length){
        password += combination[Math.floor(Math.random() * combination.length )]
        console.log(`${count} - ${password}`)
        count++ ;
    }
    box.value = password
}

function copy(){
    box.select()
    document.execCommand("copy")

}