'use strict';

describe('Feature Test:', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat temperature functions', function() {
    it('returns default temperature of 20 C', function() {
      expect(thermostat._temperature).toEqual(20);
    });

    it('increases the temperature', function() {
      thermostat.increment();
      expect(thermostat.current_temp()).toEqual(21);
    });

    it('decreases the temperature', function() {
      thermostat.decrement();
      expect(thermostat.current_temp()).toEqual(19);
    });

    it('will not decrease temperature below minimum', function() {
      for (var i = 0; i < 10; i ++) {
        thermostat.decrement();
      };
      expect(function() { thermostat.decrement();}).toThrowError('Minimum temperature reached');
    });

    it('power saving mode is on by default', function(){
      expect(thermostat.isPowerSavingOn()).toBe(true);
    })

    it ('turns power saving off', function(){
      thermostat.turnOffPowerSaving();
      expect (thermostat.isPowerSavingOn()).toBe(false);
    })

    it('if powermode on the maximum temperature is set to 25 C', function(){
      thermostat.turnOffPowerSaving();
      expect (thermostat._maxTemp).toEqual(32);
      thermostat.turnOnPowerSaving();
      expect (thermostat._maxTemp).toEqual(25);
    })

    it('can reset the temperature to 20 with a reset function', function(){
      thermostat.decrement()
      thermostat.reset()
      expect (thermostat._temperature).toEqual(20)
    })

    it('returns low-usage if temp < 18', function (){
      for (var i = 0; i < 3; i ++) {
        thermostat.decrement();
      };
      expect (thermostat.energyUsage()).toEqual('low-usage');
    })

    it('returns medium-usage if temp < 25', function (){
      for (var i = 0; i < 4; i ++) {
        thermostat.increment();
      };
      expect (thermostat.energyUsage()).toEqual('medium-usage');
    })

    it('returns high-usage if temp > 24', function (){
      for (var i = 0; i < 6; i ++) {
        thermostat.increment();
      };
      expect (thermostat.energyUsage()).toEqual('high-usage');
    })

    // You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.

  })
})
