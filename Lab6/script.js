const button = document.querySelector(".fetchDataButton");
button.addEventListener("click", fetchData);

function fetchData() {
  fetch("https://randomuser.me/api/")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Request not fulfilled");
    })
    .then((data) => updateData(data.results[0]))
    .catch((error) => {
      console.error("A problem occurred with the fetch operation:", error);
    });
}

function updateData(user) {
  const userData = {
    picture: user.picture.large,
    postcode: user.location.postcode,
    city: user.location.city,
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
  };

  const userDataDiv = document.createElement("div");
  userDataDiv.className = "userCard";
  userDataDiv.innerHTML = `
      <img src="${userData.picture}">
      <h2>${userData.name}</h2>
      <p>City: ${userData.city}</p>
      <p>Post index: ${userData.postcode}</p>
      <p>Email: ${userData.email}</p>
    `;

  document.querySelector(".usersContainer").appendChild(userDataDiv);
}
