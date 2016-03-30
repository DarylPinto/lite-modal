// Lite Modal https://github.com/DarylPinto/lite-modal
// -----------
// The light-weight vanilla JS modal script
// @author Daryl Pinto https://github.com/DarylPinto

(function(g){

//Decrease character count with some handy aliases
var d = document;
var wait = g.setTimeout;
var qs = d.querySelector.bind(d);

//run callback on every element matched by selector
function qsaEach(selector, callback) {
	[].slice.call(d.querySelectorAll(selector)).forEach(callback);
}

//Apply object of CSS declarations to an element
function applyCSS(el, css_obj){
	for (var prop in css_obj){
		el.style[prop] = css_obj[prop];
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
	qsaEach('.lite-modal', function(){
		this.style.display = 'none';
		bg.appendChild(this);
	});

	//Center modal
	qsaEach('.lite-modal', function(){
		var el_css = {
			position        : 'absolute',
			top             : '50%',
			left            : '50%',
			'-ms-transform' : 'translate(-50%, -50%)',
			transform       : 'translate(-50%, -50%)'
		}

		applyCSS(this, el_css);
	});

	//Clicking modal background closes modal
	bg.addEventListener('click', function(){
		liteModal.close();
	});

	//Escape key closes modal
	d.addEventListener('keydown', function(e) {
		if (e.keyCode == 27) liteModal.close();
	});

	//Prevent event bubbling (clicking within modal shouldn't close it)
	qsaEach('.lite-modal', function(){
		this.addEventListener('click', function(e){
			e.stopPropagation();
		});
	});

});

//Modal open/close functions
g.liteModal = {
	open: function(selector){
		qsaEach('.lite-modal', function(){
			this.style.display = 'none';
		});
		qs(selector).style.display = 'block';
		qs('#modal-bg').style.display = 'block';
		wait(function(){
			qs('#modal-bg').style.opacity = '1';
		}, 20);
	},

	close: function(){
		qs('#modal-bg').style.opacity = '0';
		wait(function(){
			qs('#modal-bg').style.display = 'none';
			//If there are any videos in the modals, pause them
			qsaEach('.lite-modal, .lite-modal video', function(){
				if(this.nodeName === 'VIDEO') this.pause();
			});
		}, 310);
	}

}

})(window);
