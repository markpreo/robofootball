input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
    radio.sendString("left")
    basic.pause(100)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        . . # . .
        `)
    radio.sendString("right")
    basic.pause(100)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.No)
    basic.pause(100)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
})
radio.setGroup(1)
radio.sendString("hello")
basic.showIcon(IconNames.Heart)
