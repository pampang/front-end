function addURLParam(url, name, value){
	url += (url.indexof("?") == -1 ? "?" : "&");
	url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
	return url;
}