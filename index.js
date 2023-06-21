document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var skills = [];
    var skillsCheckboxes = document.querySelectorAll(
      'input[name="skills"]:checked'
    );
    skillsCheckboxes.forEach(function (checkbox) {
      skills.push(checkbox.value);
    });

    // Create result card
    var resultCard = document.createElement("div");
    resultCard.className = "result-card";

    var resultContent = document.createElement("div");
    resultContent.className = "result-content";

    // Populate result card with form data
    resultContent.innerHTML =
      "<p><strong>Name:</strong> " +
      name +
      "</p>" +
      "<p><strong>Email:</strong> " +
      email +
      "</p>" +
      "<p><strong>Website:</strong> " +
      website +
      "</p>" +
      "<p><strong>Gender:</strong> " +
      gender +
      "</p>" +
      "<p><strong>Skills:</strong> " +
      skills.join(", ") +
      "</p>";

    resultCard.appendChild(resultContent);

    // Add result card to output container
    var outputContainer = document.getElementById("outputContainer");
    outputContainer.appendChild(resultCard);

    // Clear form values
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("website").value = "";
    document.getElementById("male").checked = true;
    skillsCheckboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });

    // Show output container
    outputContainer.style.display = "block";
  });
