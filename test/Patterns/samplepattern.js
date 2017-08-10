// A car class - >>>>>>>>>>>>>>>>>>>>> method 1
function Car(model){

  this.model = model;
  this.color = "silver";
  this.year = "2017";

  this.getInfo = function(){
     return this.model + "  " + this.year;
  };
}

var mycar = new Car("ford");
mycar.year = "2010";

console.log(mycar.getInfo());

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   method -2 Uisng anti-pattern
 function Apple(Type){
   this.Type = Type;
   this.color = "red";
   this.getInfo = getAppleInfo;
 }

// anti-pattern
 function getAppleInfo(){
    return this.color +  " " + this.Type + ' apple ';
 }

 var mac = new Apple("macintosh");
 console.log(mac.getInfo());


 // >>>>>>>>>>>>>>>>>>>>>>>>>>>    method - 3 Using Proptotype
   function Windows(type){
     this.type = type;
     this.color = 'black';
   }

    Windows.prototype.getInfo = function (){
       return this.type + "  "  + this.color;
    }

    var win = new Windows('PC');
    win.color = "white";
    console.log(win.getInfo());

  // >>>>>>>>>>>>>>>>>>>>>>>>>   method -4 Using Object literals [Singleton]

   var apple = {
       type: "macintosh",
       color: "red",
       getInfo: function(){
         return this.type + ' ' + this.color;
       }
   }

     console.log("mtd -4: " + apple.getInfo());


  // >>>>>>>>>>>>>>>>>>>>>>>>>>>  method -5 Singleton Using a function

   var apple = new function(){
      this.type = 'mac';
      this.color = 'blue';

      this.getInfo = function(){
        return this.type + ' ' + this.color + ' apple';
      }
   }

   console.log("mtd -5: " +apple.getInfo());
