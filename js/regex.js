const regex = /^.+[-].+[-].+$/gi;
const str = "1-2-3----";
// const str2 = "1-2";
console.log(regex.test(str));
// console.log(regex.test());

//验证手机号
const phoneRegex = /^1[3-9]\d{9}/gi;
const phone = "13345566211";
console.log(phoneRegex.test(phone));
