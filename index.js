
let ongoingProjects = () => {
    const url = "https://fierce-forest-94320.herokuapp.com/items";
    fetch(url)
      .then((res) => res.json())
      .then((projectData) => {
        console.log(projectData);
        
        })
      .catch((error) => console.log(error));
    };
  let initialize = () => {
    ongoingProjects(); 
  };
  initialize();

  function getProjectData() {
    fetch("https://fierce-forest-94320.herokuapp.com/items")
      .then((res) => res.json())
      .then((jsondata) => {
        let firstItem = document.querySelector("ProjectName");
        firstItem.innerText = jsondata.projectName;
        let secondItem = document.querySelector("ProgressAsOfDate");
        secondItem.innerText = jsondata.progressAsOfDate;
        let thirdItem = document.querySelector("PublicationStatus");
        thirdItem.innerText = jsondata.publicationStatus;
        let fourthItem = document.querySelector("CurrentActualAmountsDate");
        fourthItem.innerText = jsondata.publicationStatus;
        let fifthItem = document.querySelector("PlannedStartDate");
        fifthItem.innerText = jsondata.publicationStatus;
        let sixthItem = document.querySelector("PlannedFinishDate");
        sixthItem.innerText = jsondata.publicationStatus;
        let sevethItem = document.querySelector("ActualStartDate");
        seventhItem.innerText = jsondata.publicationStatus;
        let eigthItem = document.querySelector("ProjectCurrency");
        eigthItem.innerText = jsondata.publicationStatus;
        let ninthItem = document.querySelector("ProjectRawActualCost");
        ninthItem.innerText = jsondata.publicationStatus;
        let tenthItem = document.querySelector("ProjectBurdenedActualCost");
        tenthItem.innerText = jsondata.publicationStatus;
        let eleventhItem = document.querySelector("ProgressStatusCode");
        eleventhItem.innerText = jsondata.publicationStatus;
        const ul = document.getElementById("Project-details");
        projectDetails.innerHTML=""
        for(const projectData of jsondata.projectDetails){
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(projectData));
            ul.appendChild(li);  
        }
      })
      .catch((error) => console.warn(error));
  }
  getProjectData()

  const clearIcon = document.querySelector(".clear-icon");
  const searchBar = document.querySelector(".search");

  searchBar.addEventListener("keyup", () => {
    if(searchBar.value && clearIcon.style.visibility != "visible"){
      clearIcon.style.visibility = "visible";
    } else if(!searchBar.value) {
      clearIcon.style.visibility = "hidden";
    }
  });

  clearIcon.addEventListener("click", () => {
    searchBar.value = "";
    clearIcon.style.visibility = "hidden";
  })