function say_hello(name){
  alert('Hola ' + name);
}

var cont = 20;
function get_bigger(){
  var paragraph = document.getElementsByTagName('p')[0];
  cont += 5;
  if(parseInt(paragraph.style.fontSize) > 100){
    paragraph.style.color = 'red';
  }else{
    paragraph.style.color = 'yellow';
  }
  paragraph.style.fontSize = cont + 'px'
}

function get_smaller(){
  var paragraph = document.getElementsByTagName('p')[0];
  cont -= 5;
  if(parseInt(paragraph.style.fontSize) < 50){
    paragraph.style.color = 'green';
  }else{
    paragraph.style.color = 'yellow';
  }
  paragraph.style.fontSize = cont +'px';
}


function sortArray(){

  var odd_list = document.getElementById('par');
  var even_list = document.getElementById('impar');
  var string_list = document.getElementById('string');

  arr.forEach(function(ele) {
    var item = document.createElement('li');
    item.innerText = ele;

    switch (typeof(ele)){
      case 'number':
        if (ele % 2 == 0){
          odd_list.appendChild(item);
        } else {
          even_list.appendChild(item);
        }
        break;

      case 'string':
        string_list.appendChild(item);    
    }
    
})
};
