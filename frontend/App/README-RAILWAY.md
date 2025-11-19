# EventApp Frontend - Railway Deployment

This Angular frontend is configured for deployment on Railway.

## 🚀 Railway Deployment

### Prerequisites
- Git repository connected to Railway
- Railway account

### Deployment Steps

1. **Push your code to GitHub/GitLab**
2. **Connect to Railway:**
   - Go to [railway.app](https://railway.app)
   - Create new project
   - Connect your Git repository
   - Select the `frontend/App` folder as the root directory

3. **Railway will automatically:**
   - Detect Node.js project
   - Install dependencies with `npm install`
   - Build the Angular app with `npm run build`
   - Start the Express server with `npm start`

### Configuration Files

- `server.js` - Express server to serve the Angular app
- `railway.json` - Railway deployment configuration
- `nixpacks.toml` - Build configuration for Railway
- `package.json` - Updated with Railway-specific scripts

### Environment Variables

The app is configured to connect to:
- Backend API: `https://eventify-1-2presentation-production.up.railway.app:8080`

### Build Commands

- **Development:** `npm run dev`
- **Production Build:** `npm run build`
- **Railway Build:** `npm run build:railway`
- **Start Server:** `npm start`

### Port Configuration

The app will run on Railway's assigned port (process.env.PORT) or fall back to port 3000.

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm run build && npm start
```

## 📂 Project Structure

```
App/
├── src/                 # Angular source code
├── dist/               # Built Angular app (auto-generated)
├── server.js           # Express server for production
├── railway.json        # Railway configuration
├── nixpacks.toml      # Build configuration
└── package.json       # Dependencies and scripts
```

## 🌐 API Configuration

The frontend is configured to communicate with the backend at:
`https://eventify-1-2presentation-production.up.railway.app:8080`

Environment files:
- `src/environments/environment.ts` (development)
- `src/environments/environment.prod.ts` (production)

## 🚨 Important Notes

1. Make sure your backend API has CORS configured to accept requests from your Railway frontend domain
2. The Express server handles Angular routing by serving `index.html` for all routes
3. Static assets are served from the `dist/App/browser` directory
4. Railway automatically detects the Node.js environment and runs the build process