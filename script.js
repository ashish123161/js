// let heading = document.getElementById("heaading");
// console.dir(heading);

// let headings =document.getElementsByClassName("heading 2");
// console.dir(headings);
// console.log(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

// let div1 = document.querySelector("div1");
// console.dir(div1);

// let h2 =document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText =h2.innerText + "from ashish chaudhary";

let divs = document.querySelectorAll(".box");

let idx = 1;
for (div of divs) {
    div.innerText = 'new unique value ${idx}';
    idx++;
}

