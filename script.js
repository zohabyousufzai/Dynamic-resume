function generateResume() {
    // Capture Personal Information
    var personalInfo = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
    };
    // Capture Education Information
    var educationInfo = {
        degree: document.getElementById("education-degree").value,
        institution: document.getElementById("institution").value,
        graduation: document.getElementById("graduation").value,
    };
    // Capture Work Experience
    var workExperience = {
        jobTitle: document.getElementById("experience").value,
        company: document.getElementById("company").value,
        description: document.getElementById("description").value,
    };
    // Capture Skills
    var skills = {
        skillsList: document.getElementById("skills").value,
    };
    // Generate Resume Output
    var resumeOutput = "\n\n        <h2>".concat(personalInfo.name, "'s Resume</h2>\n\n        <p><strong>Email:</strong> ").concat(personalInfo.email, "</p>\n\n        <p><strong>Phone:</strong> ").concat(personalInfo.phone, "</p>\n\n\n        <h3>Education</h3>\n\n        <p><strong>Degree:</strong> ").concat(educationInfo.degree, "</p>\n\n        <p><strong>Institution:</strong> ").concat(educationInfo.institution, "</p>\n\n        <p><strong>Year of Graduation:</strong> ").concat(educationInfo.graduation, "</p>\n\n\n        <h3>Work Experience</h3>\n\n        <p><strong>Job Title:</strong> ").concat(workExperience.jobTitle, "</p>\n\n        <p><strong>Company:</strong> ").concat(workExperience.company, "</p>\n\n        <p><strong>Description:</strong> ").concat(workExperience.description, "</p>\n\n\n        <h3>Skills</h3>\n\n        <p>").concat(skills.skillsList, "</p>\n\n    ");
    // Display the resume output
    var resumeSection = document.getElementById("resume-output");
    if (resumeSection) {
        resumeSection.innerHTML = resumeOutput;
    }
}
