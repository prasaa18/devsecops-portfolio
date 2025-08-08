#!/bin/bash
# Build the Angular project
ng build --configuration production --base-href="/devsecops-portfolio/"

# Copy dist files to docs folder for GitHub Pages
rm -rf docs
cp -r dist/devsecops-portfolio docs

echo "Build complete! Ready for GitHub Pages deployment."