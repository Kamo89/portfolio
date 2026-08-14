#!/bin/bash
cd "$(dirname "$0")" || exit 1

echo "==================================="
echo "  SitesByKamo — Development Server"
echo "==================================="
echo ""

# Install dependencies if node_modules is missing
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
  echo ""
fi

echo "🚀 Starting development server..."
echo ""
npx vite dev
