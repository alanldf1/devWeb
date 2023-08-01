const user = {
    name: "Alan",
    age: "19",
    job: "Developer",
};

document.body.innerText = JSON.stringify(Object.entries(user));
