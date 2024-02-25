//Generate a random password

function generatePassword(length,lowerCase,uperCase,numberCase,symbolCase){

    const lowerChar ="abcdefghijklmnopqrstuvwxyz";
    const uperChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar ="0123456789";
    const symbolChar ="!@#$%^&*()-+="
    let allowedChar= '';
    let password='';
    allowedChar += lowerCase ?lowerChar : '';
    allowedChar += uperCase ?uperChar : '';
    allowedChar += numberCase ?numberChar : '';
    allowedChar += symbolCase ?symbolChar : '';

    if(length <=0){
        return`(value can't be below 1)`;
    }
    if(allowedChar.length === 0){
        return`(At least 1 set of charcter need to be selected)`;
    }

    for(i=0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex];
    }
    return password;

}

const passwordLength =8;
const lowerCase =true;
const uperCase = true;
const numberCase=true;
const symbolCase=true;

const password =generatePassword(passwordLength,lowerCase,uperCase,numberCase,symbolCase);

console.log(`Generated Password: ${password}`);
