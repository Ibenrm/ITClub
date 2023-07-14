"use strict"

import users from './database/datas.json?v=2' assert {type: 'json'};

var myUser = {method: 'GET', headers: {'Content-Type': 'application/json'},mode:'cors',cache:'default'};
let myRequest = new Request('./database/datas.json', myUser);
fetch(myRequest)
.then(function(resp){
  return resp.json();
})
.then(function(data){
  users = data;
});

const {
  host, hostname, href, origin, pathname, port, protocol, search
  } = window.location
  let str = search;
  let newStr = str.replace(/\?/g, "");
  let imgs = document.getElementById('imgRandom');
  let newImage;
  switch(newStr){
    case "1":
      newImage = "../ITClub/source/img/microsoftoffice.jpg";
      break;
    case "2":
      newImage = "../ITClub/source/img/robloxStudio.jpg";
      break;
    case "3":
      newImage = "../ITClub/source/img/canva.jpg";
      break;
    case "4":
      newImage = "../ITClub/source/img/trello.jpg";
      break;
    case "5":
      newImage ="../ITClub/source/img/microsoftoffice.jpg";
      break;
    case "6":
      newImage = "../ITClub/source/img/Khawatir.jpeg"
      break;
    case "7":
      newImage="../ITClub/source/img/trello.jpg";
      break;
  }
  imgs.src = newImage;

console.log(users[newStr]);
onEnable(users[newStr]);

function onEnable(dt){
  let title = document.getElementById('title10');
  let updated = document.getElementById('updated');
  let paraf = document.getElementById('paraf');
  title.innerHTML = dt[0];
  updated.innerHTML = dt[1];
  paraf.innerHTML=dt[2];
}
