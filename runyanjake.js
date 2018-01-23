/*
 * 
 * 
 */

//****Global Variables****//
var numVisitors = 0;


//****Functions****//

function initialize(){
	console.log("Initializing website.");
	recordVisit();
}

//Checks if browser fully supports the File API
//from tutorial at https://www.html5rocks.com/en/tutorials/file/dndfiles/
function checkCompatabilityFileAPI(){
	// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		// Great success! All the File APIs are supported.
	} else {
		alert('The File APIs are not fully supported in this browser.');
	}
}

function recordVisit(){
	console.log("Number of visitors: " + getNumberVisitors());
}

function getNumberVisitors(){
	return -1;
}