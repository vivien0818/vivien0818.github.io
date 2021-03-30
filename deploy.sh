#!/usr/bin/env sh

set -e

yarn build

cd docs/.vuepress/dist

echo 'vivien0818.github.io' > README.md

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/vivien0818/vivien0818.github.io.git master

cd -
