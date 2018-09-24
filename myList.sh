#!/bin/bash
# myList - Team TBD

# get the filepath (modified from stackoverflow)
file=$(readlink -f "$0")
filepath=$(dirname "$file")

# create the html file
cat /dev/null > index.html
echo "<html>" >> index.html
echo "<head>" >> index.html
echo "<title>List of Top Level Directory Elements</title>" >> index.html
echo "</head>" >> index.html

echo "<body>" >> index.html

echo "<h1>List of Top Level Directory Elements</h1>" >> index.html

# create the table and populate it with directory contents
echo "<table border = 1>" >> index.html
echo "<tr><td>Files:</td></tr>" >> index.html
for i in `ls $filepath`; 
do :
 echo "<tr><td>" >> index.html
 echo $i >> index.html 
 echo "</td></tr>" >> index.html
done
echo "</table>" >> index.html
echo "</body>" >> index.html

echo "<br>" >> index.html
echo "<br>" >> index.html
echo "<br>" >> index.html
echo "<br>" >> index.html
echo "<br>" >> index.html
echo "<br>" >> index.html

echo "<footer>Written by Team TBD</footer>" >> index.html
echo "</html>" >> index.html

# open in browser
xdg-open index.html
