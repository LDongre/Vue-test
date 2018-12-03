new Vue({
  el:'#vue-app',
  data: {
    health: 100,
    ended: false,
    characters: ["Mario","Luigi","Yoshi","Browser"],
    ninjas: [
      {name: "Ryu", age:25},
      {name: "yoshi", age: 30},
      {name: "ken", age: 55}
    ],
    success : false,
    error : false,
    available: false,
    nearby: false,
    a : 1,
    b : 1,
    name: "lovesh",
    job: "Support Engineer",
    website: "https://www.google.co.in",
    websiteTag: '<a href="https://google.co.in">link</a>',
    age: 20,
    x: 0,
    y: 0
  },
  methods: {
    punch:function() {
      this.health-=10;
      if(this.health <= 0){
        ended = true;
      }
    },
    restart:function() {
      this.health = 100;
      this.ended = false;
    },
    greet: function(time) {
      return "Good" + time + ", " + this.name ;
    },
    addYear:function(inc) {
      this.age+=inc;
    },
    subYear:function(dec) {
      this.age-=dec;
    },
    updateXY:function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    logName:function() {
      console.log("you entered name");
    },
    logAge:function() {
      console.log("you entered age");
    }/*,
    addToA:function() {
      return this.a + this.age;
    },
    addToB:function() {
      return this.b + this.age;
    },*/
  },
  computed: {
    addToA:function() {
      return this.a + this.age;
    },
    addToB:function() {
      return this.b + this.age;
    },
    compClasses:function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }

});
