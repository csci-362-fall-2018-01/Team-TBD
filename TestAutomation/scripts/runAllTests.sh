#!/bin/bash
# Team TBD

# check if temp directory is empty. If not, remove files.
DIR="temp/"
if [ "$(ls -A $DIR)" ]; 
then
	echo "Removing all files from temp"
	rm temp/*
	echo "Removed files"
else
	echo "No files to remove"

fi
	
# load basic html
#while read LINE; do
#	echo "$LINE" >> temp/output.html
#done < "style/style.css"

# create the html file
echo "<html>
  <head>
    <meta charset='utf-8'>
    <title>Unit Tests for Blockly - Team TBD</title>
    <script src='../../../blockly-master/blockly_uncompressed.js'></script>
    <script>goog.require('goog.testing.jsunit');</script>
  </head>" >> temp/output.html

echo "<body>
    <script src='../project/src/index.js'></script>" >> temp/output.html

# loops through all test cases in the directory.
for filename in testCases/*.txt; do
	i="${filename//[^0-9]/}"
	echo "Performing test $i."
	# create an array and populate it with contents of testCase file
	ARRAY=()
	while read LINE; do
		ARRAY+=("$LINE")
	done < "$filename"

# creating table
	echo "<table border='1px'><tr>
	<td>${ARRAY[0]}</td>
	<td>${ARRAY[1]}</td>
	<td>${ARRAY[2]}</td>
	<td>${ARRAY[3]}</td>
	<td>${ARRAY[4]}</td>
	<td>${ARRAY[5]}</td></tr>" >> temp/output.html

	# running actual test and getting the output
	#cd project/src
	OUTPUT=$((../project/src/index.js) ${ARRAY[2]} ${ARRAY[3]})
	echo "<td>$OUTPUT</td>" >> temp/output.html
	
# closing table
echo "</table>" >> temp/output.html
done

echo "</body>" >> temp/output.html
echo "</html>" >> temp/output.html

# open in browser
xdg-open temp/output.html
echo "Opening browser"
