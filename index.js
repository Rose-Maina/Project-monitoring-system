fetch("https://fierce-forest-94320.herokuapp.com/items")
  .then((data) => data.json())
  .then((completeStadiumData) => {
      //console.log(data1[0]);
      let data1=" "
      completeStadiumData.map((values) => {
        data1 = `<div class="researchData">
        <h1 class="ProjectName">${values.ProjectName}</h1>
        <p class="ProgressAsOfDate">${values.ProgressAsOfDate}</p>
        <p class="PublicationStatus">${values.PublicationStatus}</p>
      </div>`
      });
      document.getElementById("stadium").innerHTML=data1;
    }
  )
fetch("https://fierce-forest-94320.herokuapp.com/items")
  .then((data) => data.json())
  .then((completeResearchData) => {
      //console.log(data1[0]);
      let data2=" "
      completeResearchData.map((values) => {
        data2 = `<div class="researchData">
        <h1 class="ProjectName">${values.ProjectName[3]}</h1>
        <p class="ProgressAsOfDate">${values.ProgressAsOfDate[3]}</p>
        <p class="PublicationStatus">${values.PublicationStatus[3]}</p>
      </div>`
      });
      document.getElementById("research").innerHTML=data2;
    }
  )

const form =document.getElementById("description-form")
 form.onsubmit=handleReview
 function handleReview(event){
    event.preventDefault()
    console.log("form submitted")
    let review = document.getElementById("description").value
    const ul = document.getElementById("review-list");
    let li = document.createElement("li");
        li.appendChild(document.createTextNode(review));
        ul.appendChild(li);
    
 }
