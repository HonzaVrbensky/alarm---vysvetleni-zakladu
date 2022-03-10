
radio.set_group(1) # 1 až 255
radio.set_transmit_power(7) # 0 až 7 
radio.on_received_value(data_received)
radio.set_transmit_serial_number(True)

data_list = []
my_serial = control.device_serial_number()

def on_forever():
    pass
basic.forever(on_forever)


radio.send_value("name", 0) # name = alarm/learn # "alarm" : "on"/"off" # name = "learn" = 1(bind)/0(unbind)

def data_received(name, value):
    remove_serial = radio.received_packet(RadioPacketProperty.SERIAL_NUMBER)
