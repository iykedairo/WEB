@ECHO OFF
SET /P src="Source folder: "
CLS
SET /P dest="Destination folder: "
CLS
SET files=*.*
SET /P files="Files:- Default is *.*"
CLS
ECHO	robocopy src  dest
ECHO 	robocopy src  dest *.* //normal
ECHO 	robocopy src  dest *.* /S //Include all subdirectories;/E -- include but not empty ones
ECHO 	robocopy src  dest *.* //
ECHO	robocopy src  dest *.* /j //use unbuffered I/O better for large files
ECHO	robocopy src  dest *.* /MOVE //copy and move files and folders from src to dest
ECHO	robocopy src  dest *.* /MOV//copy all things and then move files only from src to dest
ECHO	robocopy src  dest *.* /PURGE//After copying, delete files that no more exist in src	
ECHO	robocopy src  dest *.* /XF *.php* *.jpg*//Exclude php and jpg files
ECHO	robocopy src  dest *.* /XD Dir1 Dir2 Dir3//Exclude all the named dirs
ECHO	robocopy src  dest *.* /XO //Exclude older files
ECHO	robocopy src  dest *.* /XN //Exclude newer files
ECHO	robocopy src  dest *.* /XC //Exclude changed files
ECHO	robocopy src  dest *.* /MAX:2000 //Maximum file size is 2000bytes
ECHO	robocopy src  dest *.* /MIN:10000/Maximum file size is 10000byes
ECHO	robocopy src  dest *.* /Log+:C\Texts/Text.file//Log output to named file

ECHO "###############################################################################"
ECHO "#*****************************************************************************#"
ECHO "#*******************  Default: "ROBOCOPY SRC DEST /S /j"  ********************#"
ECHO "#*****************************************************************************#"
ECHO "###############################################################################"
SET /P options="Options: "
CLS
ROBOCOPY %src%  %dest% %files% %options% /S
PAUSE


