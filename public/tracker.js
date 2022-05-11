var x = document.cookie;
if (x != "trust=yes") {
	window.open("https://dwij.nxweb.xyz/nottrusted.html","_self");
} else {
	alert("trusted");
}
