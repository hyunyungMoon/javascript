const title = document.getElementsByClassName("ch1");

const span1 = document.querySelector(".ch1 span");

function handleMouseEnter(){
  span1.innerText = "enter";
}

function handleMouseLeave(){
  span1.innerText = "leave";
}

span1.addEventListener("mouseenter", handleMouseEnter);
span1.addEventListener("mouseleave", handleMouseLeave);



