const { it } = require("@jest/globals");
const Thermostat = require("./thermostat.js")

describe("thermostat",() => {
    it('can return current temperature', () => {
    const thermostat = new Thermostat;
    expect(thermostat.getTemperature()).toBe(20)
    }
    )}
);

