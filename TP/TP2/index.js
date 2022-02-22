etatBtn();
let tab1 = ["Mon Premier Element","Mon deuxieme Element","Mon Troisieme Element","Mon Quatrieme Element"]
const elts = document.getElementById('elements')
const elts1 = document.querySelector('#elements1')
tab1.forEach(el => {
    const ul  = document.createElement('ul') 
    ul.innerHTML = `<li>${el}</li>
   `
   elts.appendChild(ul)
});
let all = document.querySelectorAll(' li')
const button = document.getElementById('right')
const droite = document.getElementById('elements1')
const button1 = document.getElementById('left')
const droite1 = document.getElementById('elements')

for (let i = 0; i < all.length; i++) {
    all[i].addEventListener('click',function () {
        all[i].classList.toggle('active')     
    })
}

button.addEventListener('click',function () {
    let b = document.querySelectorAll('.elements li')
        b.forEach(function (l) {
            if (l.className=='active'
            ) {
                droite.appendChild(l)
                
            }
        })

    })

button1.addEventListener('click',function () {
    let a = document.querySelectorAll('#elements1 li')
        a.forEach(function (l) {
            if (l.className=='active'
            ) {
                droite1.appendChild(l)
            }
        })

})
    
 function etatBtn(){
     if (elts1.childNodes.length ==0){
         button1.disabled = true;
     }else{
         button1.disabled =false;
     }
 }  
 button1.addEventListener('click',alert('hello'))  