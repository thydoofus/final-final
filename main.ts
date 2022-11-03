input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Rollerskate)
    keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.alt) + "v", false)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Yes)
    keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.alt) + "v", false)
})
input.onPinReleased(TouchPin.P1, function () {
    basic.showIcon(IconNames.No)
    keyboard.sendSimultaneousKeys("" + keyboard.modifiers(keyboard._Modifier.alt) + "v", false)
})
keyboard.startKeyboardService()
basic.showIcon(IconNames.Heart)
