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
riotux.on(['carStore', 'personStore'], 'setStatus', function ( status ){
  console.log('The status of the Store is: ', status);
});