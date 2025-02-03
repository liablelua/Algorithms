// 

const EmailValidation = email => email.match(/[0-9]*[a-z]*[0-9]*@[0-9]*[a-z]*[0-9]*.[a-z]*/);
const PhoneValidation = phone => phone.match(/[0-9]*-[0-9]*-[0-9]*/);
const PasswordValidation = pass => pass.match(/[0-9]*[a-z]*[A-Z]*/);

const lowercase = /[a-z]/;
const allNumbers = /[0-9]*/g;
const nums = /[0-9]/;
const uppercase = /[A-Z]/;
const allLowercase = /[a-z]*/g;
const allUppercase = /[A-Z]*/g;

console.log(EmailValidation("emailstuff.yeah0@outlook.party"));
console.log(PhoneValidation("123-456-7890"));
console.log(PasswordValidation("myPassword123()"))