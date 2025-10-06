# Deployment Guide

## Project Structure
- **Frontend**: React app built to `frontend/build`
- **Backend**: Node.js/Express server in `backend/`
- **Database**: MongoDB (local or Atlas)

## Quick Deploy

### 1. Build the Project
```bash
npm run build
```

### 2. Start Production Server
```bash
npm start
```

## Platform Deployments

### Heroku
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=your-mongodb-uri
   heroku config:set JWT_SECRET=your-jwt-secret
   ```
5. Deploy: `git push heroku main`

### Netlify (Frontend only)
1. Build: `npm run build`
2. Deploy `frontend/build` folder to Netlify
3. Set redirects in `public/_redirects`

### Railway
1. Connect GitHub repo
2. Set environment variables
3. Deploy automatically

### Render
1. Connect GitHub repo
2. Set build command: `npm run build`
3. Set start command: `npm start`

## Environment Variables
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: JWT signing secret
- `NODE_ENV`: Environment (production/development)

## Local Testing
```bash
# Build and start
npm run build
npm start

# Access at http://localhost:5000
```