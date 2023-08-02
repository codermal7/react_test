// window.addEventListener("load", () => {
//   const loader2 = document.querySelector(".loader2");
//   loader2.classList.add("loader2-hidden");
//   loader2.addEventListener("transitionend", () => {
//     document.body.removeChild("loader2");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const terminalOutput = document.getElementById("terminalOutput");
  const userInput = document.getElementById("userInput");
  const dummyKeyboard = document.getElementById("dummyKeyboard");

  dummyKeyboard.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const inputText = dummyKeyboard.value.toLowerCase().trim();
      const outputLine = document.createElement("div");
      outputLine.classList.add("terminal-line");
      outputLine.innerHTML = `<span class="success">➜</span><span class="directory">~</span><span class="user-input">${inputText}</span>`;

      if (inputText === "help") {
        const commands = [
          "about",
          "skills",
          "education",
          "experience",
          "contact"
        ];
        const commandsList = commands.join(", ");
        const helpMessage = document.createElement("div");
        helpMessage.classList.add("terminal-line");
        // helpMessage.innerHTML = `Available commands: ${commandsList}`;
        helpMessage.innerHTML = `'Supported commands: ["<span class="code">about</span>", "<span class="code">experience</span>", "<span class="code">education</span>", "<span class="code">skills</span>", "<span class="code">contact</span>"]'`;
        terminalOutput.appendChild(helpMessage);
      } 
      
      
      
      
      else if (inputText === "about") {
        const aboutMessage = document.createElement("div");
        aboutMessage.classList.add("terminal-line");
        aboutMessage.innerHTML = "Hello 👋<br>I'm Anuj Pandey, a 20 year old not your average college going guy who is an ambitious and versatile technology enthusiast with a passion for exploring new tech stacks. Skilled in web development, with a focus on problem-solving and a desire to innovate.";
        terminalOutput.appendChild(aboutMessage);
      }
      

      else if (inputText === "skills") {
        const skillsMessage = document.createElement("div");
        skillsMessage.classList.add("terminal-line");
        skillsMessage.innerHTML = '<span class="code">Languages:</span> HTML, CSS, JavaScript, Java, C++, Python <br><span class="code">Technologies:</span> Git, Github <br><span class="code">Frameworks:</span> React.js';
        terminalOutput.appendChild(skillsMessage);
      }
      

      else if (inputText === "education") {
        const edMessage = document.createElement("div");
        edMessage.classList.add("terminal-line");
        edMessage.innerHTML = "Currently pursuing B-tech in Computer Science and Enginneering from Bennett University Times Group, Greater Noida with a current CGPA of <b>9.2</b>";
        terminalOutput.appendChild(edMessage);
      }
      

      else if (inputText === "experience") {
        const experienceMessage = document.createElement("div");
        experienceMessage.classList.add("terminal-line");
        experienceMessage.innerHTML = "As you know, I am always eager to learn new things and get my hands dirty in different fields, so currently, I am working as a research intern at the <b>Indian Institute of Technology (IIT) BHU</b> in the field of machine learning, specifically in the domain of pattern recognition.";
        terminalOutput.appendChild(experienceMessage);
      }
      

      else if (inputText === "contact") {
        const contactMessage = document.createElement("div");
        contactMessage.classList.add("terminal-line");
        contactMessage.innerHTML = 'You can contact me through any of the following links:<br>["<a target="_blank" rel="noopener noreferrer" href="https://instagram.com/not_ur_anuj" class="social link">Instagram</a>, "<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anuj-kumar-pandey-6151a81b5/" class="social link">LinkedIn</a>", "<a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/not_ur_anuj/" class="social link">Twitter</a>", "<a target="_blank" rel="noopener noreferrer" href="https://github.com/codermal7" class="social link">GitHub</a>"]';
        terminalOutput.appendChild(contactMessage);
      }


      else if (inputText === "you") {
        const bobMessage = document.createElement("div");
        bobMessage.classList.add("terminal-line");
        bobMessage.innerHTML = "<span style='font-size: 1rem;'>Why did the curious person bring a shovel? Because they wanted to dig deep into every topic and uncover all the juicy secrets! 🕵️‍♂️💡 Keep digging, my inquisitive friend! There is a secret command for you 🐾😄</span>";
        terminalOutput.appendChild(bobMessage);
      }

      else if (inputText === "party") {
        startTheParty();
      }


      else if (inputText === "sudo rm -rf") {
        const secMessage = document.createElement("div");
        secMessage.classList.add("terminal-line");
        secMessage.innerHTML = "<span style='font-size: 1rem;'>I bet you're the type of person who reads the terms and conditions 😂</span>";
        terminalOutput.appendChild(secMessage);
        whooops();
      }

      else if (inputText === "") {
        return;
      }

      else {
        const errorMessage = document.createElement("div");
        errorMessage.classList.add("terminal-line");
        errorMessage.innerHTML = `Command not found: ${inputText}`;
        terminalOutput.appendChild(errorMessage);
      }

      terminalOutput.scrollTop = terminalOutput.scrollHeight;
      userInput.innerText = "";
      dummyKeyboard.value = "";
      event.preventDefault(); // Prevent form submission
    }
  });

  dummyKeyboard.addEventListener("input", function (event) {
    userInput.innerText = dummyKeyboard.value;
  });
});


const startTheParty = () => {
  var confettiSettings = {
    target: "canvas",
    max: "1000",
    size: "1",
    animate: true,
    props: ["square", "triangle", "line"],
    colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
    clock: "25",
    rotate: true,
    width: "1680",
    height: "971",
    start_from_edge: true,
    respawn: false
  };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
};


const whooops = () => {
  document.body.querySelector(".hero").remove();
  document.body.style.background = "#000";
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
};