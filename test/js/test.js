// states
describe('state', function(){
  describe('#count', function(){
    it('should be one', function(){
      chai.assert.equal(1, riotux.getter('count'));
    })
  })
  describe('#counter', function(){
    it('should be three', function(){
      chai.assert.equal(3, riotux.getter('counter'));
    })
  })
});

// data reative

describe('reactive data', function(){
  describe('#componentUpdate', function(){
    it('should be three', function(){
      chai.assert.equal(3, window.counter);
    })
  })
});

// });
// /** Stores */
// describe('Stores', function(){
//   describe('#carStore', function(){
//     describe('#carColor', function() {
//       it('should be "blue", that is the value passed in argument', function ( ) {
//         chai.assert.equal('blue', window.color);
//       });
//     })
//   });
//   describe('#personStore', function(){
//     describe('#personName', function() {
//       it('should be "Jhon Doe", that is the value passed in argument', function ( ) {
//         chai.assert.equal('Jhon Doe', window.personName);
//       });
//     });
//     describe('#personStartCar', function() {
//       it('should return true', function() {
//         chai.assert.equal(true, window.started);
//       });
//     })
//   });
//   describe('#allStores', function() {
//     it('should be return true if all stores listen the event that would be triggered', function(){
//       chai.assert.equal(true, window.personGetNameEvent);
//       chai.assert.equal(true, window.carGetNameEvent);
//     })
//   });
//   describe('#triggerArguments', function() {
//     it('should be return four, that is the arguments length passed like in the riotux.trigger', function(){
//       chai.assert.equal(4, window.allArgs);
//     })
//   })
// });

// /** Dispatcher */
// describe('Dispatcher', function() {
//   describe('#riotux.getDispatcherEvent()', function() {
//     describe('#events.listen.length', function() {
//       it('should be 2, because the tag have two listen methods initialized', function ( ) {
//         chai.expect(riotux.getDispatcherEvent('listen')).to.have.length(3);
//       });
//     });
//     describe('#events.cancel.length', function() {
//       it('should be 0, because cancel method is not initialized', function ( ) {
//         chai.expect(riotux.getDispatcherEvent('cancel')).to.have.length(0);
//       });
//     });
//     describe('#events.emmit.length', function() {
//       it('should be 0, because emmit method is not initialized', function ( ) {
//         chai.expect(riotux.getDispatcherEvent('emit')).to.have.length(1);
//       });
//     });
//     describe('#events.listenOne.length', function() {
//       it('should be 0, because listenOne method is not initialized', function ( ) {
//         chai.expect(riotux.getDispatcherEvent('cancel')).to.have.length(0);
//       });
//     });
//     describe('#arguments length passed on riotux.emit', function() {
//       it('should be return 2', function ( ) {
//         chai.assert.equal(2, window.lenEmit);
//       });
//     });
//   });
// });