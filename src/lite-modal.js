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

//Add CSS
var style = d.createElement('style');

var css = '\
#modal-bg{\
background-color:rgba(0,0,0,.5);\
position:fixed;\
top:0;\
left:0;\
transition:.3s opacity;\
height:100vh;\
width:100vw;\
opacity:1;\
z-index:100;\
display:none;\
}\
#modal-bg.fade{\
opacity:0;\
}\
.lite-modal{\
position:absolute;\
top:50%;\
left:50%;\
-ms-transform:translate(-50%,-50%);\
transform:translate(-50%,-50%);\
display:none;\
}\
#modal-bg.open,.lite-modal.open{\
display:block;\
}';

style.textContent = css;
d.head.appendChild(style);

//On content load
d.addEventListener('DOMContentLoaded', function(){

	//Create modal background
	var bg = d.createElement('div');
	bg.id = 'modal-bg';
	bg.classList.add('fade');
	d.body.appendChild(bg);

	//Move modals into modal background
	qsaEach('.lite-modal', function(el){
		bg.appendChild(el);
	});

	//Clicking modal background closes modal
	bg.addEventListener('click', function(){
		liteModal.close();
	});

	//Escape key closes modal
	d.addEventListener('keydown', function(e) {
		if(e.keyCode == 27) liteModal.close();
	});

	//Prevent event bubbling (clicking within modal shouldn't close it)
	qsaEach('.lite-modal', function(el){
		el.addEventListener('click', function(event){
			event.stopPropagation();
		});
	});

});

//Modal open/close functions
g.liteModal = {
	open: function(selector){
		qsaEach('#modal-bg,'+selector, function(el){
			el.classList.add('open');
		});
		wait(function(){
			qs('#modal-bg').classList.remove('fade');
		}, 20);
	},

	close: function(){
		qs('#modal-bg').classList.add('fade');
		wait(function(){
			qsaEach('#modal-bg,.lite-modal', function(el){
				el.classList.remove('open');
			});
			//If there are any media elements in the modal, pause them
			qsaEach('.lite-modal,.lite-modal *', function(el){
				if(typeof el.pause == 'function') el.pause();
			});
		}, 310);
	}

}

})(window);
