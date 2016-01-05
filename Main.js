//=========== EXTERNAL MODULE GLOBAL VARIABLES & INITIATION  ================//
var mLog = 'Module_name'; //use this variable to give yours logs a common initial name

initModule = function () {

};

//============== EXTERNAL MODULE | LICHEN COMMUNICATION =====================//

/* This function will receive the data from Lichen */
function onMessageReceived( event ){
	console.log( mLog,"onMessageReceived, event.data:", event.data );
	//HERE GOES YOUR CODE
}

/* Array defining the data that will be sent to Lichen
 * many objects as outputs, each one defining the following properties
 * type → what type of data is; Number/String/Array/Object
 * name → give to this output a Name
 * description → a brief explanation
 * value → a value for this output.
 */
var outputArray = [
	{
		"type":"String",
		"name":"Output Name",
		"description":"describe here this variable",
		"value":null
	}
];

/* This function will send data to Lichen */
function sendMessageToParent( message ){
	parent.postMessage( message, '*' );
}

/* Use this function to format the message to be sent to Lichen */
function sendDataToParent( val0 ) {
	// if val0 is null use the default message
	var v0 = val0? val0 : 'This is a message from the external module';
	outputArray[0].value = v0;
	outputArray.isOutput = true;
	sendMessageToParent( { message:'output', data:outputArray } );
}

//============== EXTERNAL MODULE | LISTENERS  =====================//

// Register to the 'message' event to get the onMessageReceived function called
window.addEventListener( "message", onMessageReceived, false);
window.addEventListener( 'resize', onWindowResize, false );
window.addEventListener("load", onWindowLoad );

// To detect changes in the parent window ( Lichen canvas )
parent.window.addEventListener( "resize", onParentWindowResize, false);
parent.document.addEventListener( 'mousedown', onParentMouseDown, false );
parent.document.addEventListener( 'mouseup', onParentMouseUp, false );

// Mouse listener
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
document.addEventListener( 'mousedown', onMouseDown, false );
document.addEventListener( 'mouseup', onMouseUp, false );

//============== EXTERNAL MODULE | WINDOWS & MOUSE CALLBACKS  =====================//

function onParentWindowResize (){
	//map.setLichenCanvasSize(parent.window.innerWidth, parent.window.innerHeight);
}
function onWindowResize () {
	//console.log(mLog, 'Module window resize. map.mW: ', map.mW, ' map.mH: ', map.mH);
}
function onWindowLoad () {
	initModule();
}

function onDocumentMouseMove( event ) {
	//console.log(mLog, 'Mouse moveing arround. X: ',event.clientX , ' mouse Y: ',event.clientY );
}
function onMouseDown( event ) {
	//console.log(mLog, 'Mouse click down. X: ',event.clientX , ' mouse Y: ',event.clientY );
}
function onMouseUp ( event ) {
	//console.log(mLog, 'Mouse click up. X: ',event.clientX , ' Y: ',event.clientY );
}
function onParentMouseDown( event ) {
	//console.log(mLog, 'onParent mouse click down. X: ',event.clientX , ' Y: ',event.clientY );
}
function onParentMouseUp( event ) {
	//console.log(mLog, 'onParent mouse click up. X: ',event.clientX , ' Y: ',event.clientY );
}
