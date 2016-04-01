# Lite Modal

**The lightweight vanilla JS modal script**  
Turn *any* element into a modal by simply adding a class!

#### Features

- **Flexible:** Works with any content. (divs, images, videos, you name it!)
- **Cross Browser:** Compatible with all major browsers including IE9 and above. (Tested with IE's browser emulation)
- **No jQuery:** Drop it into any project. There are no dependencies!
- **Customizable:** As plain as possible while providing the functionality. You have control over all the styling!
- **Lightweight:** Only 1.4kb minified!

#### Setup

1. Link to the script in the `<head>` of your project like so:  
`<script type="text/javascript" src="path/to/lite-modal.min.js"></script>`


2. Add as many modals as you want using the class `lite-modal`:  
`<div id="login-form" class="lite-modal">...</div>`


3. Open a specific modal by targeting it with a CSS selector:  
`liteModal.open('#login-form');`

4. Close the modal:  
`liteModal.close();`  
Clicking the background or the ESC key will also close the modal.