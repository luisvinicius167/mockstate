expect = chai.expect;

Mockstate.setState({
  count: 1
});

describe('StoreState', function () {
  describe('#count', function () {
    it.only('should be 1', function () {
      expect(Mockstate.getState('count')).to.equal(1);
    });
  });
});