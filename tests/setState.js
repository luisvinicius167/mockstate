expect = chai.expect;

describe('StoreState', function () {

  describe('#getState(count)', function () {
    it.only('should be 1', function () {
      expect(Mockstate.getState('count')).to.equal(1);
    });
  });

  describe('#IncrementCount', function () {
    it.only('The state count should be 2', function () {
      Mockstate.dispatch('increment').then(function (data) {
        expect(data.value).to.equal(2);
      })
    });
  });

  describe('#IncrementCountInParalel', function () {

    it.only('Verify the result of the action', function () {
      Mockstate.dispatch('increment')
        .then(function (data) {
          expect(data.value).to.equal(3);
        })
      Mockstate.dispatch('increment')
        .then(function (data) {
          expect(data.value).to.equal(4);
        })
    });

    it.only('Verify the value of count', function () {
      expect(Mockstate.getState('count')).to.equal(4);
    });
  });
});
