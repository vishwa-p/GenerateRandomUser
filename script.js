async function generateRandomUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];
  display(user);  
}
function display(user) {
  const name = document.getElementById("name");
  const gender = document.getElementById("gender");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const location = document.getElementById("location");  
  name.innerText=`${user.name.title} ${user.name.first} ${user.name.last}`;
  gender.innerText=`${user.gender}`;
  email.innerText=`${user.email}`;
  phone.innerText=`${user.phone}`;
  location.innerText=`${user.location.country}`;
  document.getElementById("img").src=`${user.picture.large}`;

  
}

generateRandomUser();
