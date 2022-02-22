const btnAdd = document.querySelector('.add');
const content = document.querySelector('.container');
const btnEdit = document.querySelector('edit');
const btnRemove = document.getElementById('#remove');
let i = 0;
btnAdd.addEventListener('click',function () {
    var newWindow = document.createElement('div')
    newWindow.setAttribute('id', `di_${i}`)
    newWindow.innerHTML =`<div class="window">
    <div class="barre">
        <i class="fa fa-trash-o" style="font-size:36px" type="submit"  onclick="removeNode(${i})"></i>
        <i class="fa fa-edit" style="font-size:36px"03
         onclick="editNode(${i})"></i type="submit">
    </div>
    <textarea id="textarea_${i}" cols="30" rows="10">
    </textarea>
   </div>`
    content.appendChild(newWindow)
    i++;
});
function removeNode(n) {
    document.getElementById('di_'+n).remove()
}
function editNode(n) {
   let text = document.getElementById('textarea_'+n)
   text.toggleAttribute('disabled')
   text.focus()

}
