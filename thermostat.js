class Thermostat {
  constructor(){
      this.temperature = 20;
      this.minTemperature = 10;
      this.powerSavingMode = true;
  }
  getTemperature() {
      if(this.powerSavingMode === true && this.temperature >= 25) {
          return this.temperature + '(maximum reached)'
      }
      if(this.powerSavingMode === false && this.temperature >= 32) {
          return this.temperature + '(maximum reached)'
      }
      if(this.temperature <= 10) {
          return this.temperature + ' (minimum temp reached)'
      }
      return this.temperature
      };
     
  up() {
      if (this.powerSavingMode === true) {
          if (this.temperature >= 25) {
              this.temperature = 25;
          } else {
              this.temperature++
          }
          } else {
              if (this.temperature >= 32) {
                  this.temperature = 32;
              } else {
                  this.temperature++
              }
          }
      }
    
    down() {
    if (this.temperature > 10) {
       this.temperature--
    } else {
       this.temperature = 10;
       
    }
  };

  setPowerSavingMode(condition) {
      if (condition === true) {
          this.powerSavingMode = true;
      } else {
          this.powerSavingMode = false;
      }
      };

    reset() {
        this.temperature = 20;
    }

    energyUsage() {
        if (this.temperature < 18) {
            return 'low energy usage';
        } else if (this.temperature <= 25) {
             return 'medium energy usage';
        } else if (this.temperature > 25) {
             return 'High Energy Usage';
        }
    };

    
  

};



// const thermostat = new Thermostat();

// console.log(thermostat.getTemperature()); // should return 20

// thermostat.up();
// thermostat.up();
// console.log(thermostat.getTemperature()); // should now return 22

// thermostat.down();
// console.log(thermostat.getTemperature()); // should now return 21

// thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

// for (let i = 0 ; i < 10 ; i++) {
//   thermostat.up();
// }

// console.log(thermostat.getTemperature()); // should be 25 (max reached)

// thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

// thermostat.up();
// console.log(thermostat.getTemperature()); // should now return 26

// thermostat.reset();
// console.log(thermostat.getTemperature()); // should be back to 20

module.exports = Thermostat


  