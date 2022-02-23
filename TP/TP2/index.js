let tab1 = ["Mon Premier Element","Mon deuxieme Element","Mon Troisieme Element","Mon Quatrieme Element"];
const elts = document.getElementById('elements')
const elts1 = document.getElementById('elements1')
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
    all[i].addEventListener('mouseover',function () {
        all[i].classList.toggle('active')     
    })
}

button.addEventListener('click',function () {
    let b = document.querySelectorAll('.elements li')
        b.forEach(function (l) {
            if (l.className=='active'
            ) {
                droite.appendChild(l)
                l.className=""
                
            }
            etatBtn(elts1,button1)
            etatBtn(elts,button)
        })

    })

button1.addEventListener('click',function () {
    let a = document.querySelectorAll('#elements1 li')
        a.forEach(function (l) {
            if (l.className=='active'
            ) {
                droite1.appendChild(l)
                
            }
            etatBtn(elts1,button1)
            etatBtn(elts,button)
        })

})

etatBtn(elts1,button1);
function etatBtn(conteneur ,bouton) {
    if(conteneur.childNodes.length==0 ){
        bouton.disabled =true;
        bouton.className="";
    }else{
        bouton.disabled = false;
    }
    bouton.className="";
}
