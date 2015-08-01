<script type="text/javascript">
	function createDocument(){
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
</script>
