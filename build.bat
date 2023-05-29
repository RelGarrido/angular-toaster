rmdir /S /Q dist
call npm i
call npm run build angular2-toaster
cd dist\angular2-toaster
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:RelGarrido/angular-toaster.git master:npm
