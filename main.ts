function turnLeft(speed: number, time: number) {
    if (b) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, speed)
        basic.pause(time)
    }
    
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    a += 1
})
function driveBackward(speed2: number, time2: number) {
    if (b) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, speed2)
        basic.pause(time2)
    }
    
}

function turnRight(speed3: number, time3: number) {
    if (b) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, speed3)
        basic.pause(time3)
    }
    
}

function smartStop() {
    if (b) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    }
    
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    b = 1
})
function driveForward(speed4: number, time4: number) {
    if (b) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, speed4)
        basic.pause(time4)
    }
    
}

function robot_avoid() {
    
    basic.showIcon(IconNames.Skull)
    b = 0
    //  the simulator says this will be right turn
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 65)
    basic.pause(500)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    basic.showIcon(IconNames.Sad)
}

let distanceToBad = 0
let a = 0
let b = 0
basic.showIcon(IconNames.Heart)
basic.forever(function on_forever() {
    
    if (a == 4) {
        a = 1
    }
    
})
basic.forever(function on_forever2() {
    
    distanceToBad = Tinybit.Ultrasonic_Car()
    if (distanceToBad <= 10) {
        robot_avoid()
    }
    
})
basic.forever(function on_forever3() {
    
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
basic.forever(function on_forever4() {
    
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
basic.forever(function on_forever5() {
    
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
