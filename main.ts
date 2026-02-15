function turnLeft (speed: number, time: number) {
    if (b) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, speed)
        basic.pause(time)
    }
}
input.onButtonPressed(Button.A, function () {
    a += 1
    if (a == 4) {
        a = 1
    }
})
function driveBackward (speed: number, time: number) {
    if (b) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, speed)
        basic.pause(time)
    }
}
function turnRight (speed: number, time: number) {
    if (b) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, speed)
        basic.pause(time)
    }
}
function smartStop () {
    if (b) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    }
}
input.onButtonPressed(Button.B, function () {
    b = 1
})
function driveForward (speed: number, time: number) {
    if (b) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, speed)
        basic.pause(time)
    }
}
function robot_avoid () {
    basic.showIcon(IconNames.Skull)
    b = 0
    // the simulator says this will be right turn
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 65)
    basic.pause(500)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    basic.showIcon(IconNames.Sad)
}
let distanceToBad = 0
let b = 0
let a = 0
a = 0
b = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    distanceToBad = Tinybit.Ultrasonic_Car()
    if (distanceToBad <= 10) {
        robot_avoid()
    }
})
basic.forever(function () {
    if (a == 2) {
        basic.showLeds(`
            # . . . #
            # . . # #
            # . # . #
            # # . . #
            # . . . #
            `)
        if (b == 1) {
            basic.pause(1000)
            driveForward(80, 1000)
            turnLeft(65, 600)
            driveForward(80, 2000)
            turnRight(65, 600)
            driveForward(80, 1000)
            smartStop()
            b = 0
        }
    }
})
basic.forever(function () {
    if (a == 3) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # . # . .
            # . . # .
            # # # # #
            `)
        if (b == 1) {
            basic.pause(1000)
            turnLeft(65, 400)
            driveForward(80, 2000)
            turnRight(65, 600)
            driveForward(80, 1000)
            turnRight(65, 400)
            driveForward(80, 1000)
            smartStop()
            b = 0
        }
    }
})
basic.forever(function () {
    if (a == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        if (b == 1) {
            basic.pause(1000)
            for (let index = 0; index < 4; index++) {
                driveForward(80, 1000)
                turnLeft(65, 400)
            }
            smartStop()
            b = 0
        }
    }
})
