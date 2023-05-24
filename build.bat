rmdir /S /Q dist
call npm i
::git submodule update --init --recursive
::git submodule update --recursive --remote
call npm run build angular2-toaster
cd dist\angular2-toaster
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:RelGarrido/angular-toaster.git master:npm