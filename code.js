let Right = 0
let Center = 0
let Left = 0

basic.forever(function () {
    pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
  
    Right = pins.digitalReadPin(DigitalPin.P0)
    Center = pins.digitalReadPin(DigitalPin.P1)
    Left = pins.digitalReadPin(DigitalPin.P2)
  
    if (Left == 0) {
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else if (Right == 0) {
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else if (Center == 0) {
        MotorDriver.MotorStop(Motor.A)
        MotorDriver.MotorStop(Motor.B)
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else {
        MotorDriver.MotorRun(Motor.A, Dir.forward, 12)
        MotorDriver.MotorRun(Motor.B, Dir.forward, 12)
    }
})
