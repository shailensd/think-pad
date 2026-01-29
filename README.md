# ThinkPad - Notes Management Application

A full-stack MERN (MongoDB, Express, React, Node.js) application for creating, managing, and organizing notes with a modern, responsive interface and built-in rate limiting.

## Features

- 📝 **Create & Manage Notes** - Create, read, update, and delete notes with ease
- 🎨 **Modern UI** - Beautiful gradient design with Tailwind CSS and DaisyUI components
- ⚡ **Fast & Responsive** - Built with React 19 and Vite for optimal performance
- 🔒 **Rate Limiting** - Upstash Redis-powered rate limiting (100 requests per 60 seconds)
- 📱 **Mobile Friendly** - Responsive design that works on all devices
- 🔔 **Toast Notifications** - Real-time feedback with react-hot-toast
- 🚀 **Production Ready** - Optimized build with single-server deployment

## Tech Stack

### Backend
- **Node.js** & **Express.js** - Server and API
- **MongoDB** with **Mongoose** - Database and ODM
- **Upstash Redis** - Distributed rate limiting
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React 19** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Axios** - HTTP client
- **Lucide React** - Icon library
- **React Hot Toast** - Notification system

## Project Structure

```
ThinkPad/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js              # MongoDB connection
│   │   │   └── upstash.js         # Upstash rate limiter config
│   │   ├── controllers/
│   │   │   └── notesControllers.js # Note CRUD operations
│   │   ├── middleware/
│   │   │   └── rateLimiter.js     # Rate limiting middleware
│   │   ├── models/
│   │   │   └── Note.js            # Note schema
│   │   ├── routes/
│   │   │   └── notesRoutes.js     # API routes
│   │   └── server.js              # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NavBar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesNotFound.jsx
│   │   │   └── RateLimitedUI.jsx
│   │   ├── lib/
│   │   │   ├── axios.js           # Axios instance
│   │   │   └── utils.js
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
└── package.json
```

## Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local or Atlas)
- **Upstash Redis** account
- **npm** or **yarn**

## Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# Server
PORT=5001
NODE_ENV=development

# MongoDB
MONGO_URI=your_mongodb_connection_string

# Upstash Redis
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ThinkPad
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the `backend/` directory
   - Add your MongoDB and Upstash credentials

4. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

5. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

## Development

### Run Backend Server
```bash
cd backend
npm run dev
```
Server will start on `http://localhost:5001`

### Run Frontend Dev Server
```bash
cd frontend
npm run dev
```
Frontend will start on `http://localhost:5173`

## Production Deployment

### Build for Production
```bash
npm run build
```
This will:
1. Install all dependencies
2. Build the frontend for production
3. Output static files to `frontend/dist`

### Start Production Server
```bash
npm start
```
The server will serve the frontend and API from the same port (default: 5001)

## API Endpoints

| Method | Endpoint      | Description           |
|--------|---------------|-----------------------|
| GET    | `/api/notes`  | Get all notes         |
| GET    | `/api/notes/:id` | Get note by ID     |
| POST   | `/api/notes`  | Create a new note     |
| PUT    | `/api/notes/:id` | Update note by ID  |
| DELETE | `/api/notes/:id` | Delete note by ID  |

## Rate Limiting

The application implements rate limiting using Upstash Redis:
- **Limit**: 100 requests per 60 seconds
- **Algorithm**: Sliding window
- **Scope**: Applied globally to all API requests

When rate limit is exceeded, users will see a friendly rate-limited UI.

## Database Schema

### Note Model
```javascript
{
  title: String (required),
  content: String (required),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## Features in Detail

### Note Management
- View all notes on the homepage with card-based layout
- Create new notes with title and content
- View individual note details
- Edit existing notes
- Delete notes with confirmation

### User Interface
- Dark gradient background with vibrant accents
- Responsive navigation bar
- Toast notifications for user actions
- Loading states and error handling
- Empty state when no notes exist

## Scripts

### Root Level
- `npm run build` - Build for production
- `npm start` - Start production server

### Backend
- `npm start` - Start server
- `npm run dev` - Start server with nodemon (auto-reload)

### Frontend
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

ISC

## Support

For support, please open an issue in the repository.


