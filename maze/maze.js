var gridsize = 30;
var gridwidth = 500;
var grid = document.createElement("div");
grid.className="grid"
grid.style.height = gridwidth+"px"
grid.style.width = gridwidth+"px"
grid.style.zIndex = 0

function addplayer(row ,col) {
    console.log(row ,col)
    playerElement = document.getElementsByClassName("block "+row+"-"+col)[0];
    playerElement.className = playerElement.className.replace("block", "player");
}

function makeInactive(row, col,typeofplayer) {
    playerElement = document.getElementsByClassName(typeofplayer+" "+row+"-"+col)
    if (playerElement.length === 0) return


    playerElement = playerElement[0];
    playerElement.className = playerElement.className.replace(typeofplayer, "block");
}

function keyDownFunction(e) {
    // console.log(e.keyCode)
    let position = document.getElementsByClassName("player")[0].className.split(" ")[1].split("-")
    let enemyposition = document.getElementsByClassName("enemy")[0].className.split(" ")[1].split("-")
    let r = parseInt(position[0])
    let c = parseInt(position[1])

    let r_enemy = parseInt(enemyposition[0])
    let c_enemy = parseInt(enemyposition[1])

    console.log(r_enemy, c_enemy)
    if (e.keyCode === 37  && c_enemy > 0) {
      // left
      makeInactive(r_enemy, c_enemy, "enemy")
      if (r === r_enemy && c_enemy-1 === c) {
        showresult("Enemy Won!!")
      } else {
        addenemy(r_enemy, c_enemy-1)
        console.log("left")
      }
    } else if (e.keyCode === 38 && r_enemy > 0) {
      // top
      makeInactive(r_enemy, c_enemy, "enemy")
      if (r === r_enemy && c_enemy === c) {
        showresult("Enemy Won!!")
      } else {
        addenemy(r_enemy-1, c_enemy)
        console.log("top")
      }
    } else if (e.keyCode === 39  && c_enemy < gridsize-1) {
      // right
      makeInactive(r_enemy, c_enemy, "enemy")
      if (r === r_enemy && c_enemy+1 === c) {
        showresult("Enemy Won!!")
      } else {
        addenemy(r_enemy, c_enemy+1)
        console.log("right")
      }
    } else if (e.keyCode === 40 && r_enemy < gridsize-1) {
      // down
      makeInactive(r_enemy, c_enemy, "enemy")
      if (r === r_enemy+1 && c_enemy === c) {
        showresult("Enemy Won!!")
      } else {
      addenemy(r_enemy+1, c_enemy)
      console.log("down")
      }
    }

    // console.log(r, c)
    if (e.keyCode === 65  && c > 0) {
      // left
      makeInactive(r, c, "player")
      if (r === r_enemy && c-1 === c_enemy) {
        showresult("You Won!!")
      } else {
      addplayer(r, c-1);
      console.log("left")
      }
    } else if (e.keyCode === 87 && r > 0) {
      // top
      makeInactive(r, c, "player")
      if (r-1 === r_enemy && c === c_enemy) {
        showresult("You Won!!")
      } else {
      addplayer(r-1,c);
      console.log("top")
      }
    } else if (e.keyCode === 68  && c < gridsize-1) {
      // right
      makeInactive(r, c, "player")
      if (r === r_enemy && c+1 === c_enemy) {
        showresult("You Won!!")
      } else {
        addplayer(r, c+1);
        console.log("right")
      }
    } else if (e.keyCode === 83 && r < gridsize-1) {
      // down
      makeInactive(r, c, "player")
      if (r+1 === r_enemy && c === c_enemy) {
        showresult("You Won!!")
      } else {
      addplayer(r+1,c)
      console.log("down")
      }
    }
  }
  

function addenemy(row, col){
  playerElement = document.getElementsByClassName("block "+row+"-"+col)[0];
  playerElement.className = playerElement.className.replace("block", "enemy");
}  

function showresult(show){
  document.getElementById("result").innerHTML = show
}
for (var i = 0; i < gridsize ; i++) {
  var list = document.createElement("div")
  list.className="row"
  list.style.height = (100/gridsize) + "%"
  grid.appendChild(list);

  for (var j=0; j<gridsize; j++) {
      var item = document.createElement("div")
      item.className="block " + i + "-" + j
      list.appendChild(item)
    }
}
document.getElementById("maze").appendChild(grid);

function reset(){
  let position = document.getElementsByClassName("player")
  if(position.length > 0){
  position = position[0].className.split(" ")[1].split("-")
  let r = parseInt(position[0]) 
  let c = parseInt(position[1])
  makeInactive(r, c, "player")   
  }

  let enemyposition = document.getElementsByClassName("enemy")
  if (enemyposition.length > 0){
  enemyposition = enemyposition[0].className.split(" ")[1].split("-")
  let r_enemy = parseInt(enemyposition[0])
  let c_enemy = parseInt(enemyposition[1])
  makeInactive(r_enemy, c_enemy, "enemy")
  }

  addenemy(gridsize-1,gridsize-1)

  addplayer(0,0);  
}
reset()


