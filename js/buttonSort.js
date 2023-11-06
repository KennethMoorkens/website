'use strict';
 const buttonContainer = document.querySelector('.buttonContainer');
 const buttons = [...buttonContainer.children];
 const sortedButtons = buttons.sort((buttonA, buttonB) => {
   const nameA = buttonA.querySelector('a').innerText.toLowerCase();
   const nameB = buttonB.querySelector('a').innerText.toLowerCase();
   if(nameA < nameB){
     return -1;
   } else if(nameA > nameB){
     return 1;
   } else {
     return 0;
   }
 });
 sortedButtons.forEach(button => buttonContainer.append(button));
