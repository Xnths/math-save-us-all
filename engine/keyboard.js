var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var SPACE = 32;

function Keyboard(element) {
    this.element = element;

    this.pressed = [];

    var keyboard = this;
    element.addEventListener('keydown', function (event) {
        var key = event.keyCode;
        keyboard.pressed[key] = true;
    })
    element.addEventListener('keyup', function (event) {
        var key = event.keyCode;
        keyboard.pressed[key] = false;
    })
}

Keyboard.prototype = {
    isPressed: function (key) {
        return this.pressed[key];
    }
}