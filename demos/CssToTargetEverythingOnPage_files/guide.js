(function() {
"use strict";

function ready(fn) {

	setTimeout(fn, 100);
	return;

  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

function disableLinks() {
	function nogo() {
		alert("Links disabled");
		return false;
	}
	
	var links = document.links;
	for(var i=0; i<links.length; i++) {
	  links[i].onclick=nogo;
	}
}

function disableForms() {
	function nogo() {
		alert("Forms disabled");
		return false;
	}
	
	var fs = document.forms;
	for(var i=0; i<fs.length; i++) {
	  fs[i].onsubmit=nogo;
	}
}

ready(function() {
disableLinks();
disableForms();
});

}());