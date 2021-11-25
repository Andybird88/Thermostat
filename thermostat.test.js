const { it, expect } = require("@jest/globals");
const Thermostat = require("./thermostat.js")

describe("thermostat",() => {
    it('can return current temperature', () => {
    const thermostat = new Thermostat;
    expect(thermostat.getTemperature()).toBe(20)
    }
    )
    
    it('can increase the temperature', () => {
        const thermostat = new Thermostat;
        thermostat.up()
        expect(thermostat.getTemperature()).toBe(21)

    })
    it('can decrease the temperature', () => {
        const thermostat = new Thermostat;
        thermostat.down()
        expect(thermostat.getTemperature()).toBe(19)

    })
    it('cannot be set below 10 degrees', () => {
        const thermostat = new Thermostat;
        for(let i=0 ; i<15; i++){
            thermostat.down()
        }
        expect(thermostat.getTemperature()).toBe(10)

    })

    it('can turn low power mode off', () => {
        const thermostat = new Thermostat;
        thermostat.setPowerSavingMode(false)
        expect(thermostat.powerSavingMode).toBe(false) 
    })

    it('cannot be set higher than 25 if lps mode is on', () => {
        const thermostat = new Thermostat;
        for(let i=0 ; i<15; i++){
            thermostat.up()
        }
        expect(thermostat.getTemperature()).toBe(25)

    })

    it('cannot be set higher than 32 when lps mode is off',() => {
        const thermostat = new Thermostat;
        thermostat.setPowerSavingMode(false)
        for(let i=0 ; i<15; i++){
            thermostat.up()
        }
        expect(thermostat.getTemperature()).toBe(32)
    })

    it('can reset the temp to 20',() => {
        const thermostat = new Thermostat;
        thermostat.down()
        thermostat.down()
        expect(thermostat.getTemperature()).toBe(18)
        thermostat.reset()
        expect(thermostat.getTemperature()).toBe(20)

    })

    it('can return energy usage depending on temp',() => {
        const thermostat = new Thermostat;
        expect(thermostat.energyUsage()).toBe('medium energy usage')
    })

  

});

