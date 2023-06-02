function appendToResult(value) {
    document.getElementById("result").value += value;
    
  }
  
  function calculate() {
    try {
        let expression = document.getElementById('result').value;
        expression = expression.replace(/√([\d.]+)/g, "Math.sqrt($1)");
        
      let result = eval(expression);
      document.getElementById("result").value = result;
    } 
    catch (error) {
        
         document.getElementById("result").value = "Error";
    }
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function deleteChar() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
  }
  
