input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("left")
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("back")
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("forward")
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `)
})
radio.setGroup(1)
radio.sendString("hello")
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("stop")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
