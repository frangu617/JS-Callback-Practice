function move(element) {
  element.style.position = "fixed";

  function moveToCoordinates(left, bottom) {
    element.style.left = left + "px";
    element.style.bottom = bottom + "px";
    // setInterval(console.log("left: " + left + " bottom: " + bottom), 1);
    
    element.style.zIndex = 1;
    

    
  }

  function moveWithArrowKeys(left, bottom, callback) {
    let direction = null;
    let x = left;
    let y = bottom;

    element.style.left = x + "px";
    element.style.bottom = y + "px";
    element.style.zIndex = 2;
    

  



    function moveCharacter() {
      // setInterval(function(){

      if (direction === "west") {
        if (x > 0) {
          x -= 1;
        }
      }
      if (direction === "east") {
        if (x < window.innerWidth-element.offsetWidth) {
        x += 1;
        }
      }

      if (direction === "north") {
        if (y < window.innerHeight-element.offsetHeight)
        y += 1;
      }
      if (direction === "south") {
        if( y > 100)
        y -= 1;
      }

      element.style.left = x + "px";
      element.style.bottom = y + "px";
      
    }

    setInterval(moveCharacter, 1);
    // setInterval(console.log("left: " + x + " bottom: " + y), 1);

    document.addEventListener("keydown", function (e) {
      if (e.repeat) return;

      if (e.key === "ArrowLeft") {
      
          direction = "west";
        
      }
      if (e.key === "ArrowUp") {
        direction = "north";
      }
      if (e.key === "ArrowRight") {
        direction = "east";
      }
      if (e.key === "ArrowDown") {
        direction = "south";
      }
      if (callback !== undefined) {
        callback(direction);
      }
    });

    document.addEventListener("keyup", function (e) {
      direction = null;
      if (callback !== undefined) {
        callback(direction);
      }
    });
  }

  return {
    to: moveToCoordinates,
    withArrowKeys: moveWithArrowKeys,
  };
}

