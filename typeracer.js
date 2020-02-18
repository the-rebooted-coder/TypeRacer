function triggerKeyboardEvent(el, keyCode, type)
{
    var eventObj = document.createEventObject ?
        document.createEventObject() : document.createEvent("Events");
  
    if(eventObj.initEvent){
      eventObj.initEvent(type, true, true);
    }
  
    eventObj.keyCode = keyCode;
    eventObj.which = keyCode;
    
    el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj); 
  
} 
$=$$

content = $('table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > div > div')[3].textContent.split('');
i = 0;
function a () {
	if (i == content.length - 1) return;
	input = $('table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > input')[0]
	input.focus()
	input.value += content[i++];
	triggerKeyboardEvent(input, input.value.charCodeAt(0), "keydown")
	input.click()
	triggerKeyboardEvent(input, input.value.charCodeAt(0), "keypress")
	triggerKeyboardEvent(input, input.value.charCodeAt(0), "keyup")
	setTimeout(a, 220 * Math.random())
}
a();
