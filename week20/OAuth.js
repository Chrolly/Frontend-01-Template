// App ID: 78330

// Client ID: Iv1.ab6e944813dfbe11

// Client secret: decaa408d75a3dea9e0c8b31557a12ad1aef4f6d

// http://localhost:8000/?code=81f4ef7e2a5185d44e69&state=abc123


// {
//   https://github.com/login/oauth/authorize?client_id=Iv1.ab6e944813dfbe11&redirect_uri=http%3A%2F%2Flocalhost%3A8000&scope=read%3Auser&state=abc123
// }

{
  let code = "1935cedb7ed9f5bc2746";
  let state = "abc123";
  let client_secret = "decaa408d75a3dea9e0c8b31557a12ad1aef4f6d";
  let client_id = "Iv1.ab6e944813dfbe11";
  let redirect_uri = encodeURIComponent("http://localhost:8000");

  let params = `code=${code}&state=${state}&client_secret=${client_secret}&client_id=${client_id}&redirect_uri=${redirect_uri}`;
  let xhr = new XMLHttpRequest;
  xhr.open("POST", `https://github.com/login/oauth/access_token?${params}`, true);
  xhr.send(null);

  xhr.addEventListener("readystatechange", function (event) {
    if (event.readystate === 4) {
      debugger
      console.log(event.responseText)
    }
  })
}

{
  let xhr = new XMLHttpRequest;
  xhr.open("GET", `https://api.github.com/user`, true);
  xhr.send(null);

  xhr.addEventListener("readystatechange", function (event) {
    if (xhr.readystate === 4) {
      debugger
      console.log(xhr.responseText)
    }
  })
}