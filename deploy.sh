#!/bin/bash

# Scribify Landing Page Deployment Script

echo "🚀 Preparing Scribify landing page for deployment..."

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing git repository..."
    git init
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy Scribify landing page - $(date '+%Y-%m-%d %H:%M:%S')"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No git remote found. Please add your GitHub repository:"
    echo "   git remote add origin https://github.com/yourusername/your-repo.git"
    echo "   Then run: git push -u origin main"
else
    echo "⬆️  Pushing to GitHub..."
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully pushed to GitHub!"
        echo ""
        echo "🌐 Next steps:"
        echo "1. Go to netlify.com"
        echo "2. Connect your GitHub repository"
        echo "3. Deploy with these settings:"
        echo "   - Build command: npm run build"
        echo "   - Publish directory: out"
        echo "4. Configure your custom domain"
        echo ""
        echo "📄 See NETLIFY_DEPLOYMENT.md for detailed instructions"
    else
        echo "❌ Failed to push to GitHub. Please check your remote URL and try again."
    fi
fi

echo "🎉 Deployment preparation complete!"