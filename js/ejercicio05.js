var body = document.getElementsByTagName('body')[0];
var hasOutput = false;

document.addEventListener('click', event => {
    var h3 = event.target;
    
    if (h3.tagName != 'H3') {
        return;
    }
    
    var grado = h3.textContent.trim();
    var turno = h3.parentElement.id.toLowerCase();
    var grupos = Array.from(
        Array.from(h3.nextSibling.nextSibling.childNodes)
            .filter(thisNode => thisNode.nodeName == 'LI')
    );
    
    var output1 = 'Has elegido ' + grado + ' que se imparte en turno de ' + turno;
    
    var output2 = 'Los nº de grupos que se imparten son ' + grupos.length + ': ';
    
    for (let i = 0; i < grupos.length; i++) {
        output2 += grupos[i].textContent;
        if (i == grupos.length - 2) {
            output2 += ' y ';
        } else if (i != grupos.length - 1) {
            output2 += ', ';
        }
    }
    
    if (hasOutput) {
        for (let i = 0; i < 3; i++) {
            body.lastChild.remove();
        }
    }
    
    body.appendChild(document.createTextNode(output1));
    body.appendChild(document.createElement('br'));
    body.appendChild(document.createTextNode(output2));
    
    hasOutput = true;
});
