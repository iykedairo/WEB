@echo off
cd "C:\JAVA
git init
git remote add Local https://github.com/michaeliyke/JAVA.git
git add --all :/
git commit -am "Auto Commits"
git pull Local master --allow-unrelated-histories
git push Local master
...