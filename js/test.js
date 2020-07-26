function name() {
  console.log(arguments);
  console.log(Array.from(arguments));
}

name(1, 2, 3);
