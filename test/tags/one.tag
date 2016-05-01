<one>
  
  <script>
    var self = this;
    riotux.action('counter', 'change_count', 2);
    riotux.on('counter', function ( count ) {
      window.counter = count;
    });
  </script>  
</one>