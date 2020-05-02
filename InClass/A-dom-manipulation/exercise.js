/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

console.log(document.querySelectorAll("p"));
console.log(document.querySelector("div"));
console.log(document.querySelector("#jumbotron-text"))
console.log(document.getElementById("jumbotron-text"));
console.log(document.querySelectorAll(".primary-content p"));


console.log()


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var alrt = document.getElementById("alertBtn");
alrt.addEventListener("click", message);

function message() {
    alert("Thanks for visiting Bikes for Refugees!");
}


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var col = document.getElementById("bgrChangeBtn");
col.addEventListener("click", changeClr);

function changeClr() {
    document.body.style.background = "green";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var add = document.querySelector("#addTextBtn");
add.addEventListener("click", greet);
function greet() {
    var messages = document.createElement("p");
    messages.textContent = "Read more below.";
    var parentClass = document.querySelector(".buttons");//Parentclass of button
    parentClass.appendChild(messages);
};
//add.appendChild(messages);
/*);
const messages = document.createElement("p");

function
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var alrt = document.querySelector("#largerLinksBtn");
var link = document.querySelectorAll("a");

alrt.addEventListener("click", large);

function large() {
    for (var i = 0; i < link.length; i++) {
        link[i].style.fontSize = "2.0em"
    }



}

/*
Task 6
======
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the the text inside the input field after this
*/

//var inp = document.querySelector(".form-control").value;




var but = document.querySelector("#addArticleBtn");

but.addEventListener("click", task);


function task() {
    var inp = document.querySelector(".form-control").value;

    //console.log(inp);
    var newPara = document.createElement("p");
    newPara.innerText = inp;
    var more = document.querySelector("#mainArticles");
    // console.log(more);
    more.appendChild(newPara);



    document.querySelector(".form-control").value = "";

}