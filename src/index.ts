// let U = require('./User');            // commonjs
import * as U from './User';             // es6
import * as C from './Company';




let user = new U.User();
let company = new C.Company();

console.log(user.getName(), user.getCity(), user.getLocation());
console.log(company.getName(), company.getCatchPhrase(), company.getLocation());

let x = window;
console.log(x);




document.addEventListener("DOMContentLoaded", (e)=>{
    (document.getElementById("title") as HTMLElement).innerText = new Date().toString();
    (document.getElementById("app") as HTMLElement).innerText = new Date().toString();    
});