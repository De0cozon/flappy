def on_button_pressed_a():
    Bird.change(LedSpriteProperty.Y, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    Bird.change(LedSpriteProperty.Y, -1)
input.on_button_pressed(Button.B, on_button_pressed_b)

Bird: game.LedSprite = None
index = 0
obstacles: List[number] = []
Bird = game.create_sprite(2, 2)
Bird.set(LedSpriteProperty.BLINK, 300)