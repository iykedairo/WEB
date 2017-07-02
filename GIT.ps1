cd "C:\WEB\WEBFiles"
mkdir IykeDairo
cd IykeDairo
cls
git init
REM set GIT_CURL_VERBOSE=1
git config user.name iykedairo
git config user.email okeysajogwuoke@gmail.com
REM git config --global user.name iykedairo
git clone https://github.com/iykedairo/web.git
git remote add Local https://github.com/iykedairo/web.git
REM git remote set-url Local ssh://git@github.com/iykedairo/web.git

git remote set-url --add Local https://github.com/iykedairo/web.git

git remote -v
git add --all :/
git commit -am "Auto Commits"
git pull Local master --allow-unrelated-histories
git push Local master
