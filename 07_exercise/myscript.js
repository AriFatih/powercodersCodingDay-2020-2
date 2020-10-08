
var GCD;

function getGCD(arr1){
    
    arr1 =[64,24,16];
   
    arr1.sort( function( a, b ) { return a-b; });
    console.log(arr1);
    
    let lowest = arr1[0];
    let divisors = [];
    console.log("lowest: " + lowest);

    for ( let i = 1; i <= lowest; i++) {
        if ( lowest % i === 0 ) {
            divisors.push(i);
        }
    }
    console.log("divisors: " + divisors);
   
    for ( let j = 1; j < 3; j++) {
        for ( let k = 0;  k < divisors.length; k++) {
            if ( arr1[j]  % divisors[k] != 0 ) {
                divisors.splice( k, 1);
            }
        }
    }
    
    GCD = document.getElementById('GCD');
    GCD.innerHTML = `The Gretaestdivisor of 16, 24 and 64 is:  ${divisors[divisors.length-1]}`;  
    
    
}











      
     
