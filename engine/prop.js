var RIGHT_DIRECTION = 1;
var LEFT_DIRECTION = 2;

function Prop(context, keyboard) {
    this.context = context;
    this.keyboard = keyboard;
    this.direction = RIGHT_DIRECTION;
    this.x = 0;
    this.y = 0;
}

Prop.prototype = {
    update: function () {
        if (this.keyboard.isPressed(LEFT_ARROW) && this.x > 0) {
            this.x -= 10;
            this.direction = LEFT_DIRECTION;
        } else if (this.keyboard.isPressed(RIGHT_ARROW) && this.x < this.context.canvas.width - 20) {
            this.x += 10;
            this.direction = RIGHT_DIRECTION
        }
    },
    draw: function () {
        this.context.fillRect(this.x, this.y, 20, 40);
    }
}