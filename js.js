var calculatorInput="";
var arrayOfElements=[];
var arrayOfActions=[];
var actions=["*", "/", "%", "+", "-", "="];

$(".btn.numberButton").on("click",function(){
  var valueFromElement = this.value;
  calculatorInput += valueFromElement;
});

$("#delete").on("click",function(){
  calculatorInput=calculatorInput.substring(0,calculatorInput.length -1);
})

$(".btn.actionButton").on("click",function(){
  if(calculatorInput.length==0){
    alert("Please enter a number")
  } else{
    var lastCharacterInInput=calculatorInput.substring(calculatorInput.length-1,calculatorInput.length);
    if(actions.includes(lastCharacterInInput)){
      alert("Please enter a number before selecting another action");
    } else {
      var numberSincePreviousAction;
      var indexOfLastAction=0;
      var lastNumber;
      if (arrayOfActions.length==0){
        indexOfLastAction = calculatorInput.lastIndexOf(arrayOfActions[arrayOfActions.length-1]);
        lastNumber = calculatorInput.substring(indexOfLastAction+1, calculatorInput.length);
      } else {
        lastNumber = calculatorInput.substring(indexOfLastAction, calculatorInput.length);
      }
      var valueFromElement = this.value;
      arrayOfActions.push(this.value);
      arrayOfElements.push(lastNumber);
      calculatorInput += valueFromElement;
    }}
  });

  $(".btn").on("click", function(){
    $("#calculatorInput").val(calculatorInput);
  });


  $("#equals").on("click",function(){
    calculatorInput=calculateAll(arrayOfElements,arrayOfActions);
    $("#calculatorInput").val(calculatorInput);
  })
  function eql() {
  	$('.calculatorInput').val(eval($('.calculatorInput').val()));
  }
  function calculateAll(arrayOfElements, arrayOfActions){
    var result = "";
    arrayOfActions.forEach()
      var actionIndices = arrayOfActions.map((e,i)=> e==action ? i : "").filter(String);
    }
    $("#equals").on('click',function(){
  var expression = $(".calculatorInput").val();
  $(".calculatorInput").val(eval(expression));
});
