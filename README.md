# CRUDE Note Creator Web App API

> Back_end
This is a Express JS REST API for creating, reading, updating and deleting notes that runs in Node JS Runtime.
This project uses Mongo DB (NoSQL Database) for the Data DB and Upstash Redis for the RateLimiting middleware.

> Front_end
React JS was used for the components along with Tailwind CSS with DaisyUI for easier CSS Class creation and manipulation.

> Hosting
Render was used for the deployment and hosting of the Web App.

## 🔧 Features
- Create a note
- Get all Notes (except for the deleted)
- Get a note using their respective ID
- Update a note's title and content
- Basic validation middlewares such as CORS and Upstash redis for Spam Protection.

---

## 🚀 Tech Stack

- Mongo DB
- Express JS
- React JS
- Node JS


## 📦 Installation
```bash
git clone https://github.com/JshMarkCastillo-GHdev/mern-notes-app.git
```

```bash
npm run build
```

```bash
npm run start
```

Server runs by default on: (Change depending on your machine)
```arduino
http://localhost:5001 
```

## 📡 API Endpoints

- GET /notes
- GET /notes/:id
- DELETE /notes/:id
- POST /notes body example:
{
  "title": "My Note",
  "content": "This is a test note"
}

- PUT /notes/:id body example:
{
  "title": "My Note",
  "content": "This is a test note"
}
