const friends = [
  "sabbir",
  "masum",
  "masum",
  "sanim",
  "rifat",
  "shafim",
  "nahiyan",
];

const findLargeName = (arr) => {
  let bigName = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > bigName.length) {
      bigName = arr[i];
    }
  }

  return bigName;
};

console.log(findLargeName(friends));
