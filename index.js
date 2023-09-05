let gridContainer = document.querySelector(".grid-container");
let changeGrid = document.querySelector(".change-grid");
let submit = document.querySelector(".submit");

let dialog = document.getElementsByTagName("dialog")[0];
let input = document.getElementsByTagName("input")[0];
let newGrid = 16;
gridContainer.style.gridTemplateRows = `repeat(${newGrid}, 1fr)`;
gridContainer.style.gridTemplateColumns = `repeat(${newGrid}, 1fr)`;
for (let i = 1; i <= newGrid * newGrid; i++) {
  let div = document.createElement("div");
  div.classList.add("item");
  div.classList.add("item" + i);
  div.style.border = `hsla(0, 0%, 0%, 0.1) solid 1px`;
  if ("item1" === div.classList[1]) {
    div.style.borderTopLeftRadius = "10px";
  }
  if ("item16" === div.classList[1]) {
    div.style.borderTopRightRadius = "10px";
  }
  if ("item1" === div.classList[1]) {
    div.style.borderTopLeftRadius = "10px";
  }
  if ("item241" === div.classList[1]) {
    div.style.borderBottomLeftRadius = "10px";
  }
  if ("item256" === div.classList[1]) {
    div.style.borderBottomRightRadius = "10px";
  }
  gridContainer.append(div);
}

gridContainer.addEventListener("mouseover", (e) => {
  if (e.target.classList[0] === "item") {
    e.target.style.backgroundColor = `hsla(${
      Math.floor(Math.random() * 300) + 1
    }, ${Math.floor(Math.random() * 100) + 20}%, ${
      (Math.floor(Math.random() * 300), +55)
    }%,0.6`;

    // setTimeout(() => {
    //   e.target.style.backgroundColor = "pink";
    // }, 4000);
  }
});

changeGrid.addEventListener("click", (e) => {
  e.preventDefault();
  if (dialog.style.display === "none" || dialog.style.display === "") {
    dialog.style.display = "flex";
  } else {
    dialog.style.display = "none";
  }
});

submit.addEventListener("click", (e) => {
  newGrid = input.value;

  console.log(parseInt(newGrid));
  if (parseInt(newGrid) < 64) {
    gridContainer.innerHTML = "";
    gridContainer.style.gridTemplateRows = `repeat(${newGrid}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${newGrid}, 1fr)`;

    for (let i = 1; i <= newGrid * newGrid; i++) {
      let div = document.createElement("div");
      div.classList.add("item");
      div.classList.add("item" + i);
      div.style.border = `hsla(0, 0%, 0%, 0.1) solid 1px`;
      gridContainer.append(div);
      if ("item1" === div.classList[1]) {
        div.style.borderTopLeftRadius = "10px";
      }
      if (`item${newGrid}` === div.classList[1]) {
        div.style.borderTopRightRadius = "10px";
      }
      if (`item${newGrid * newGrid - (newGrid - 1)}` === div.classList[1]) {
        div.style.borderBottomLeftRadius = "10px";
      }
      if (`item${newGrid * newGrid}` === div.classList[1]) {
        div.style.borderBottomRightRadius = "10px";
      }
    }
    dialog.style.display = "none";
  } else {
    input.value = "";
    document.getElementsByTagName("span")[0].style.display = "flex";
  }
});
