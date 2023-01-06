export default function CreateUser(email, plainPassword, name) {
  var data = `email=${encodeURIComponent(email)}`;
  data += `&plainPassword=${encodeURIComponent(plainPassword)}`;
  data += `&name=${encodeURIComponent(name)}`;

  console.log("sending" + data);

  return fetch("http://localhost:3000/users", {
    body: data,
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
