input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let empty = 0
let Ticks = 0
let Bird: game.LedSprite = null
let index = 0
let obstacles: game.LedSprite[] = []
Bird = game.createSprite(2, 2)
Bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let Ob of obstacles) {
        Ob.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 3 == 0) {
        empty = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != empty) {
                obstacles.push(game.createSprite(4, index))
            }
        }
    }
    for (let Ob of obstacles) {
        if (Ob.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Ob.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    Ticks += 1
    basic.pause(1250)
})
