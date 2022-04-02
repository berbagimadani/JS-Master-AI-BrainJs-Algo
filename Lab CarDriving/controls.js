class Control {

    constructor() {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;
        this.enter = false;

        this.#addKeyboardListener();
    }

    #addKeyboardListener() {
        document.onkeydown = (event) => { 
            console.log('down')
            switch (event.key) {
                case 'ArrowLeft':
                    this.left = true;
                    break;
            
                case 'ArrowRight':
                    this.right = true;
                    break;

                case 'ArrowUp':
                    this.forward = true;
                    break;

                case 'ArrowDown':
                    this.reverse = true;
                    break;
                
                case 'Enter':
                    this.enter = true;
                    break;

                default:
                    break;
            }
            //console.table(this)
        }

        document.onkeyup = (event) => {
            console.log('up')
            switch (event.key) {
                case 'ArrowLeft':
                    this.left = false;
                    break;

                case 'ArrowRight':
                    this.right = false;
                    break;

                case 'ArrowUp':
                    this.forward = false;
                    break;

                case 'ArrowDown':
                    this.reverse = false;
                    break;

                case 'Enter':
                    this.enter = false;
                    break;

                default:
                    break;
            }
            //console.table(this)
        }
    }
}