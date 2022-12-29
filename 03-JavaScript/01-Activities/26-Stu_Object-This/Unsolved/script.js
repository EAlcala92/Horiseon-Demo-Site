// TODO: What does 'this' refer to?
<<<<<<< HEAD
console.log(this); //window

// TODO: What does 'this' refer to?
function helloThis() { 
   console.log("Inside this function, this is " + this); //logs object window
   }

// TODO: What will this log? 
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); //logs 20
   }
=======
//
console.log(this);

// TODO: What does 'this' refer to?
function helloThis() {
  console.log("Inside this function, this is " + this);
}

// TODO: What will this log?
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
>>>>>>> b36820dc95a27129c39929d68566a81a845836b7
};

// TODO: What will this log?
var investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this);
    },
  },
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
