// let ongoingProjects = () => {
//   const url = "https://fierce-forest-94320.herokuapp.com/items";
//     fetch(url)
//       .then((res) => res.json())
//       .then((projectData) => {
//         console.log(projectData);
        
//         })
//       .catch((error) => console.log(error));
//     };

//     let initialize = () => {
//       ongoingProjects();
//       projectData(); 
//     };
//     initialize();

// function researchInfo() {
  fetch("https://fierce-forest-94320.herokuapp.com/items")
  .then((data) => data.json())
  .then((completeResearchData) => {
      //console.log(data1[0]);
      let data1=+" "
      completeResearchData.map((values) => {
        data1 = `<div class="researchData">
        <h1 class="ProjectName">${values.ProjectName}</h1>
        <p class="ProgressAsOfDate">${values.ProgressAsOfDate}</p>
        <p class="PublicationStatus">${values.PublicationStatus}</p>
      </div>`
      });
      document.getElementById("research").innerHTML=data1;
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

