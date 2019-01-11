var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Phil", ["groundhog", 11]]
  ];

  function zoo(a) {
      var output =[];
      for (var i =0; i < a.length ;i++) {
          output.push(`${a[i][0]} the ${a[i][1][0]} is ${a[i][1][1]}`);
      }

      return output;
  }

  console.log(zoo(myZoo));