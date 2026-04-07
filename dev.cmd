@echo off
setlocal
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"
call "C:\Program Files\nodejs\npm.cmd" run dev
