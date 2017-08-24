@ECHO OFF
SET LOCALDIR=C:\WEB\WEBFILES\IYKEDAIRO\Techie
CD %LOCALDIR%
xcopy C:\Web\WEBFILES\config %LOCALDIR%\.git\config /G /Y

cmdkey /delete:git:https//github.com
git init
git config --system --unset credential.helper
git config credential.helper 'store'
git config --local user.name iykedairo
git config --local  user.password iykesMan22
git config --local user.email okeysajogwuoke@gmail.com
git remote add Local https://github.com/iykedairo/web.git
git remote set-url --add Local https://github.com/iykedairo/web.git
git pull Local master --allow-unrelated-histories
git remote -v

git config -l
PAUSE
