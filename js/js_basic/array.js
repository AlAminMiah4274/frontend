var info = [14, "masud", "kaowya", true, 4.92, { name: "kader", age: 58 }];

// info.push([45, "sabbir"]);
// info.pop();

// info.unshift(12);
// console.log(info);

// info.shift();
// console.log(info);

for (var i = 0; i < info.length; i++) {
  var element = info[i];

  if (element == "masud") {
    console.log("Yah !!");
    break;
  }
}
