var store = riotux.Store({
  state: {
    count: 1,
    counter: 1,
  },
  mutations: {
    increment: function ( state, n ) {
      state.count += n;
    },
    increment_counter: function ( state, n, b, c ) {
      state.counter += n;
      console.log('State #counter changed.');
    },
    add: function ( state, a, b ) {
      return a + b;
    }
  }
})