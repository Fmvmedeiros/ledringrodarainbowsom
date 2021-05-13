input.onButtonPressed(Button.A, function () {
    SomMax = SomMax - 1
    basic.showNumber(SomMax)
})
input.onSound(DetectedSound.Loud, function () {
    velocidade = randint(15, 22)
})
input.onButtonPressed(Button.B, function () {
    SomMax = SomMax + 1
    basic.showNumber(SomMax)
})
let Posição = 0
let SomMax = 0
let velocidade = 0
basic.showLeds(`
    # . . . .
    . # . . .
    . . . . .
    . . . . .
    . . . . .
    `)
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.setPixelColor(0, neopixel.hsl(0, 90, 40))
strip.show()
velocidade = 601
SomMax = 133
input.setSoundThreshold(SoundThreshold.Loud, SomMax)
basic.forever(function () {
    while (velocidade < 600) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(Posição, neopixel.hsl(Math.map(Posição, 0, 7, 0, 360), 90, 40))
        strip.show()
        velocidade = velocidade * 1.1
        Posição = Posição + 1
        if (Posição > 7) {
            Posição = 0
        }
        basic.pause(velocidade)
    }
})
