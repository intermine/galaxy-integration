//useful for debug until I have a real redirect coming in to read from.
var fakeParams = {
  "identifierType" : "Gene",
  "identifiers" : ["pparg", "GATA1", "AVP"],
  "organism" : "H. sapiens"
}

//let's make the list of mines globally accessible
var mines;

//get all InterMines as soon as the DOM has loaded
document.addEventListener("DOMContentLoaded", function() {
  $.ajax("http://registry.intermine.org/service/instances").then(function(response) {
    //storing mines globally
    mines = response.instances;

    var minesList = document.getElementById("interMinesList");

    //debug. remove when done.
    console.log(mines);

    //once everything is loaded, display a list of mines to the user
    mines.map(function(mine) {
      minesList.append(mineNode(mine));
    });

  });
});

function mineNode(mine) {
  //Generate text for links to each mine.
  var mineNode = document.createElement("tr"),
    mineRow = "<td>" + mine.name + "</td>" +
    "<td>" + mine.organisms.join(", ")
    + "</td><td class='exportToMine'>" + mineNav(mine.url, fakeParams) + "</td>";
  mineNode.organisms = mine.organisms;
  mineNode.setAttribute("class", "mineEntry");
  mineNode.innerHTML = mineRow;
  return mineNode;
}

function mineNav(mine, data) {
return '<form action="' + mine +'/portal.do" name="list" method="post">' +
         '<input type="hidden" name="externalids" value="' +
                  fakeParams.identifiers.join(",") + '" />' +
         '<input type="hidden" name="class" value="' +
                  fakeParams.identifierType  + '" />' +
         '<input type="submit" value="Submit" />' +
       '</form>'
}
