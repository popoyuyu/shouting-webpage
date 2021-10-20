$(document).ready(function(){
  $(#formOne).submit(function(event){
    event.preventDefault();
    let input = $(#input1).val();
    input = input.toUpperCase();
    alert("hi");
  
  });
});