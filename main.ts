function ConvertDegtoF (Deg: number) {
    return Deg * 1.8 + 32
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(ConvertDegtoF(input.temperature()))
})
