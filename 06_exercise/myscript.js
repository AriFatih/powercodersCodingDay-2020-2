

var array1 = [1,4,6,3,2];

var wordFormat;

function weekNumberstoWords(){
  
  for( let i=0; i<array1.length; i++){
            
          switch (array1[i]) {
            case 0:
              array1[i] = "Sunday";
              break;
            case 1:
              array1[i] = "Monday";
              break;
            case 2:
              array1[i] = "Tuesday";
              break;
            case 3:
              array1[i] = "Wednesday";
              break;
            case 4:
              array1[i] = "Thursday";
              break;
            case 5:
              array1[i] = "Friday";
              break;
            case  6:
              array1[i] = "Saturday";
          }
          }   
  
wordFormat = document.getElementById('wordFormat');
wordFormat.innerHTML = `Your word format of your week days is:  ${array1}`;
}







      
     
