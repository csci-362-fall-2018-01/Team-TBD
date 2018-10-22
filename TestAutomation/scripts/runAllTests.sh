#!/bin/bash
# Team TBD

# check if temp directory is empty. If not, remove files.
DIR="temp/"
if [ "$(ls -A $DIR)" ]; 
then
	echo "Removing all files from temp"
	rm temp/*
else
	echo "No files to remove"
	
# load basic html
while read LINE; do
	echo "$LINE" >> temp/output.html
done

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
	echo "<tr>
	<td>${ARRAY[0]}</td>
	<td><a name='"${ARRAY[1]}"'></a></td>
	<td>${ARRAY[2]}</td>
	<td>${ARRAY[3]}</td>
	<td>${ARRAY[4]}</td>" >> temp/output.html
	fi

	# running actual test and getting the output
	cd testCasesExecutables/
	OUTPUT=$((insert testFile here) ${ARRAY[2]} ${ARRAY[3]})
	echo "<td>$OUTPUT</td>" >> ../temp/output.html
	fi
done
	
# closing table
echo "</table>" >> temp/output.html

# open in browser
xdg-open index.html