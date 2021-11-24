class Thermostat {
  constructor(){
      this.temperature = 20;
      this.minTemperature = 10;
  }
  getTemperature() {
      if (this.temperature < this.minTemperature) {
          return this.minTemperature; 
      } else {
          return this.temperature
      }
     
  };

  up() {
      this.temperature++ 
  };
  down() {
    this.temperature-- 
};
}


module.exports = Thermostat