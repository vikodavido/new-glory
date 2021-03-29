let heart = document.querySelectorAll('.likes-icon');
let likesNumber = document.querySelectorAll('.likes');
let counter = 0;

console.log(heart);
for (let i=0; i < heart.length; i++ ) {

heart[i].onclick = function () {
    console.log('onclick');

    if (heart[i].classList.contains('added') && counter!==0) {
      counter--;
    } else if(counter==0){
      counter++;
    }
    
    likesNumber[i].textContent = counter;
    heart[i].classList.toggle('added');
  }
};
// menu

let allMenu = document.querySelector('.all-menu-none');
let btnMenu = document.querySelector('.menu');





btnMenu.onclick = function() {
    
    btnMenu.classList.toggle('menu-added');
   

    if (btnMenu.classList.contains('menu-added')) {
        allMenu.classList.remove('all-menu-none');
        allMenu.classList.add('all-menu');
        btnMenu.classList.add('menu-added');
        btnMenu.classList.remove('btn');   
    } else {
        allMenu.classList.add('all-menu-none'); 
        allMenu.classList.remove('all-menu');
        btnMenu.classList.remove('menu-added');
        btnMenu.classList.add('btn');   
    }
}


// most-most

let switchNew = document.querySelector('.switch-new');
let switchPopular = document.querySelector('.switch-popular');
let subscription = document.querySelectorAll('.subscription');


switchNew.onclick = function() {
    switchNew.classList.toggle('switch-active');
    switchPopular.classList.remove('switch-active');

for (let i = 0; i < subscription.length; i++) {
    console.log(subscription[i]);
    
    if (subscription[i].classList.contains('switch-new-added')) {
      
      subscription[i].classList.remove('subscription-none');
    } else {
      subscription[i].classList.add('subscription-none');
      
    }

}
};

switchPopular.onclick = function() {
  switchPopular.classList.toggle('switch-active'); 
  switchNew.classList.remove('switch-active');
  
for (let i = 0; i < subscription.length; i++) {
  console.log(subscription[i]);
  

  if (subscription[i].classList.contains('switch-popular-added')) {
    
    subscription[i].classList.remove('subscription-none');
  } else {
    subscription[i].classList.add('subscription-none');
    
  }

}
};




