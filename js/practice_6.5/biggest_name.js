const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const findLargeName = (arr) => {
  let bigName = arr[0];

  for (let i = 0; i < friends.length; i++) {
    if (arr[i].length > bigName.length) {
      bigName = arr[i];
    }
  }

  return bigName;
};

console.log(findLargeName(friends));
