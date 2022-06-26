fetch("https://fierce-forest-94320.herokuapp.com/items")
  .then((data) => data.json())
  .then((completeResearchData) => {
      //console.log(data1[0]);
      let data1=" "
      completeResearchData.map((values) => {
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
      let data3=" "
      completeResearchData.map((values) => {
        data3 = `<div class="researchData">
        <h1 class="ProjectName">${values.ProjectName[2]}</h1>
        <p class="ProgressAsOfDate">${values.ProgressAsOfDate[2]}</p>
        <p class="PublicationStatus">${values.PublicationStatus[2]}</p>
      </div>`
      });
      document.getElementById("research").innerHTML=data3;
    }
  )

  function Search(item){
    var collection = document.getElementsByClassName("wrapper");
    for (i = 0;i < collection.length; i++){
        if (((collection[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
            collection[i].style.display = "block";
            } else {
                collection[i].style.display = "none";
                }
    }
};

document.getElementById("mybtn").addEventListener("click", e => alert("Sorry, this page is under maintainance!"))

