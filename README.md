# NIOS Website - Detailed Setup Guide

A comprehensive educational website for the National Institute of Open Schooling (NIOS) built with Next.js, React, Tailwind CSS, and MongoDB.

## Features

- 🎓 Course Management
- 📝 Admission System
- 📚 Study Materials
- 🛍️ Online Store
- 📰 Blog Section
- 👥 User Management
- 🔒 Admin Dashboard
- 📱 Responsive Design

## Tech Stack

- **Frontend**: Next.js 14, React 19, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Authentication**: NextAuth.js
- **Payment Processing**: Stripe
- **Deployment**: Vercel

## Prerequisites

### Step 1: Install Node.js
1. Visit [Node.js official website](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer
4. Open terminal/command prompt
5. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install Git
1. Visit [Git official website](https://git-scm.com/)
2. Download the installer for your OS
3. Run the installer
4. Open terminal/command prompt
5. Verify installation:
   ```bash
   git --version
   ```

### Step 3: Install MongoDB
#### Option A: Local MongoDB Installation

##### For macOS:
1. Install Homebrew (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Install MongoDB using Homebrew:
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   ```

3. Create data directory:
   ```bash
   sudo mkdir -p /data/db
   sudo chown -R $(whoami) /data/db
   ```

4. Start MongoDB service:
   ```bash
   brew services start mongodb-community
   ```

5. Verify MongoDB is running:
   ```bash
   mongosh
   ```

#### Option B: MongoDB Atlas (Cloud)
1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Try Free"
3. Create an account or sign in
4. Create a new project
5. Build a new cluster (choose FREE tier)
6. Set up database access:
   - Go to Database Access
   - Click "Add New Database User"
   - Create username and password
7. Set up network access:
   - Go to Network Access
   - Click "Add IP Address"
   - Add your IP or allow access from anywhere (0.0.0.0/0)
8. Get your connection string:
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string

## Project Setup

### Step 1: Clone the Repository
1. Open terminal/command prompt
2. Navigate to your desired directory:
   ```bash
   cd /path/to/your/projects
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nios-website.git
   ```
4. Navigate to project directory:
   ```bash
   cd nios-website
   ```

### Step 2: Install Dependencies
1. Install project dependencies:
   ```bash
   npm install
   ```
2. Install development dependencies:
   ```bash
   npm install --save-dev @types/node @types/react @types/react-dom @types/mongoose
   ```

### Step 3: Environment Setup
1. Create `.env` file in root directory:
   ```bash
   touch .env
   ```
2. Open `.env` file in text editor
3. Add the following variables:
   ```env
   MONGODB_URI=mongodb://localhost:27017/nios-website
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   STRIPE_SECRET_KEY=your-stripe-secret-key
   STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
   ```
4. Replace values with your actual credentials

### Step 4: Database Configuration
#### For Local MongoDB:
1. Start MongoDB service:
   ```bash
   mongod
   ```
2. Open new terminal window
3. Connect to MongoDB:
   ```bash
   mongo
   ```
4. Create database:
   ```bash
   use nios-website
   ```

#### For MongoDB Atlas:
1. Update `.env` file with your Atlas connection string:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/nios-website?retryWrites=true&w=majority
   ```

### Step 5: Development Server
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open browser and visit:
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin panel pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   └── page.tsx           # Homepage
├── components/            # Reusable components
├── lib/                   # Utility functions
├── models/                # MongoDB models
└── styles/                # Global styles
```

## Deployment to Vercel

### Step 1: Prepare for Deployment
1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

### Step 2: Deploy
1. Login to Vercel:
   ```bash
   vercel login
   ```
2. Deploy project:
   ```bash
   vercel
   ```
3. Follow the prompts:
   - Set up and deploy
   - Link to existing project (if any)
   - Set project name
   - Set root directory (./)
   - Set build command (npm run build)
   - Set output directory (.next)
   - Set development command (npm run dev)

### Step 3: Configure Environment Variables
1. Go to Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add all variables from your `.env` file
5. Click "Save"

## Admin Panel Setup

### Step 1: Create Admin User
1. Start the development server
2. Visit registration page
3. Fill in the registration form
4. Submit the form

### Step 2: Update User Role
1. Connect to MongoDB:
   ```bash
   mongo
   ```
2. Select database:
   ```bash
   use nios-website
   ```
3. Update user role:
   ```bash
   db.users.updateOne({ email: "admin@example.com" }, { $set: { role: "admin" } })
   ```

### Step 3: Access Admin Panel
1. Log in with admin credentials
2. Visit `/admin` route
3. You should see the admin dashboard

## Troubleshooting

### MongoDB Connection Issues
1. Check if MongoDB is running:
   ```bash
   mongod --version
   ```
2. Verify connection string in `.env`
3. Check network access (for Atlas)
4. Try connecting with MongoDB Compass

### TypeScript Errors
1. Clear TypeScript cache:
   ```bash
   rm -rf .next
   ```
2. Reinstall type definitions:
   ```bash
   npm install --save-dev @types/node @types/react @types/react-dom @types/mongoose
   ```

### Build Errors
1. Clear Next.js cache:
   ```bash
   rm -rf .next
   ```
2. Clear npm cache:
   ```bash
   npm cache clean --force
   ```
3. Reinstall dependencies:
   ```bash
   rm -rf node_modules
   npm install
   ```

## Support

For support:
1. Check the [GitHub Issues](https://github.com/your-username/nios-website/issues)
2. Email support@nios-website.com
3. Create a new issue in the repository

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 