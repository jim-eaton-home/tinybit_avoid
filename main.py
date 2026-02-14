def turnLeft(speed: number, time: number):
    if b:
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_SPINLEFT, speed)
        basic.pause(time)

def on_button_pressed_a():
    global a
    a += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def driveBackward(speed2: number, time2: number):
    if b:
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_BACK, speed2)
        basic.pause(time2)
def turnRight(speed3: number, time3: number):
    if b:
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_SPINRIGHT, speed3)
        basic.pause(time3)
def smartStop():
    if b:
        Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)

def on_button_pressed_b():
    global b
    b = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def driveForward(speed5: number, time5: number):
    if b:
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RUN, speed5)
        basic.pause(time5)
def robot_avoid():
    global b
    basic.show_icon(IconNames.SKULL)
    b = 0
    # the simulator says this will be right turn
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_SPINLEFT, 65)
    basic.pause(500)
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
    basic.show_icon(IconNames.SAD)
distanceToBad = 0
a = 0
b = 0
basic.show_icon(IconNames.HEART)

def on_forever():
    global a
    if a == 3:
        a = 1
basic.forever(on_forever)

def on_forever2():
    global distanceToBad
    distanceToBad = Tinybit.Ultrasonic_Car()
    if distanceToBad <= 10:
        robot_avoid()
basic.forever(on_forever2)

def on_forever3():
    global b
    if a == 1:
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        if b == 1:
            basic.pause(1000)
            for index in range(4):
                driveForward(80, 1000)
                turnLeft(65, 400)
            smartStop()
            b = 0
basic.forever(on_forever3)

def on_forever4():
    global b
    if a == 2:
        basic.show_leds("""
            # . . . #
            # . . # #
            # . # . #
            # # . . #
            # . . . #
            """)
        if b == 1:
            basic.pause(1000)
            driveForward(80, 1000)
            turnLeft(65, 600)
            driveForward(80, 2000)
            turnRight(65, 600)
            driveForward(80, 1000)
            smartStop()
            b = 0
basic.forever(on_forever4)
