function hello() {
    alert("You pressed a button");
}

const btn = document.querySelector(".pressme");

btn.onclick = hello;