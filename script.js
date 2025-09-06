// Categories for organizing responses
const categories = {
    GENERAL: "📝 General Commands",
    ABOUT: "👤 About HPTech",
    SKILLS: "💻 Skills & Technologies",
    CONTACT: "📧 Contact Information",
    PROJECTS: "🚀 Projects & Experience"
};

// Bot responses with categories and suggestions
const responses = {
    // Help and Navigation
    "help": () => `Welcome to HPTech Bot! 👋\n\nI can help you with these categories:\n
1. ${categories.GENERAL} - Type 'commands'
2. ${categories.ABOUT} - Type 'about'
3. ${categories.SKILLS} - Type 'skills'
4. ${categories.CONTACT} - Type 'contact'
5. ${categories.PROJECTS} - Type 'projects'\n
Type any category name to learn more!`,

    "commands": "Basic commands you can use:\n🗣️ hi/hello/hey: Greet me\n❓ how are you: Check on me\n⏰ time: Get current time\n📜 history: View chat history\n🗑️ clear: Clear chat history\n\nType 'help' to see all categories!",

    "about": "Questions about HPTech:\n👤 who are you\n🎯 what does hptech mean\n⏳ how long coding\n📍 location\n\nType any question or 'help' for more options!",

    "skills": "Ask about my technical skills:\n💻 what's your stack\n⭐ strongest skill\n☁️ cloud platforms\n📚 current learning\n\nType any question to learn more!",

    "contact": "Ways to reach HPTech:\n🌐 portfolio\n📧 email\n🐱 github\n💼 hire\n\nType any option to get details!",

    "projects": "Learn about my work:\n🚀 current projects\n💡 experience\n📂 github repos\n\nAsk about any project!",

    // Greetings
    "hello": "Hi there! 👋 Type 'help' to see what I can do!",
    "hi": "Hello! 👋 Need assistance? Type 'help' to learn more!",
    "hey": "Hey there! 👋 Type 'help' to explore my capabilities!",
    "how are you": "I'm doing great, thanks for asking! 😊",

    // About
    "who are you": "I'm Mini Bot built by HPTech! 🤖",
    "what is your name": "You can call me HPTech Mini Bot! 👋",
    "who is hptech": "HPTech is ALIMI AZEEZ OPEYEMI, a fullstack developer! 🚀",
    "tell me about hptech": "HPTech is my creator, a passionate developer!",
    "what does hptech mean": "HPTech = Hope in Tech 💡",
    "how can i contact hptech": "Portfolio 🌐 https://hptech.netlify.app",

    // Skills
    "stack": "Frontend: React, HTML, CSS, JS\nBackend: Node.js, Express\nDB: MongoDB\nCloud: Docker, Git",
    "technologies": "I use React, Node, MongoDB, Git, and Docker",
    "current projects": "🤖 Mini Bot\n🌐 Portfolio\n💰 Expense tracker\n📱 Quiz app",

    "how long have you been coding": "I've been coding for 2+ years! 📈",
    "hire": "Yes! Visit 🌐 https://hptech.netlify.app to hire me.",
    "remote": "Yes, I work remotely 🌍",

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
    return "🤔 I don’t understand that yet. Type 'help' to see available commands!";
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
    const message = input.value.trim();

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
