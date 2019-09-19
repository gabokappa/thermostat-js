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


  $.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=eecce9d49b709dd50d89da2c167fd224&units=metric', function(data) {
    $('#current-city').text(data.name);
    $('#city-temperature').text(data.main.temp);
    $('#city-weather').text(data.weather[0]['description']);
  })

  $('#select-city').submit(function(submission) {
    submission.preventDefault();
    var city = $('#new-city').val();
    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=eecce9d49b709dd50d89da2c167fd224&units=metric', function(data) {
    $('#current-city').text(data.name);
    $('#city-temperature').text(data.main.temp);
    $('#city-weather').text(data.weather[0]['description']);
  })
});
})
