function btnGen(){
    const getLength = Number(document.getElementById("genInt").value);
    const result = document.getElementById("psd");
    
    const upper = document.getElementById("upper");
    const lower = document.getElementById("lower");
    const numbers = document.getElementById("numbers");
    const special = document.getElementById("special");

    const u = upper.checked;
    const l = lower.checked;
    const n = numbers.checked;
    const s = special.checked;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const num = "1234567890";
    const spl = "!@#$%^&*()_+-=";

    let allowedChar = "";
    let mandatory = "";

    if (u) {mandatory += upperCase[Math.floor(Math.random() * upperCase.length)];}
    if (l) {mandatory += lowerCase[Math.floor(Math.random() * lowerCase.length)];}
    if (n) {mandatory += num[Math.floor(Math.random() * num.length)];}
    if (s) {mandatory += spl[Math.floor(Math.random() * spl.length)];}

    let password = mandatory;

    if (getLength < 8 || getLength > 15) {
        result.textContent = "Password length must only be 8-15.";
        return;
    }
    
    allowedChar += u ? upperCase : "";
    allowedChar += l ? lowerCase : "";
    allowedChar += n ? num : "";
    allowedChar += s ? spl : "";

    if (allowedChar.length == 0) {
        result.textContent = "Select atleast 1 character";
        return;
    }

    for(let i = password.length; i < getLength;i++){
        const randomIndex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex];
    }

    let newPassword = password.split("");

    for(let i = newPassword.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [newPassword[i], newPassword[j]] = [newPassword[j], newPassword[i]];
    }

    result.textContent = `Generated Password: ${newPassword.join("")}`;
}