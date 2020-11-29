let a = 1;

let obj = {
  a: 2,
  c: function () {
    let c = {
      a: this.a,
      d: this.a,
    };
    let o = () => {
      console.log(this.a);
    };
    o();
    console.log(c.a);
    console.log(c.d);
  },
};

obj.c();

let y = obj.c;
y();
