
function EmbedVideoObject(filePath, width, height) {

	if (width > 0 && height > 0) {
		document.write("<embed src=\"" + filePath + "\" width=\"" + width + "\" height=\"" + height + "\" AUTOPLAY=FALSE>");
	}
	else {
		document.write("<embed src=\"" + filePath + "\" AUTOPLAY=FALSE>");
	}

};


function EmbedFlashObject(filePath, width, height) {

	document.write("<p><object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\"\n");
	document.write("codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,79,0\"\n");
	document.write("width=\"" + width + "\" height=\"" + height + "\" >\n");
    document.write("<param name=movie value=\"" + filePath + "\">\n");
    document.write("<param name=quality value=high>\n");
	document.write("<EMBED SRC=\"" + filePath + "\" WIDTH=\"" + width + "\" HEIGHT=\"" + height + "\" quality=\"high\"  NAME=\"movie\" TYPE=\"application/x-shockwave-flash\" PLUGINSPAGE=\"http://www.macromedia.com/go/getflashplayer\">\n");
	document.write("</object></p>\n");

};
