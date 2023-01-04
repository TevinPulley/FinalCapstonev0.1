export default function loginOnServer(email, plainPassword) {
  var data = `email=${encodeURIComponent(email)}`;
  data += `&plainPassword=${encodeURIComponent(plainPassword)}`;
  return fetch("http://localhost:3000/session", {
    //   return fetch("https://mtb-reviews.herokuapp.com/session", {
    body: data,
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
