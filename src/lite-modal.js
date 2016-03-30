// Lite Modal https://github.com/DarylPinto/light-modal
// -----------
// The light-weight vanilla JS modal script
// @author Daryl Pinto https://github.com/DarylPinto

(function(){

//Decrease character count with some handy aliases
var d = document;
var wait = window.setTimeout;
function qs(selector){
	return d.querySelector(selector);
}

//document.querySelectorAll standard array (not array-like)
function qsa(selector){
	return [].slice.call(d.querySelectorAll(selector));
}

//Apply object of CSS declarations to an element
function applyCSS(el, css_obj){
	for (var prop in css_obj){
		if(css_obj.hasOwnProperty(prop)) el.style[prop] = css_obj[prop];
	}
}

//On content load
d.addEventListener('DOMContentLoaded', function(){

	//Create modal background
	var bg = d.createElement('div');
	bg.id = 'modal-bg';

	var bg_css = {
		backgroundColor : 'rgba(0,0,0,0.5)',
		position        : 'fixed',
		top             : '0',
		left            : '0',
		transition      : '0.3s opacity',
		height          : '100vh',
		width           : '100vw',
		opacity         : '0',
		zIndex          : '100',
		display         : 'none'
	}

	applyCSS(bg, bg_css);

	d.body.appendChild(bg);

	//Move modals into modal background
	qsa('.lite-modal').forEach(function(el){
		el.style.display = 'none';
		bg.appendChild(el);
	});

	//Center modal
	qsa('.lite-modal').forEach(function(el){
		var el_css = {
			position        : 'absolute',
			top             : '50%',
			left            : '50%',
			'-ms-transform' : 'translate(-50%, -50%)',
			transform       : 'translate(-50%, -50%)'
		}

		applyCSS(el, el_css);
	});

	//Clicking modal background closes modal
	bg.addEventListener('click', function(){
		liteModal.close();
	});

	//Escape key closes modal
	d.onkeydown = function(e) {
		if (e.keyCode == 27) liteModal.close();
	};

	//Prevent event bubbling (clicking within modal shouldn't close it)
	qsa('.lite-modal').forEach(function(el){
		el.addEventListener('click', function(e){
			e.stopPropagation();
		});
	});

});

//Open and close functions
window.liteModal = {
	open: function(selector){
		qsa('.lite-modal').forEach(function(el){
			el.style.display = 'none';
		});
		qs(selector).style.display = 'block';
		qs('#modal-bg').style.display = 'block';
		wait(function(){
			qs('#modal-bg').style.opacity = '1';
		}, 10);
	},

	close: function(){
		qs('#modal-bg').style.opacity = '0';
		wait(function(){
			qs('#modal-bg').style.display = 'none';	
		}, 310);
	}

}

})();