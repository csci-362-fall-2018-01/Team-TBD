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
#done #< "style/style.css"

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
echo "<table align='center' border='1px'>
<tr>
<th>Test</th>
<th>Requirement</th>
<th>Component</th>
<th>Method</th>
<th>Input</th>
<th>Oracle</th>
<th>Result</th>
</tr>" >> temp/output.html

# loops through all test cases in the directory.
for filename in testCases/*.txt; do
	i="${filename//[^0-9]/}"
	echo "Performing test $i."
	# create array and populate with contents of testCase files
	ARRAY=()
	while read LINE; do
		ARRAY+=("$LINE")
	done < "$filename"

# creating table
	echo "
	<tr><td>${ARRAY[0]}</td>
	<td>${ARRAY[1]}</td>
	<td>${ARRAY[2]}</td>
	<td>${ARRAY[3]}</td>
	<td>${ARRAY[4]}</td>
	<td>${ARRAY[5]}</td></tr>" >> temp/output.html

	# running actual test and getting output
	#cd project/src/
	#OUTPUT=$(index.js ${ARRAY[2]} ${ARRAY[3]})
	#echo "<td>$OUTPUT</td></tr>" >> ../../temp/output.html
	
done

# closing table
echo "</table>" >> temp/output.html
echo "<br><br>" >> temp/output.html
echo "</body>" >> temp/output.html
echo "</html>" >> temp/output.html

# open in browser
xdg-open temp/output.html
echo "Opening browser"
