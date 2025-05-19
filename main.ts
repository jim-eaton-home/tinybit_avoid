input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    letsGo = true
    let started = false
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    distanceToBad = Tinybit.Ultrasonic_CarV2()
    while (letsGo && !pressedButtonB) {
        // short pause to allow the processor to catch up the events
        basic.pause(10)
        distanceToBad = Tinybit.Ultrasonic_CarV2()
        if (distanceToBad <= 30) {
            robot_avoid()
            started = false
        }
        
        if (!started) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, speed_run)
            basic.pause(10)
            started = true
        }
        
    }
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    letsGo = false
    distanceToBad = 0
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    basic.clearScreen()
    if (pressedButtonB) {
        robot_avoid()
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
    
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    pressedButtonB = !pressedButtonB
    basic.pause(100)
})
function robot_avoid() {
    
    //  the simulator says this will be right turn
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, speed_spin)
    basic.pause(500)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
}

let pressedButtonB = false
let letsGo = false
let distanceToBad = 0
distanceToBad = 10
let speed_run = 100
let speed_spin = 80
basic.clearScreen()
basic.showIcon(IconNames.Surprised)
