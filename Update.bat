cls
xcopy C:\WEB\Commit C:\WEB\WEBFiles\IykeDairo\web /S /G /Y
cd "C:\WEB\WEBFiles\IykeDairo"
REM mkdir IykeDairo
git init
REM set GIT_CURL_VERBOSE=1
REM git config user.name iykedairo
REM git config user.email okeysajogwuoke@gmail.com
REM git config --global user.name iykedairo
REM git clone https://github.com/iykedairo/web.git
REM git remote add Local https://github.com/iykedairo/web.git
REM git remote set-url Local ssh://git@github.com/iykedairo/web.git
REM git remote set-url --add Local https://github.com/iykedairo/web.git



REM git pull Local master --allow-unrelated-histories



git remote -v
git add --all :/
git commit -am "Auto Commits"
git push Local master
