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
});

