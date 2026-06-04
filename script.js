let ten = 'meo meo meo';
let age_nghe = '10';

let meo = document.getElementsByClassName('kb');

console.log(meo);

let op = document.getElementsByClassName('ka');

console.log(op);

let o = document.getElementsByTagName('li');

let po = Array(10).fill(0);
po[0] = document.querySelector('.nen');
po[1] = document.querySelector('.tren');
console.log(po[0]);
console.log(po[1]);

let kk = document.querySelector('.bang');
let pp = kk.getElementsByTagName('li');

console.log(kk);

console.log(o);

console.log(pp);

console.log(10);

for (let i = 0 ; i < pp.length ; i++)
{
    console.log(pp[i]);
}

let btn = document.querySelector(".settings");
let menu = document.querySelector(".menusetting");

btn.onclick = function () {
    menu.classList.toggle("active");
}

for (let i = 0 ; i < pp.length ; i++)
{
    pp[i].onclick = function () {
        
        if (i == 0) alert("Yes, you are đá");
        else if (i == 1) alert("This is stone!");
        else if (i == 2) alert("Da da da");
        else alert("This is uncorret answer! :((");
    }
}