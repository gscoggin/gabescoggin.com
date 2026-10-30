#!/bin/bash
# Manual deploy fallback — CI (GitHub Actions) is the primary deploy path.
# Usage: ./deploy.sh        -> prod  (gabescoggin.com, ~/public_html/)
#        ./deploy.sh dev    -> dev   (dev.gabescoggin.com, ~/public_html/dev/)
set -e

TARGET="${1:-prod}"

if [ "$TARGET" = "dev" ]; then
  DEST="gabescog@gabescoggin.com:~/public_html/dev/"
  EXTRA=""
elif [ "$TARGET" = "prod" ]; then
  DEST="gabescog@gabescoggin.com:~/public_html/"
  EXTRA="--exclude=dev"
else
  echo "Unknown target: $TARGET (use 'prod' or 'dev')" >&2
  exit 1
fi

echo "Building project..."
npm run build

echo "Deploying to Bluehost ($TARGET)..."
rsync -avz --delete \
  --exclude='.well-known' \
  --exclude='cgi-bin' \
  --exclude='ripleyscoggin' \
  --exclude='.DS_Store' \
  $EXTRA \
  -e "ssh -p 2222" \
  ./dist/ \
  "$DEST"

echo "Deployment complete ($TARGET)."
