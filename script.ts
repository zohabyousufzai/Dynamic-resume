interface PersonalInfo {

    name: string;

    email: string;

    phone: string;

}


interface EducationInfo {

    degree: string;

    institution: string;

    graduation: string;

}


interface WorkExperience {

    jobTitle: string;

    company: string;

    description: string;

}


interface Skills {

    skillsList: string;

}


function generateResume() {

    // Capture Personal Information

    const personalInfo: PersonalInfo = {

        name: (document.getElementById("name") as HTMLInputElement).value,

        email: (document.getElementById("email") as HTMLInputElement).value,

        phone: (document.getElementById("phone") as HTMLInputElement).value,

    };


    // Capture Education Information

    const educationInfo: EducationInfo = {

        degree: (document.getElementById("education-degree") as HTMLInputElement).value,

        institution: (document.getElementById("institution") as HTMLInputElement).value,

        graduation: (document.getElementById("graduation") as HTMLInputElement).value,

    };


    // Capture Work Experience

    const workExperience: WorkExperience = {

        jobTitle: (document.getElementById("experience") as HTMLInputElement).value,

        company: (document.getElementById("company") as HTMLInputElement).value,

        description: (document.getElementById("description") as HTMLInputElement).value,

    };


    // Capture Skills

    const skills: Skills = {

        skillsList: (document.getElementById("skills") as HTMLInputElement).value,

    };


    // Generate Resume Output

    const resumeOutput = `

        <h2>${personalInfo.name}'s Resume</h2>

        <p><strong>Email:</strong> ${personalInfo.email}</p>

        <p><strong>Phone:</strong> ${personalInfo.phone}</p>


        <h3>Education</h3>

        <p><strong>Degree:</strong> ${educationInfo.degree}</p>

        <p><strong>Institution:</strong> ${educationInfo.institution}</p>

        <p><strong>Year of Graduation:</strong> ${educationInfo.graduation}</p>


        <h3>Work Experience</h3>

        <p><strong>Job Title:</strong> ${workExperience.jobTitle}</p>

        <p><strong>Company:</strong> ${workExperience.company}</p>

        <p><strong>Description:</strong> ${workExperience.description}</p>


        <h3>Skills</h3>

        <p>${skills.skillsList}</p>

    `;


    // Display the resume output

    const resumeSection = document.getElementById("resume-output");

    if (resumeSection) {

        resumeSection.innerHTML = resumeOutput;

    }

}

