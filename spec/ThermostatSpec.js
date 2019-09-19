'use strict';

describe('Thermostat', function(){
  var thermostat


  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('temperature settings', function(){
    it('increases the temeperature by 1 C', function(){
      thermostat.increment();
      expect(thermostat.current_temp()).toEqual(21);
    });

    it('decreases the temeperature by 1 C', function(){
      thermostat.decrement();
      expect(thermostat.current_temp()).toEqual(19);
    });

    it('will not decrease temperature below minimum', function() {
      for (var i = 0; i < 10; i ++) {
        thermostat.decrement();
      };
      expect(function() { thermostat.decrement();}).toThrowError('Minimum temperature reached');
    });

    it('returns a boolean when checking minimum temperature', function() {
      for (var i = 0; i < 10; i ++) {
        thermostat.decrement();
      };
      expect(thermostat.isMinimumTemperature()).toEqual(true);
    })

  });
});
