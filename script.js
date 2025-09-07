// Categories for organizing responses
const categories = {
    GENERAL: "📝 General Commands",
    ABOUT: "👤 About HPTech",
    SKILLS: "💻 Skills & Technologies",
    CONTACT: "📧 Contact Information",
    PROJECTS: "🚀 Projects & Experience",
    CURIOSITY: " CurIosity"
};

// Bot responses with categories and suggestions
const responses = {
    // Help and Navigation
    "/help": () => `Welcome to HPTech Bot! 👋\n\n I can help you with these categories:\n
1. ${categories.GENERAL} - Type '/commands'
2. ${categories.ABOUT} - Type '/about'
3. ${categories.SKILLS} - Type '/skills'
4. ${categories.CONTACT} - Type '/contact'
5. ${categories.PROJECTS} - Type '/projects'
6. ${categories.CURIOSITY} - Type '/curiosity' \n
Type any category name to learn more!`,

    "/commands": "Basic commands you can use:\n🗣️ hi/hello/hey: Greet me\n❓ how are you: Check on me\n⏰ time: Get current time\n📜 history: View chat history\n🗑️ clear: Clear chat history\n\nType '/help' to see all categories!",

    "/about": "Questions about HPTech:\n1.👤 who are you\n\n 2.what is your name\n\n 3.who is hptech\n\n 4.tell me about hptech\n\n5. how can i contact hptech\n\n 6.how can i contact hptech\n\n 7.🎯 what does hptech mean\n\n 8.⏳how long have you been coding\n\n 9.📍 location || Type any question or '/help' for more options!",

    "/skills": "Ask about my technical skill:\n 1. what's your stack\n 2. what technologies do you use\n3. current project\n4. how long have you been coding\n5. can i hire you \n6. remote\n7. cloud platforms \n8. current learning \n 9. what's is your strongest skill || Type any question or '/help' for more options!",

    "/contact": "Ways to reach HPTech:\n🌐 portfolio\n📧 email\n🐱 github || Type any option to get more details!",

    "/projects": "Learn about my work:\n🚀 current projects\n💡 resume\n📂 github repos || Ask about any project!",

    "/curiosity" : " Curious questions people ask me:\n 1. what inspired you to code \n\n 2. are you open to internship \n\n 3. how do you handle bugs \n\n 4. do you write clean code \n\n 5. what make you different \n\n 6. do you work in team || Type any option to get more details! ",
   


    //curosity

    "what inspired you to code": "Curiosity and the desire to build useful things solving problems with tech excites me.",
    "are you open to internship": "Yes, if it offers learning opportunities and real world experience.",
    "how do you handle bugs": "Debugging calmly, using console logs, stack overflow and breaking down the problem.",
    "do you write clean code": "Yes, I try to write readable, maintainable code using best practices.",
    "what make you different": "I'm self-taught, consistent, passionate about clean code and always learning.",
    "do you work in team": "Yes, I love working in collaborative environmentsand using Git/Github to manage projects.",


    //contact 

    "portfolio": "You can reach HPTech via portfolio : https://hptech.netlify.app/contact",
    "email": "You can reach HPTech via email  : alimiazeez4@gmail.com",
    "github": "You can reach HPTech via github : https://github.com/HPTech4 ",

    //project
    "github repos": "You can contact HPTech via email alimiazeez4@gmail.com for any project github repository you need",
    "resume": " You can go through my portfolio  https://hptech.netlify.app to download my resume there",
    
    // Greetings
    "hello": "Hi there! 👋 Type '/help' to see what I can do!",
    "hi": "Hello! 👋 Need assistance? Type '/help' to learn more!",
    "hey": "Hey there! 👋 Type '/help' to explore my capabilities!",
    "how are you": "I'm doing great, thanks for asking! 😊",

    // About
    "who are you": "I'm Mini Bot built by HPTech! 🤖",
    "what is your name": "You can call me HPTech Mini Bot! 👋",
    "who is hptech": "HPTech is ALIMI AZEEZ OPEYEMI, a fullstack developer! 🚀",
    "tell me about hptech": "HPTech is my creator, a passionate developer!",
    "what does hptech mean": "HPTech = Hope in Tech 💡",
    "how can i contact hptech": "Portfolio 🌐 https://hptech.netlify.app or via email : alimiazeez4@gmail.com",
    "location" : "I'm based in Nigeria 🇳🇬",

   

    // Skills
    "what's your stack": "Frontend: React, HTML, CSS, JS\nBackend: Node.js, Express\nDB: MongoDB\nCloud: Docker, Git.....",
    "what technologies do you use": "I use HTML, CSS, Javascript, React, Node.js, MongoDB,Express, TailwindCSS, Git, Docker and more",
    "current projects": "🤖 Mini Bot\n🌐 Portfolio\n💰 Expense tracker\n📱 Quiz app",
    "how long have you been coding": "I've been coding for 2+ years! 📈",
    "can i hire you": "Yes! I'm available for  freelance or part-time roles. You can contact methroughmy portfolio site🌐 https://hptech.netlify.app",
    "remote": "Yes, I work remotely 🌍",
    "cloud platforms" : "I'm learning AWS and Azure platfrom and planning to explore others like Huewei and Google Cloud soon",
    "current learning": "I'm currently learning Cloud Computing to become a Cloud Developer, DevOps Engineer and Cloud Solution Architect",
    "what's is your strongest skill": "Problem-solving and frontend development. I also enjoy learning new  tools fast",

    // Fun
    "who created you": "I was created by HPTech 👨‍💻",
    "where are you from": "I'm based in Nigeria 🇳🇬",
    "bye": "Goodbye 👋 Come back anytime!",
    "goodbye": "Bye! Looking forward to our next chat! 👋",
    "thanks": "You're welcome!",
    "thank you": "Glad I could help! 🙌",

    // Utilities
    "time": () => `The current time is ${new Date().toLocaleTimeString()}`,
    "clear": () => {
        document.getElementById("messages").innerHTML = "";
        return "Chat cleared! 🗑️";
    },
    "history": () => "📜 History feature coming soon! Stay tuned!"
};

