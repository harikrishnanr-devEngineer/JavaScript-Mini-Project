function showDetails() {

    let name = document.getElementById("name").value;

    let age = document.getElementById("age").value;

    let profession = document.getElementById("profession").value;

    document.getElementById("result").innerHTML =

        "<h2>My Profile</h2>" +
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Profession: " + profession;

}