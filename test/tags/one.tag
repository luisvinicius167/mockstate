<one>
  
  <script>
    var self = this;
    
    riotux.listen('init', function ( value ) {
      window.initied = value;
    });
    
    riotux.listen('getName', function ( name ) {
      self.name = name;
      console.log(self.name)
    });
    
    self.on('unmount', function () {
      riotux.cancel('init');
    });
  </script>  
</one>