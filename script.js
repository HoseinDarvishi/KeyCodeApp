let $ = document;
$.addEventListener("keydown" , (event)=>{
  event.preventDefault();
})
$.addEventListener("keyup",(event)=>{
  let numberKey = $.querySelector(".keyCode-container");
  let keyField = $.querySelector('#eventKey');
  let locationField = $.querySelector('#eventLocation');
  let whichField = $.querySelector('#eventWhich');
  let codeField = $.querySelector('#eventCode');
  console.log(event);
  numberKey.innerHTML = event.keyCode;
  keyField.innerHTML = event.key;
  locationField.innerHTML = event.location;
  whichField.innerHTML = event.which;
  codeField.innerHTML = event.code;

})

