@echo off
xcopy H:\AAAPhone C:\WEB\AAAPhone /S /E /G /Y
xcopy C:\WEB\WEB H:\AAAPhone\WEB /S /E /G /Y
xcopy C:\WEB\WEB K:\AAAPhone\WEB /S /E /G /Y
xcopy "C:\WEB\WEB\PT API\calc" C:\WEB\WEB\calc /S /E /G /Y
xcopy "C:\WEB\WEB\calc" C:\WEB\AAAPhone\web\calc /S /E /G /Y

...