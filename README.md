# BeONNEXT CMS

BeONNEXT is a content management system built from scratch, inspired by popular CMS platforms like WordPress. It is designed to be simple, flexible, and easy to use.

## Features

- User authentication and authorization
- Create, read, update, and delete posts
- Create, read, update, and delete pages
- Media management (upload and manage media files)
- Basic category and tag management

## Technologies Used

- Backend: Node.js, Express.js, MongoDB
- Frontend: React.js
- Authentication: JWT (JSON Web Tokens)
- File Upload: Multer
- Validation: express-validator

## Project Structure

```plaintext
BeONNEXT/
├── backend/
│   ├── config/
│   │   └── config.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   ├── pageController.js
│   │   ├── mediaController.js
│   │   └── userController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │   └── validate.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   ├── Page.js
│   │   ├── Media.js
│   │   ├── Category.js
│   │   └── Tag.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   ├── pageRoutes.js
│   │   ├── mediaRoutes.js
│   │   └── userRoutes.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── postService.js
│   │   ├── pageService.js
│   │   ├── mediaService.js
│   │   └── userService.js
│   ├── utils/
│   │   └── logger.js
│   ├── app.js
│   ├── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── Sidebar.js
│   │   │   ├── PostEditor.js
│   │   │   └── MediaLibrary.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── PostPage.js
│   │   │   ├── PagePage.js
│   │   │   ├── MediaPage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   └── DashboardPage.js
│   │   └── App.js
├── .gitignore
└── README.md
