// you can write your js code here
document.querySelector("form").addEventListener("submit", submitDetails);
let arr = JSON.parse(localStorage.getItem("book-list")) || [];

function submitDetails(event){
    event.preventDefault
    let n = document.getElementById("name").value;
    let a = document.getElementById("author").value;
    let d = document.getElementById("desc").value;
    let date = document.getElementById("added").value;
    let c = document.getElementById("category").value;
    let p = document.getElementById("price").value;

    let obj = new submitDetailsCF(n, a, d, c, date, p);
    arr.push(obj);
    localStorage.setItem("book-list", JSON.stringify(arr));
}

function submitDetailsCF(name, aut, des, cat, date, pr){
    this.name = name,
    this.author = aut,
    this.description = des,
    this.date = date,
    this.category = cat,
    this.price = pr
}
