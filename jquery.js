$( document ).ready(function() {
  var thermostat = new Thermostat;

  engCons = function () {
  if (thermostat.energyUsage() === 'low-usage') {
    return $('#energy-consumption').css('color', 'green')
  } else if (thermostat.energyUsage() === 'medium-usage') {
    return $('#energy-consumption').css('color', 'black')
  } else {
  return $('#energy-consumption').css('color', 'red')
  };
}

  $('#current-temperature').text(thermostat._temperature)
  $('#power-mode').text(thermostat.visualPowerSaving())
  engCons();
  $('#energy-consumption').text(thermostat.energyUsage())

  $('#temperature-up').click(function(){
    thermostat.increment();
    $('#current-temperature').text(thermostat._temperature)
    engCons();
    $('#energy-consumption').text(thermostat.energyUsage())
  })

  $('#temperature-down').click(function(){
    thermostat.decrement();
    $('#current-temperature').text(thermostat._temperature)
    engCons();
      $('#energy-consumption').text(thermostat.energyUsage())
  })

  $('#toggle-power-mode').click(function(){
  thermostat.togglePowerSaving();
  $('#power-mode').text(thermostat.visualPowerSaving())
  engCons();
    $('#energy-consumption').text(thermostat.energyUsage())
})

$('#reset').click(function(){
  thermostat.reset();
  $('#current-temperature').text(thermostat._temperature)
  engCons();
    $('#energy-consumption').text(thermostat.energyUsage())
})

})
