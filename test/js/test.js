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