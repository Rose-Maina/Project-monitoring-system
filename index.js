

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
      projectData(); 
    };
    initialize();

function projectData() {
  fetch("https://fierce-forest-94320.herokuapp.com/items/projectId")
  .then((data) => data.json())
  .then((data) => {
    const ul = document.getElementById("research")
    ul.innerText = data.ProjectId;
    console.log(data)
  })
}
projectData()

  // async function loadIntoTable (url, table) {

  // }

  // loadIntoData("./data.json", document.querySelector("table));

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

