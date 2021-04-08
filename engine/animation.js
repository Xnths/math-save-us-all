function AnimationFrame(context) {
    this.context = context;
    this.sprites = [];
    this.isOn = false;
}

AnimationFrame.prototype = {
    newSprite: function (sprite) {
        this.sprites.push(sprite);
    },
    turnOn: function () {
        this.isOn = true;
        this.nextFrame();
    },
    turnOff: function () {
        this.isOn = false;
    },
    nextFrame: function () {
        if (!this.isOn) return;

        this.clearScreen();

        for (var i in this.sprites) this.sprites[i].update();
        for (var i in this.sprites) this.sprites[i].draw();

        var animation = this;

        requestAnimationFrame(function () {
            animation.nextFrame();
        })
    },
    clearScreen: function () {
        const ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}