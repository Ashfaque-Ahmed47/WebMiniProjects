const buttons = document.querySelectorAll('.calculator-footer div');
  // Get the result input field
  const resultField = document.getElementById('result');
  let expression = '';
  // Loop through all buttons and add click event listeners
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Append the button's text content to the result field
      

      if(button.textContent==="C")
      {
         clear(); 
      }
      else if(button.textContent==="AC")
      {
        clear();
      }
      else if(button.textContent==="=")
      {
        evaluate();
      }
      else
      {
        expression += button.textContent; 
        resultField.value = expression;
      }
      
    });
  });

  // Function to evaluate the expression

  function clear()
  {
    resultField.value=" "
  }
  function evaluate() {
    // Use JavaScript eval function to evaluate the expression
    resultField.value = eval(expression);
    expression = resultField.value; // Update expression with the result
  }
