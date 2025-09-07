@echo off
echo Installing dependencies...
npm ci

echo Building the application...
npx ng build --configuration production

echo Build completed. Check the dist folder for output.
pause