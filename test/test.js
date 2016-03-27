describe('carStore', function(){
  describe('#personValue', function(){
    it('should return the value pass with argument', function ( ) {
      chai.assert.equal(1, riotux.trigger('carStore', 'start', 1));
    });
  });
});