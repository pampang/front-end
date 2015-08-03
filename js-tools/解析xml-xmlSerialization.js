<script type="text/javascript">
	var parser = new DOMParser();
	var xmldom;
	var errors;
	try{
		xmldom = parser.parseIntoString("<root>", "text/xml");
		errors = xmldom.getElementsByTagName("parsererror");
		if(errors.length > 0){
			throw new Error("parsing error!");
		}
	}catch(ex){
		alert("parsing error!");
	}
</script>