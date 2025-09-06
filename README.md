# 🤖 Mini Bot – Interactive Portfolio Chat Bot

A smart, interactive chatbot that serves as a dynamic portfolio interface. 
Built with modern web technologies and containerized for easy deployment, 
Mini Bot showcases HPTech's skills, projects, and professional journey through 
natural conversations.

---

## 🚀 Key Features

- 🗣️ **Natural Conversations**: Engaging dialogue with context-aware responses
- � **Responsive Design**: Works seamlessly on all devices
- 📂 **Portfolio Integration**: Showcase of projects and skills
- ⏰ **Dynamic Content**: Real-time features like current time display
- 🔄 **Smart UI**: Auto-scrolling chat window with typing indicators
- 🎯 **Organized Information**: Categorized responses for easy navigation
- 🐳 **Easy Deployment**: Containerized with Docker for quick setup

## 🛠️ Tech Stack

### Frontend

- HTML5 for structure
- CSS3 for responsive styling
- JavaScript (ES6+) for interactive features

### Deployment

- Docker for containerization
- Nginx for serving static content
- Alpine Linux base for lightweight container

---

## 📂 Project Structure

```plaintext
Mini-Bot/
├── index.html     # Main application interface
├── style.css      # Responsive styling and themes
├── script.js      # Chat logic and response handling
├── Dockerfile     # Container configuration
└── README.md      # Project documentation
```

## 🚀 Getting Started

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/HPTech4/Mini-Bot.git
cd Mini-Bot
```

2. Open `index.html` in your browser to start chatting!

### Docker Deployment 🐳

1. Build the Docker image:

```bash
docker build -t mini-bot .
```

2. Run the container:

```bash
docker run -d -p 8080:80 mini-bot
```

3. Access the bot at `http://localhost:8080`
   Build the Docker image:

bash
Copy code
docker build -t mini-bot .
Run the container:

bash
Copy code
docker run -d -p 8080:80 mini-bot
Open in your browser:

arduino
Copy code
http://localhost:8080

## � Available Commands

| Command    | Description                   | Example Responses                        |
| ---------- | ----------------------------- | ---------------------------------------- |
| `help`     | View all available categories | Shows main menu with all options         |
| `about`    | Learn about HPTech            | Background, experience, goals            |
| `skills`   | Technical capabilities        | Programming languages, tools, frameworks |
| `projects` | View portfolio work           | Current and past projects                |
| `contact`  | Get contact information       | Email, portfolio, social links           |
| `time`     | Check current time            | Shows server time                        |

## 👤 Author

**HPTech (Alimi Azeez Opeyemi)**

- 🌐 Portfolio: [hptech.netlify.app](https://hptech.netlify.app)
- 📧 Email: alimiazeez4@gmail.com
- 🐱 GitHub: [@HPTech4](https://github.com/HPTech4)

## 📄 License

This project is open source and available under the MIT License.

---

Made with ❤️ by HPTech
