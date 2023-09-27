document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("add-contact").addEventListener("click", function () {
    console.log("clicked");
    if ("contacts" in navigator) {
      const contact = new Contact({
        name: "John Doe",
        email: "johndoe@example.com",
        phoneNumbers: [{ value: "123-456-7890", type: "mobile" }],
      });

      const options = { contact };
      navigator.contacts
        .save(options)
        .then(() => {
          alert("Contact saved successfully");
        })
        .catch((error) => {
          alert("Error saving contact: " + error);
        });
    } else {
      alert("The Contacts API is not supported on this device.");
    }
  });
});
