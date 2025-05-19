def on_button_pressed_a():
    global distanceToBad, letsGo, speed_run, speed_spin

    letsGo = True
    started = False
    basic.clear_screen()
    basic.show_icon(IconNames.YES)
    distanceToBad = Tinybit.Ultrasonic_CarV2()
    while letsGo and not (pressedButtonB):
        #short pause to allow the processor to catch up the events
        basic.pause(10)
        distanceToBad = Tinybit.Ultrasonic_CarV2()
        if distanceToBad <= 30:
            robot_avoid()
            started = False
        if not (started):
            Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RUN, speed_run) 
            basic.pause(10)
            started = True
    basic.show_icon(IconNames.NO)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global letsGo, distanceToBad, pressedButtonB, speed_spin, speed_run
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    letsGo = False
    distanceToBad = 0
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    basic.clear_screen()
    if pressedButtonB:
        robot_avoid()
        basic.show_icon(IconNames.SKULL)
    else:
        basic.show_icon(IconNames.ASLEEP)
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    pressedButtonB = not (pressedButtonB)
    basic.pause(100)
input.on_button_pressed(Button.B, on_button_pressed_b)

def robot_avoid():
    global speed_run, speed_spin
    # the simulator says this will be right turn
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_SPINLEFT, speed_spin)
    basic.pause(500)
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)

pressedButtonB = False
letsGo = False
distanceToBad = 0
distanceToBad = 10
speed_run = 100
speed_spin = 80
basic.clear_screen()
basic.show_icon(IconNames.SURPRISED)