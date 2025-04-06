@echo off
echo === Setting up the application ===

echo.
echo === WARNING: Running migrations fresh will DELETE ALL DATA ===
echo Press Ctrl+C to cancel or any key to continue...
pause > nul

echo === Running migrations fresh with seed ===
php artisan migrate:fresh --seed

echo === Storage link ===
php artisan storage:link

echo === Clearing all caches ===
php artisan cache:clear
php artisan view:clear
php artisan route:clear
php artisan config:clear
php artisan optimize:clear

echo === Reloading autoloader ===
composer dump-autoload

echo.
echo === Setup completed successfully! ===
echo.
echo Admin credentials:
echo Email: admin@admin.com
echo Password: admin
echo.
echo Press any key to start the server or Ctrl+C to exit...
pause > nul

echo === Starting development server ===
php artisan serve 