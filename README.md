# Social Media Backend

This repository contains the backend code for a social media platform built with Node.js, Express.js, and MongoDB. It provides APIs for user authentication, user management, and post management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Deployed URL](#Deployed-URL)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contribution](#contribution)

## Introduction

This project aims to create a backend system for a social media platform where users can register, login, create posts, follow/unfollow other users, like posts, and view their timeline posts.

## Features

- User registration and authentication
- Post creation, deletion, and updating
- Like/unlike posts
- Follow/unfollow users
- View timeline posts
- MongoDB database integration
- RESTful API endpoints
- Error handling and validation

## Folder Structure

```
Social_Media_Backend/
│
├── Config/
│   └── db.js
├── Controllers/
│   ├── AuthController.js
│   ├── PostController.js
│   └── UserController.js
├── Models/
│   ├── postModel.js
│   └── userModel.js
├── Routes/
│   ├── AuthRoute.js
│   ├── PostRoute.js
│   └── UserRoute.js
├── .gitignore
├── README.md
├── index.js
├── package-lock.json
└── package.json
```

## Deployed URL
The backend is deployed at: [Social Media](https://social-media-backend-fpwz.onrender.com);

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ankitkrai07/Social_media_backend.git
   ```

2. Install dependencies:

   ```bash
   cd Social_Media_Backend
   npm install
   ```

3. Set up environment variables:
   
   Create a `.env` file in the root directory and define the following variables:
   
   ```plaintext
   PORT=8080
   mongoURL=<your_mongodb_connection_string>
   ```

## Usage

To start the server, run:

```bash
npm start
```

The server will run on port 8080 by default.

## API Endpoints

- **Authentication**
  - `POST /auth/register`: Register a new user
  - `POST /auth/login`: Login an existing user

- **User Management**
  - `GET /user/:id`: Get user details
  - `PUT /user/:id`: Update user details
  - `DELETE /user/:id`: Delete user account
  - `PUT /user/:id/follow`: Follow a user
  - `PUT /user/:id/unfollow`: Unfollow a user

- **Post Management**
  - `POST /post`: Create a new post
  - `GET /post/:id`: Get post details
  - `PUT /post/:id`: Update post details
  - `DELETE /post/:id`: Delete a post
  - `PUT /post/:id/like`: Like/unlike a post
  - `GET /post/:id/timeline`: Get timeline posts

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- dotenv

## Contribution

[Ankit Kumar](https://github.com/ankitkrai07)

