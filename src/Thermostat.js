'use strict';

function Thermostat () {
  this._temperature = 20;
  this._minTemp = 10;
  this._maxTemp = 25;
  this._powerSavingOn = true;
}

Thermostat.prototype.current_temp = function() {
  return this._temperature;
}

Thermostat.prototype.increment = function () {
  if(this._temperature === this._maxTemp) {
  } else {
  this._temperature += 1;
};
}

Thermostat.prototype.decrement = function () {
  if (this.current_temp() === this._minTemp) {
    throw new Error("Minimum temperature reached");
  } else {
    this._temperature -= 1;
  };
};
Thermostat.prototype.isPowerSavingOn = function () {
  return this._powerSavingOn === true;
};

Thermostat.prototype.visualPowerSaving = function () {
  if(this._powerSavingOn === true) {
    return 'On'
  } else {
    return 'Off'
  };
};

Thermostat.prototype.turnOffPowerSaving = function () {
  this._powerSavingOn = false;
  this._maxTemp = 32;
}

Thermostat.prototype.turnOnPowerSaving = function () {
  this._maxTemp = 25
  this._powerSavingOn = true
}

Thermostat.prototype.togglePowerSaving = function () {
  if (this._powerSavingOn === true) {
    this.turnOffPowerSaving()
  } else {
    this.turnOnPowerSaving()
  };

}

Thermostat.prototype.isMinimumTemperature = function () {
  return this._temperature === this._minTemp;
}

Thermostat.prototype.reset = function () {
  this._temperature = 20
}

Thermostat.prototype.energyUsage = function () {
  if (this.current_temp() < 18) {
    return 'low-usage'
  } else if (this.current_temp() < 25) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  };
}
