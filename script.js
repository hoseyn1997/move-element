let $ = document;

let touch_starting_position = { x: 0, y: 0 };
let node_starting_position = { x: 0, y: 0 };
let window_moving = false;
let touchArea = $.getElementById("my-area");

touchArea.addEventListener("touchstart", (e) => {
  touch_starting_position.x = Math.floor(e.targetTouches[0]["screenX"]);
  touch_starting_position.y = Math.floor(e.targetTouches[0]["screenY"]);
  node_starting_position.x = Math.floor(e.srcElement.offsetLeft);
  node_starting_position.y = Math.floor(e.srcElement.offsetTop);
});

touchArea.addEventListener("touchmove", (e) => {
  let currentPosition = {
    x: Math.floor(e.targetTouches[0]["screenX"]),
    y: Math.floor(e.targetTouches[0]["screenY"]),
  };
  e.target.style.left =
    Math.abs(
      currentPosition.x - touch_starting_position.x + node_starting_position.x
    ) + "px";
  e.target.style.top =
    Math.abs(
      currentPosition.y - touch_starting_position.y + node_starting_position.y
    ) + "px";
});

touchArea.addEventListener("mousedown", (e) => {
  window_moving = true;
  touch_starting_position.x = Math.floor(e.screenX);
  touch_starting_position.y = Math.floor(e.screenY);
  node_starting_position.x = Math.floor(e.target.offsetLeft);
  node_starting_position.y = Math.floor(e.target.offsetTop);
});
touchArea.addEventListener("mousemove", (e) => {
  if (window_moving) {
    let currentPosition = {
      x: Math.floor(e.screenX),
      y: Math.floor(e.screenY),
    };
    e.target.style.left =
      Math.abs(
        currentPosition.x - touch_starting_position.x + node_starting_position.x
      ) + "px";
    e.target.style.top =
      Math.abs(
        currentPosition.y - touch_starting_position.y + node_starting_position.y
      ) + "px";
  }
});
touchArea.addEventListener("mouseup", (e) => {
  window_moving = false;
});
