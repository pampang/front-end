function parseXml(xml){  //跨浏览器解析XML
	var xmldom = null;

	if(typeof DOMParser != "undefined"){
		xmldom = (new Parser()).parseFromString(xml, "text/xml");
		var errors = xmldom.getElementsByTagName("parsererror");
		if(errors.length > 0 ){
			throw new Error("XML parsing error:" + errors[0].textContent);
		}
	} else if(typeof ActiveXObject != "undefined"){
		xmldom = createDocument();
		xmldom.loadXML(xml);
		if(xmldom.parseError != 0){
			throw new Error("XML parsing error:" + xmldom.parseError.reason);
		}
	} else {
		throw new Error("No XML parser available");
	}

	return xmldom;
}

function createDocument(){   //IE创建xmldom对象
	if(typeof arguments.callee.activeXString != "string"){
		var versions = ["MSXML2.DOMDocument.6.0", "MSXML2.DOMDocument.3.0", "MSXML2.DOMDocument"],
		i, len;

		for(i = 0; i < versions.length; i++ ){
			try{
				new ActiveXObject(versions[i]);
				arguments.callee.activeXString = versions[i];
				break;
			} catch(ex){

			}
		}
	}

	return new ActiveXObject(arguments.callee.activeXString);
}	

//使用
var xmldom = null;

try{
	xmldom = parseXML("<root><child/></root>");   //这里会抛出异常。
} catch(ex) {
	alert("ex.message");
}