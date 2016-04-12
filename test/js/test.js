/** Stores */
describe('Stores', function(){
  describe('#carStore', function(){
    describe('#carColor', function() {
      it('should be "blue", that is the value passed in argument', function ( ) {
        chai.assert.equal('blue', window.color);
      });
    })
  });
  describe('#personStore', function(){
    describe('#personName', function() {
      it('should be "Jhon Doe", that is the value passed in argument', function ( ) {
        chai.assert.equal('Jhon Doe', window.personName);
      });
    });
    describe('#personStartCar', function() {
      it('should return true', function() {
        chai.assert.equal(true, window.started);
      });
    })
  });
  describe('#allStores', function(){
    it('should be return true if all stores listen the event that would be triggered', function(){
      chai.assert.equal(true, window.personGetNameEvent);
      chai.assert.equal(true, window.carGetNameEvent);
    })
  })
});

/** Dispatcher */
describe('Dispatcher', function() {
  describe('#riotux.getDispatcherEvent()', function() {
    describe('#events.listen.length', function() {
      it('should be 2, because the tag have two listen methods initialized', function ( ) {
        chai.expect(riotux.getDispatcherEvent('listen')).to.have.length(2);
      });
    });
    describe('#events.listen.length', function() {
      it('should be 2, because the tag have two listen methods initialized', function ( ) {
        chai.expect(riotux.getDispatcherEvent('listen')).to.have.length(2);
      });
    });
    describe('#events.cancel.length', function() {
      it('should be 0, because cancel method is not initialized', function ( ) {
        chai.expect(riotux.getDispatcherEvent('cancel')).to.have.length(0);
      });
    });
    describe('#events.emmit.length', function() {
      it('should be 0, because emmit method is not initialized', function ( ) {
        chai.expect(riotux.getDispatcherEvent('emmit')).to.have.length(0);
      });
    });
    describe('#events.listenOne.length', function() {
      it('should be 0, because listenOne method is not initialized', function ( ) {
        chai.expect(riotux.getDispatcherEvent('cancel')).to.have.length(0);
      });
    });
  });
});