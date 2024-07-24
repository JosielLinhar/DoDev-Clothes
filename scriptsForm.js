const form = document.querySelector("#form");

async function fetchData(e) {
  e.preventDefault();
  let email = form.elements["email"].value;
  let name = form.elements["name"].value;
  let number = form.elements["contact"].value;

  let data = {
    email: email,
    name: name,
    number: number,
  };

  try {
    let url = "https://apigenerator.dronahq.com/api/mQpNBmKy/data";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    let json = await response.json();

    if (response.ok) console.log("Enviado");
    else if (!response.ok) throw new Error(json.message);
  } catch (err) {
    json = null;
    alert(err.message);
  }
}

form.addEventListener("submit", fetchData);
