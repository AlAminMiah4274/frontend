const target = document.getElementById("title");

target.style.color = "red";

// console.log(target);

const allBox = document.getElementsByClassName("box");

for (let i = 0; i < allBox.length; i++) {
  const element = allBox[i];

  element.style.backgroundColor = "pink";
  if (element.innerText == "Box 5") {
    element.style.backgroundColor = "lightblue";
  }
}

//  way one:
document.getElementById("handleAdd").addEventListener("click", (event) => {
  const inputValue = document.getElementById("input-field").value;

  const container = document.getElementById("comment-container");
  const text = document.createElement("p");
  text.classList.add("child");
  text.innerText = inputValue;

  container.appendChild(text);

  document.getElementById("input-field").value = "";

  const allComments = document.getElementsByClassName("child");
  for (const comment of allComments) {
    comment.addEventListener("click", (e) => {
      e.target.parentNode.removeChild(comment);
    });
  }
});

// way two:
const handleButton = (event) => {
  // console.log("hello from way two!!");
  document.body.style.backgroundColor = "lightblue";
};

// to get data by calling api:
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);

    displayUserData(data);
  })
  .catch((err) => {
    console.log(err);
  });

const displayUserData = (usersData) => {
  const userDataContainer = document.getElementById("user-data-container");

  usersData.forEach((userData) => {
    const div = document.createElement("div");
    div.classList.add("user");
    div.innerHTML = `
      <h3>Title: </h3>
      <p>Description: </p>
      <button>Details</button>
    `;

    userDataContainer.appendChild(div);
  });
};
