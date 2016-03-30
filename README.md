# Lite Modal

**The light-weight vanilla JS modal script!**

#### Features:

- 1.2kb minified
- Drop into any project, there are no dependencies! (Written in pure ES5 and CSS3)
- Compatible with IE9 and above (tested with IE's browser emulation)
- Works with any block level content (divs, images, videos, you name it!)
- Customizable (hardly has any default styling to begin with!)

#### Setup:

1) Link to the script in the `<head>` of your project like so:  
`<script type="text/javascript" src="path/to/lite-modal.min.js"></script>`


2) Add as many modals to your page as you want, simply by adding the class `lite-modal`:  
`<div id="sign-up-form" class="lite-modal">...</div>`


3) Open the modal with a CSS selector or close the modal:  
`lightModal.open('#sign-up-form');`  
`lightModal.close();`