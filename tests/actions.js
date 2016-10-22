Mockstate.setActions({
  increment: function (state) {
    return new Promise(function(resolve, reject){
      resolve(state.count+=1);
    });
  }
})