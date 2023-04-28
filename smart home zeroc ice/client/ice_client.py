import sys, Ice

import BulbModule
import SpeakerModule
import ThermostatModule


def create_printer(category, bulb_name, port, proxy):
    proxy_str = category + "/" + bulb_name + ":tcp -h 127.0.0.2 -p " + port + " -z : udp -h 127.0.0.2 -p " + port + " -z"
    base = communicator.stringToProxy(proxy_str)
    printer = proxy.checkedCast(base)
    if not printer:
        raise RuntimeError("Invalid proxy")
    return printer


with Ice.initialize(sys.argv) as communicator:
    print("commands:")
    print("bulb: turnon, turnoff, changecolour red green blue(int), isturnedon, getcolour")
    print("discoBulb: getfreq, setfreq int")
    print("brightnessControlBulb: getbrightness, setbrightness int")
    print("speaker: turnon, turnoff, play, pause, settrack author title(string), gettrack")
    print("thermostat: gettemp, settemp float")
    while True:
        command = input("Type your command, format: category device_name port command args: ")
        if command == 'exit':
            break
        cmd = command.split(' ')
        if len(cmd) < 4:
            print("invalid input")
            continue
        category = cmd[0]
        device_name = cmd[1]
        port = cmd[2]
        try:
            if category == 'bulb' or category == 'discoBulb' or category == 'brightnessControlBulb':
                proxy = BulbModule.BulbPrx
                printer = create_printer(category, device_name, port, proxy)
                if cmd[3] == 'turnon':
                    print(printer.turnOn())
                elif cmd[3] == 'turnoff':
                    print(printer.turnOff())
                elif cmd[3] == 'changecolour' and len(cmd) == 7:
                    print(printer.changeColour(BulbModule.Colour(int(cmd[4]), int(cmd[5]), int(cmd[6]))))
                elif cmd[3] == 'isturnedon':
                    print(printer.turnOn)
                elif cmd[3] == 'getcolour':
                    print(printer.getColour())
            elif category == 'discoBulb':
                proxy = BulbModule.BulbPrx
                printer = create_printer(category, device_name, port, proxy)
                if cmd[3] == 'getfreq':
                    print(printer.getTwinkleFrequency())
                elif cmd[3] == 'setfreq' and len(cmd) == 5:
                    print(printer.setTwinkleFrequency(int(cmd[4])))
            elif category == 'brightnessControlBulb':
                proxy = BulbModule.BulbPrx
                printer = create_printer(category, device_name, port, proxy)
                if cmd[3] == 'getbrightness':
                    print(printer.getBrightness())
                elif cmd[3] == 'setbrightness' and len(cmd) == 5:
                    print(printer.setBrightness(int(cmd[4])))
            elif category == 'speaker':
                proxy = SpeakerModule.SpeakerPrx
                printer = create_printer(category, device_name, port, proxy)
                if cmd[3] == 'turnon':
                    print(printer.turnOn())
                elif cmd[3] == 'turnoff':
                    print(printer.turnOff())
                elif cmd[3] == 'play':
                    print(printer.play())
                elif cmd[3] == 'pause':
                    print(printer.pause())
                elif cmd[3] == 'settrack' and len(cmd) == 6:
                    print(printer.setTrack(SpeakerModule.Track(cmd[4], cmd[5])))
                elif cmd[3] == 'gettrack':
                    print(printer.getCurrentTrack())
            elif category == 'thermostat':
                proxy = ThermostatModule.ThermostatPrx
                printer = create_printer(category, device_name, port, proxy)
                if cmd[3] == 'gettemp':
                    temp = printer.getTemperature()
                    print("{},{}".format(temp // 10, temp % 10))
                elif cmd[3] == 'settemp' and len(cmd) == 5:
                    print(printer.setTemperature(int(cmd[4])))
        except:
            print("could not get your request")
