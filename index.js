//  document.addEventListener('DOMContentLoaded',() =>{

let itemOne = document.getElementById("item1")
let itemTwo = document.getElementById("item2")
let itemThree = document.getElementById("item3")
let name = document.getElementById("projectname")
let picture = document.getElementById("image")

function projectData(){
  fetch("https://fierce-forest-94320.herokuapp.com/items")
    .then((data) => data.json())
    .then((projectData) => {
        // console.log(projectData);
        const ul = document.getElementById("projectNames")
        ul.innerHTML = ""
        for (const title of projectData){
          let li = document.createElement("li")
          li.id = title.id
          li.onclick = "titleClick()"
          li.setAttribute("onclick", "titleClick("+title.id+")")
          li.appendChild(document.createTextNode(title.ProjectName))
          ul.append(li)
          // console.log(data.name)
        }
    }) 
}
projectData()
    
function projectItems(title_id){
  fetch("https://fierce-forest-94320.herokuapp.com/items/" + title_id)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data);
        name.innerText = data.ProjectName
        picture.src = data.image   
        itemOne.innerText = data.ProgressAsOfDate
        itemTwo.innerText = data.PlannedFinishDate
        itemThree.innerText = data.ProgressStatusCode
    })
}
projectItems(2)

function titleClick(title_id){
    projectItems(title_id)
}

document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  alert ("Sorry! This page is under maintenance");
}

const form =document.getElementById("description-form")
 form.onsubmit=handleReview
 function handleReview(event){
    event.preventDefault()
    console.log("form submitted")
    let review = document.getElementById("description").value
    const ul = document.getElementById("progress");
    let li = document.createElement("li");
        li.appendChild(document.createTextNode(review));
        ul.appendChild(li);   
 }


document.querySelector(".tabcontent").addEventListener("mouseenter", entering)

  function entering(ev){
    ev.currentTarget.style.color = "red";
  }
 
//  })