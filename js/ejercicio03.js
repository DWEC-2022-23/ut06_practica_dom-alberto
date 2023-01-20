var buttonAdd = document.getElementsByClassName('BotonAñadir')[0];
var inputText = document.getElementsByClassName('AñadirElemento')[0];
var mainList = Array.from(document.getElementsByClassName('list')[0].childNodes)
        .filter(thisNode => thisNode.nodeName == 'UL')[0];

buttonAdd.addEventListener('click', () => {
    if (!inputText.value) {
        return;
    }
    
    var newElement = document.createElement('li');
    newElement.innerText = inputText.value;
    
    inputText.value = '';
    
    mainList.appendChild(newElement);
});
