var app = new Vue({
  el: '#app',
  data: {
    menu: [],
    icindekiler: [],
    deger: []
  },
  methods: {
    icmenu() {

      this.$http.get('http://localhost:8080/menu/menu/imenu/' + this.icindekiler).then(response => {
        console.log(response.body);
        this.icindekiler = response.body;

      }, response => {
        // error callback
        console.log(response);

      });
    },
    ekle: function(deger, index) {

      let searchResult = this.deger.find(s => s.ne == deger);
      console.log(searchResult instanceof Object);
      if (searchResult instanceof Object) {
        console.log(this.deger.length);
        if (document.getElementById(index).value > 0) {
          this.deger.splice(this.deger.indexOf(searchResult), 1, {
            'ne': deger,
            'miktar': document.getElementById(index).value
          });
          //console.log(this.deger.splice(index,1,{'ne':deger,'miktar':document.getElementById(index).value}));
          document.getElementById(index).value = "";
        }

      } else {

        if (document.getElementById(index).value > 0) {
          this.deger.push({
            'ne': deger,
            'miktar': document.getElementById(index).value
          });
          document.getElementById(index).value = "";
        }
      }
    },
    sil: function(siparis) {

      console.log(this.deger.indexOf(siparis));
      this.deger.splice(this.deger.indexOf(siparis), 1);
    }
  },
  created: function() {
    this.$http.get('http://localhost:8080/menu/menu/amenu').then(response => {
      console.log(response.body);
      this.menu = response.body;

    }, response => {
      // error callback
      console.log(response);

    });
  }
})
