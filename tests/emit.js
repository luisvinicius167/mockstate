Mockstate.subscribe(this, function(){
  console.log('Updated.');
})

setTimeout(function(){
  Mockstate.emit().then(function(){
    console.log('After emit called.')
  });
}, 3000)