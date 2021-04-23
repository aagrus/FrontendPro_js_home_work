
// // 1 exersise


function K_to_C (temp){
    return temp - 273.15;
  }
  
  function F_to_C (temp){
    return (temp - 32) / 1.8;
  }
  
  function C_to_K (temp){
    return temp + 273.15;;
  }
  
  function C_to_F (temp){
    return (temp * 9 / 5) + 32;
  }
  
  function temperature_conversion (temp, unit) {
    let F;
    let C;
    let K;
    
    switch (unit) {
      case ("f"): F = temp; С = F_to_C(temp); K = C_to_K(C); 
        break;
      case ("c"): C = temp; F = C_to_F(temp); K = C_to_K(C);
        break;
      case ("k"): K = temp; C = K_to_C(K); F = C_to_F(C);
        break;
    } 
      
    return {
      F: F,
      C: C,
      K: K
    }
  }
  
 console.log(temperature_conversion(156, "c"));


//rekursia
 function calc_summ (n) {
     if (n === 1) {
         return n ;
     }
     let prev_result = calc_summ (n - 1);
     return n + prev_result;
 }
 let result = calc_summ (8);
 console.log ('result', result);

 
 function sum(n){
    var sum = 0;
    for(var step = 1; step <= n; step++){
      sum = sum + step;
    }
    return sum;
  }
  console.log(sum(9))


