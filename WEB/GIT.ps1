REM cd "C:\WEB\WEB"
cls
git init
set GIT_CURL_VERBOSE=1
git config user.name iykedairo
git config user.email okeysajogwuoke@gmail.com
git config --global user.name iykedairo
git clone https://github.com/iykedairo/Lib.git
git remote add Local https://github.com/iykedairo/Lib.git
REMgit remote set-url Local ssh://git@github.com/iykedairo/Lib.git

git remote set-url --add Local https://github.com/iykedairo/Lib.git

git remote -v
git add --all :/
git commit -am "Auto Commits"
git pull Local master --allow-unrelated-histories
git push Local master
