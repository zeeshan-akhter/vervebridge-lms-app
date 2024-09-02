# 🍳LMS Project

## Description

this is a lms project, that i have build while learning full stack development with my mentor. in this project i have build from scratch lots of feature like authentication, user management, course management, lecture management, lecture dashboard & admin dashboard and more...


## Project Structure

The project follows a well-organized structure:

```
LMS-APP/
├── server/
│   ├── Config/
│   │   ├── database.js 
│   ├── Controllers/
│   │   ├── userController.js
│   │   ├── courseController.js
│   │   ├── paymentController.js
│   │   ├── otherController.js
│   ├── Middlewares/
│   │   ├── Auth.js
│   │   ├── catchAsyncErrors.js
│   │   ├── Error.js
│   │   ├── multer.js
│   ├── Models/
│   │   ├── User.js
│   │   ├── Course.js
│   │   ├── Payment.js
│   │   ├── Stats.js
│   ├── Routes/
│   │   ├── userRoutes.js
│   │   ├── courseRoutes.js
│   │   ├── paymentRoutes.js
│   │   ├── otherRoutes.js
│   ├── Utils/
│   │   ├── dataUri.js
│   │   ├── errorHandler.js
│   │   ├── sendEmail.js
│   │   ├── SendToken.js
│   ├── server.js
│   ├── App.js
│   ├── .env
│   ├── package.json
│
├── client/
│   ├── src/
│   │   ├── assests/
│   │   ├── components/
│   │   ├── Redux/ 
│   │   ├── App.js/
│   │   ├── colorModeSwitcher.js
│   │   ├── index.css/
│   │   ├── index.j/
│   │   ├── ...
│   ├── .env
│   ├── .env.example.js
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   ├── ...
└──
```

## Features

- 💡 **User Authentication**: Sign up, log in, change password, and reset password via email.
- 🙋 **User Profile**: Edit profile details, view profile information.
- 📚 **Course Management**: Admin can create, edit, and delete courses.
- 📝 **Lecture Management**: Admin can add, edit, and delete lectures within courses.
- 🔒 **Subscription**: Users can enroll in courses by purchasing a 1-year subscription.
- 🎥 **Lecture Dashboard**: Display course lectures, play videos, and view lecture descriptions.

## API Endpoints

### User Routes

- `POST /register`: Register a new user.
- `POST /login`: Log in a user.
- `GET /logout`: Log out a user.
- `GET /me`: Getting user profile info.
- `POST /reset`: Sending email on user for reset password.
- `POST /reset/:resetToken`: User resetting the password.
- `POST /change-password`: User can change password using old and new password.
- `POST /update/:id`: User can update their profile.

### Course Routes

- `GET /courses`: Get all courses.
- `POST /courses`: Create a new course (Admin only).
- `GET /courses/:id`: Get lectures for a specific course.
- `PUT /courses/:id`: Update course details (Admin only).
- `DELETE /courses/:id`: Delete a course (Admin only).

### Payment Routes

- `GET /razorpay-key`: Get Razorpay API key.
- `POST /subscribe`: Buy a subscription.
- `POST /verify`: Verify a subscription.
- `POST /unsubscribe`: Cancel a subscription.
- ...

### Miscellaneous Routes

- `POST /contact`: Contact us.
- `GET /admin/stats/users`: Get user statistics (Admin only).

## Tech Stack

### Backend

- Node.js
- Express
- MongoDB
- Cors
- bcrypt
- Crypto
- Jsonwebtoken
- Dotenv
- Cookie-Parser
- Multer
- Cloudinary
- Nodemailer
- Razorpay

### Frontend

- **React :** `for creating ui`
- **Tailwind & CSS :** `for styling the element`
- **DaisyUi :** `for creating beautiful drawer`
- **React-Icons :** `for icons` 
- **React-Router :** `for make the different pages`
- **React-Slick :** `for create slider` 
- **React-hot-toast :** `for showing small small toast`
- **React-Redux :** `for use redux with react`
- **Redux Toolkit :** `for managing state in global app`
- **Chart.js :** `for showing chart for admin`
- **React-Chartjs-2 :** for showing chart for admin`

---

## Getting Started

Follow these steps to set up the project on your local machine:

1. Clone the repository:
   ```
   git clone https://github.com/zeeshan-akhter/vervebridge-lms-app.git
   cd LMS
   ```

2. Set up the backend:
   - Navigate to the `backend` folder.
   - Install dependencies: `npm install`
   - Set up environment variables: Create a `.env` file based on `.env.example.js` file.
   - Start the backend server: `npm start`

3. Set up the frontend:
   - Navigate to the client folder: `cd client`
   - Install dependencies: `npm install`
   - Set up environment variables: Create a `.env` file based on `.env.example.js` file.
   - Start the client development server: `npm run dev`

4. Access the application:
   - Open your browser and visit: `http://localhost:5000`

---

_Made with ❤️ by [Zeeshan Akhter](linkedin.com/in/zeeshan-akhter-4b1766216/)_