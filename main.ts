radio.setGroup(1)
//  1 až 255
radio.setTransmitPower(7)
//  0 až 7 
radio.onReceivedValue(function data_received(name: string, value: number) {
    let remove_serial = radio.receivedPacket(RadioPacketProperty.SerialNumber)
})
radio.setTransmitSerialNumber(true)
let data_list = []
let my_serial = control.deviceSerialNumber()
basic.forever(function on_forever() {
    
})
radio.sendValue("name", 0)
//  name = alarm/learn # "alarm" : "on"/"off" # name = "learn" = 1(bind)/0(unbind)
