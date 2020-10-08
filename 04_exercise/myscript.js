
var bookList;
var books = [
  {
    name: 'ZZZ',
    price: '12',
    alreadySold: false
  }, 
  {
    name: 'XXX',
    price: '15',
    alreadySold: true
  },
  {
    name: 'YYY',
    price: '15',
    alreadySold: true
  }
];


list2= books.sort(function(a, b) {
        var nameA = a.name.toLowerCase(); 
        var nameB = b.name.toLowerCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
        });
console.log(list2);
  

function listTheBooks(){   
      var list2 = document.getElementById("bookList");
      var items = list2.getElementsByTagName("li");
      for(var i = 0, size = items.length; i< size; i++){
          items[i].innerHTML = books[i].name;
}
}

function addBook(nm, prc, sld){
    let b={
      name:nm,
      price:prc,
      alreadySold:sld}

  list2.push= b;  
}














      
     