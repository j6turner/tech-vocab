techVocab.factory("AppFactory", function AppFactory() {
  var factory = {};

  factory.decks = [
    { name: "Ruby Methods", id:1,
      cards: [
        {front: "string.chop()",
          back: "removes the last character", id:1},
        {front: "string.chomp()",
          back: "removes blank space and carriage returns from the end", id:2},
        {front: "array.join()",
          back: "concats an array into a string", id:3},
        {front: "array.reverse()",
          back: "reverses order of array elements", id:4},
        {front: "array.shuffle()",
          back: "randomizes order of elements", id:5},
        {front: "float.ceil()",
          back: "rounds up to integer", id:6},
        {front: "array.unshift()",
          back: "takes an argument and adds it to the beginning of the array", id:7},
        {front: "array.pop()",
          back: "removes the last element of the array and returns it", id:8},
        {front: "array.length()",
          back: "returns the number of elements in the array", id:9},
        {front: "array.shift()",
          back: "removes the first element of the array and returns it", id:10}
      ]
    },
    { name:"Spanish", id:2,
      cards: [
        {front: "Hola",
          back: "Hello", id:1},
        {front: "Adios",
          back: "Goodbye", id:2},
        {front: "Comida",
          back: "Food", id:3},
        {front: "Almuerza",
          back: "Lunch", id:4}
      ]
    }
  ];

  return factory;
});