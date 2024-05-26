const btnSubmit = document.getElementById("btnSubmit");

const data = [
    {
        email: "marquezkamikaze@gmail.com",
        password: "herecomesmaverick"
    }
]

btnSubmit.addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // when the button is clicked, the user variable will look for the inputted data from the user. Whether the inputted data match or not,
    const user = data.find(user => user.email === email && user.password === password);


    // it will return either of the result below
    if(!user) {
        alert("Either email or password is wrong");
    } else {
        alert("Successfully connected!");
    }

})
