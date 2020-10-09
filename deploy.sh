#!/usr/bin/env bash
parcel build src/index.html --public-url ./ &&
cd dist &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@gitee.com:huang-haotian/gastly.git &&
git push -u origin master -f
cd -