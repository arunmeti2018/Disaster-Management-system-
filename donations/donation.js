document.getElementById("donationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value;

    if (name && email && amount) {
        alert(`Thank you for your donation of $${ amount }, ${ name } !A confirmation email has been sent to ${ email }.`);
    } else {
    alert("Please fill in all fields.");
}
});

document.getElementById("cancelButton").addEventListener("click", function () {
    document.getElementById("donationForm").reset();
});