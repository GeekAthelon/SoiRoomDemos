@echo off

echo Creating dest folder
mkdir ..\dest

echo Zipping HTML files
CScript zipup.vbs

pause Zip complete.