// 🔍 Fuzzy matcher: finds best matching response
function findBestMatch(input) {
    input = input.toLowerCase();

    // If exact match exists
    if (responses[input]) return responses[input];

    // Check if input contains a known keyword
    for (let key of Object.keys(responses)) {
        if (input.includes(key)) {
            return responses[key];
        }
    }

    // Default fallback
    return "🤔 I don’t understand that yet. Type '/help' to see available commands!";
}

// Show typing indicator
function showTypingIndicator() {
    const indicator = document.querySelector(".typing-indicator");
    if (indicator) indicator.classList.remove("hidden");
}

// Hide typing indicator
function hideTypingIndicator() {
    const indicator = document.querySelector(".typing-indicator");
    if (indicator) indicator.classList.add("hidden");
}

// Display messages
function displayMessage(text, sender) {
    const messages = document.getElementById("messages");
    const div = document.createElement("div");
    div.className = `message ${sender}`;

    const content = document.createElement("p");
    content.textContent = typeof text === "function" ? text() : text;

    const timestamp = document.createElement("small");
    timestamp.textContent = new Date().toLocaleTimeString();
    timestamp.className = "timestamp";

    div.appendChild(content);
    div.appendChild(timestamp);
    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;
}

// Handle user message
function handleMessage() {
    const input = document.getElementById("input");
    const message = input.value.trim().toLowerCase();

    if (!message) return;

    displayMessage(message, "user");
    input.value = "";
    input.focus();

    showTypingIndicator();

    const reply = findBestMatch(message);

    setTimeout(() => {
        hideTypingIndicator();
        displayMessage(reply, "bot");
    }, 500);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("btn");
    if (sendButton) sendButton.addEventListener("click", handleMessage);

    const inputField = document.getElementById("input");
    if (inputField) {
        inputField.addEventListener("keypress", function (e) {
            if (e.key === "Enter") handleMessage();
        });
    }
});
