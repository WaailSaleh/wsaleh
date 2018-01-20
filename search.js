var xmlHttp = createXmlHttpRequestObject();
function createXmlHttpRequestObject() {
   xmlHttp;
    if (window.ActiveXObject) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            xmlHttp = false;
        }
    } else {
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (ew) {
        xmlHttp = false;
    }
}

    if (!xmlHttp) {
        alert("Cant Create XMLHttpRequest (AJAX ERROR)");
    } else {
        return xmlHttp;
    }

}

function process() {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        repoSearch = encodeURICompoent(document.getElementById("Search").value);
        xmlHttp.open("GET", "search.php?repo=" + repoSearch, true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
        }
        else {
        	setTimeout(process(), 1000);
        }
    }

    function handleServerResponse() {
    	if (xmlHttp.readyState==4 ) 
    	{
    		if(xmlHttp.status==200)
    		{
    			xmlResponse = xmlHttp.responseXML;
    			xmlDocumentElement = xmlResponse.documentElement;
    			message = xmlDocumentElement.firstChild.data;
    			document.getElementById("xxx").innerHTML = '<p>'  + message + '</p>' ;
        		setTimeout(process(), 1000);
    		} else {alert"xmlHttp response != 200"};
    	}
    }