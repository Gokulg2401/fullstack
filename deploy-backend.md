# Deploy Backend to Railway

## Steps:

1. **Go to [Railway.app](https://railway.app)**
2. **Sign up/Login with GitHub**
3. **Click "New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Choose your repository**
6. **Select the `demo` folder as root directory**
7. **Railway will auto-detect Spring Boot and deploy**

## Your backend will be available at:
`https://your-project-name.railway.app`

## Update your React app:
Replace the URL in `.env.production` with your Railway URL.

## Alternative: Use Render (also free)
1. Go to [render.com](https://render.com)
2. Connect GitHub
3. Create new Web Service
4. Select your repo and `demo` folder
5. Build command: `mvn clean package -DskipTests`
6. Start command: `java -jar target/demo-0.0.1-SNAPSHOT.jar`