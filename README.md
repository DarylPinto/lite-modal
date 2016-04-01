# Lite Modal

**The lightweight vanilla JS modal script**  
Turn *any* element into a modal by simply adding class!

#### Features

- **Flexible:** Works with any content (divs, images, videos, you name it!)
- **Cross Browser:** Compatible all major browsers including IE9 and above! (Tested with IE's browser emulation)
- **No jQuery:** Drop into any project, there aren't any dependencies!
- **Customizable:** As basic as possible, you have control over all the styling!
- **Lightweight:** Only 1.45kb minified!

#### Setup

1. Link to the script in the `<head>` of your project like so:  
`<script type="text/javascript" src="path/to/lite-modal.min.js"></script>`


2. Add as many modals to your page as you want with the class `lite-modal`:  
`<div id="login-form" class="lite-modal">...</div>`


3. Open a modal with a CSS selector:  
`liteModal.open('#login-form');`

4. Close the modal:  
`liteModal.close();`  
Clicking the background or the ESC key will also close the modal.