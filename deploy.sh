set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Nowy334/Covid-19-tracker.git master:gh-pages

cd -