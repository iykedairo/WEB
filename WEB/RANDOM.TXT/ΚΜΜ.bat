@echo off
title Activate Microsoft Office 2016 for FREE - Tyler Cobb&cls&echo =====================================&echo #Copyright: bit.ly/tylercobb&echo =====================================&echo.&echo #Supported products:&echo - Microsoft Office Standard/Professional Plus 2016&echo - Office 365 Professional Plus&echo.&echo.
if exist "%ProgramFiles%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles%\Microsoft Office\Office16"
if exist "%ProgramFiles(x86)%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles(x86)%\Microsoft Office\Office16"
for /f %%x in ('dir /b ..\root\Licenses16\proplusvl_kms*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul
for /f %%x in ('dir /b ..\root\Licenses16\proplusvl_mak*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul
echo.&echo ====================================&echo Activating your Office...
cscript //nologo ospp.vbs /inpkey: >nul
set KMS_Sev=KMS.Now.Im
cscript //nologo ospp.vbs /sethst:%KMS_Sev% >nul
echo ------------------------------------&echo.&echo.
cscript //nologo ospp.vbs /act | find /i "successful" && (echo.& echo ====================================== & echo. ) || (echo Sorry! Your version is not supported. & goto theend)
pause
:theend
exit