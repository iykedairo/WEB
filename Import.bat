@ECHO OFF
SET /P USERNAME="User name: "
CLS
SET USERSERVER=localhost
SET /P USERSERVER="Optional web server: "
CLS
SET /P DATABASE="Your database: "
CLS
SET /P FULLPATHTOFILE="Table file or its full path: "
mysql -h %USERSERVER% -u %USERNAME% -D %DATABASE% -p < %FULLPATHTOFILE%
PAUSE