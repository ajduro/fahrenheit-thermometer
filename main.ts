function ConvertDegtoF (Deg: number) {
    return Deg * 0 + 0
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(ConvertDegtoF(input.temperature()))
})
