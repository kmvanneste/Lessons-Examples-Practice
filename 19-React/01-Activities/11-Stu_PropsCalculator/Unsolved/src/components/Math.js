function Math(props) {
    let num1 = props.num1;
    let num2 = props.num2;
    let result = 0;
     
     switch (props.operator) {
       case "+":
         result = num1 + num2;
         break;
       case "-":
         result = num1 - num2;
         break;
       case "*":
         result = num1 * num2;
         break;
       case "/":
         result = num1 / num2;
         break;
     }
     return {
    //    <span>{result}</span>
     }
   }

