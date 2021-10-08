const themeTitle = document.querySelector('.theme-title');
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;
const cards = document.querySelectorAll('.modeBg');
const titles = document.querySelectorAll('.mode-title');
const subTitles = document.querySelectorAll('.mode-subtitle');
const seperater = document.querySelector('.separater');
const BG = document.querySelector('.bg-white');

themeSwitch.addEventListener('click', ()=>{
  themeSwitch.checked ? lighten() : darken();
});

function darken(){
  body.style.backgroundColor="hsl(232, 19%, 15%)";
  BG.style.display="none";
  seperater.style.backgroundColor="#333A55";
  Array.from(cards).forEach(card=>{
    card.style.backgroundColor = "hsl(228, 28%, 20%)";
    hover(card, ["hsl(228, 28%, 28%)","hsl(228, 28%, 20%)"]);
  });
  Array.from(titles).forEach(elem => {
    elem.style.color="hsl(0, 0%, 100%)";
  });
  Array.from(subTitles).forEach(elem=>{
    elem.style.color="hsl(228, 34%, 66%)";
  });
}
function lighten(){
  body.style.backgroundColor="hsl(0, 0%, 100%)";
  BG.style.display="block";
  seperater.style.backgroundColor="#848BAB";
  Array.from(cards).forEach(card=>{
    card.style.backgroundColor = "hsl(227, 47%, 96%)";
    hover(card, ["hsl(0, 0%, 85%)","hsl(227, 47%, 96%)"])
  });
  Array.from(titles).forEach(elem => {
    elem.style.color="hsl(230, 17%, 14%)";
  });
  Array.from(subTitles).forEach(elem=>{
    elem.style.color="hsl(228, 12%, 44%)";
  });
}

function hover(elem, colors){
  elem.addEventListener('mouseover', ()=>{
    elem.style.background=colors[0];
  }, false);
  elem.addEventListener('mouseleave', ()=>{
    elem.style.background=colors[1];
  },false);
}
function init(){
  darken();
}

init();