document.addEventListener("DOMContentLoaded", () => {
  var saveBtn = document.getElementById("add-contact");
  saveBtn.addEventListener("click", function () {
    // Get the contact information from the website
    var contact = {
      name: "Shreyansh Mogari",
      phone: "+917999650832",
      email: "shreyansh@pandaadvertising.in",
      company: "Panda Advertising",
    };
    // create a vcard file
    var vcard =
      "BEGIN:VCARD\nVERSION:4.0\nFN:" +
      contact.name +
      "\nTEL;TYPE=work,voice:" +
      contact.phone +
      "\nEMAIL:" +
      contact.email +
      "COMPANY:" +
      contact.company +
      "\nEND:VCARD";
    var blob = new Blob([vcard], { type: "text/vcard" });
    var url = URL.createObjectURL(blob);

    const newLink = document.createElement("a");
    newLink.download = contact.name + ".vcf";
    newLink.textContent = contact.name;
    newLink.href = url;

    newLink.click();
  });
});