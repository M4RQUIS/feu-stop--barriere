Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
let temps = 3
basic.forever(function () {
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
    temps = 3
    for (let index = 0; index < 3; index++) {
        basic.pause(1000)
        temps += -1
        basic.showNumber(temps)
    }
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
    basic.pause(1000)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
    Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
    temps = 3
    for (let index = 0; index < 3; index++) {
        basic.pause(1000)
        temps += -1
        basic.showNumber(temps)
    }
})
basic.forever(function () {
    temps = 3
    for (let index = 0; index < 3; index++) {
        basic.pause(1000)
        temps += -1
        basic.showNumber(temps)
    }
    Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Up)
    temps = 3
    for (let index = 0; index < 3; index++) {
        basic.pause(1000)
        temps += -1
        basic.showNumber(temps)
        Kitronik_ACCESSbit.buzzerControl(Kitronik_ACCESSbit.BuzzerLength.Short, 1)
    }
    Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
})
