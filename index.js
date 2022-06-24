
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

  function Search(item){
    var collection = document.getElementsByClassName("wrapper");
    for (i = 0;i < collection.length; i++){
        if (((collection[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
            collection[i].style.display = "block";
            } else {
                collection[i].style.display = "none";
                }
    }
}
function projectData() {
  fetch("https://fierce-forest-94320.herokuapp.com/items")
    .then((res) => res.json())
    .then((projectData) => {
      const ul = document.getElementById("projectDetails");
      ul.innerHTML = "";
      for (const item of projectdata) {
        console.log();
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(item.name));
        li.id = item.id;
        li.setAttribute("onclick","beerClick("+item.id+")")
        ul.appendChild(li);
      }
    })
    .catch((error) => console.warn(error));
}