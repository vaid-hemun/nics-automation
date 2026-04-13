@echo off
echo Starting DigiWebClub Development Environment...
echo.

echo Starting Backend Server...
start "Backend Server" cmd /k "cd my-website-backend && npm run dev"

echo Waiting 3 seconds for backend to start...
timeout /t 3 /nobreak > nul

echo Starting Frontend Server...
start "Frontend Server" cmd /k "npm run dev"

echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo Test Auth: http://localhost:3000/test-auth
echo.
pause
