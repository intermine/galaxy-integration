document.addEventListener("DOMContentLoaded", function() {
  //get all interMines
  $.ajax("http://registry.intermine.org/service/instances").then(function(response) {
    var mines = response.instances;
    var minesList = document.getElementById("interMinesList");

    //debug. remove when done.
    console.log(mines);

    //create a new mine dom node
    //and add it to the list of mines
    mines.map(function(mine) {
      minesList.append(mineNode(mine));
    });

  });

  function mineNode(mine) {
    //Generate text for links to each mine.
    var mineNode = document.createElement("tr"),
      mineRow = "<td><a href='" + mine.url + "'>" + mine.name + "</td>" +
      "<td>" + mine.organisms.join(", ") + "</td>";
    mineNode.organisms = mine.organisms;
    mineNode.setAttribute("class", "mineEntry");
    mineNode.innerHTML = mineRow;
    return mineNode;
  }
});
