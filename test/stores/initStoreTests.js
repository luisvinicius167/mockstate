/* global riotux */

/**
  *-------------
  * Store Tests
  *------------- 
  */
riotux.trigger('personStore', 'setName', 'Jhon Doe');
riotux.trigger('carStore', 'setColor', 'blue');
riotux.trigger('carStore', 'personStartCar');
riotux.trigger(['carStore', 'personStore'], 'getName');

riotux.on(['carStore', 'personStore'], 'setStatus', function (  ) {
  window.allArgs = arguments.length;
});

riotux.trigger('carStore', 'setStatus', 'active', 'blue', 'other', 'another');