#!/bin/bash
set -e

echo "Building project..."
npm run build

echo "Deploying to Bluehost..."
rsync -avz --delete \
  --exclude='.well-known' \
  --exclude='cgi-bin' \
  --exclude='ripleyscoggin' \
  --exclude='.DS_Store' \
  -e "ssh -p 2222" \
  ./dist/ \
  gabescog@gabescoggin.com:~/public_html/

echo "Deployment complete."
