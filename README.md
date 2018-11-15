# CSCI 362 Software Engineering

Repository for Team TBD:

- Sarah Nicholson
- Peyton Hartzell
- Mykal Burris
- Kelly Ding

Contains student-created test materials for developers.google.com/blockly/

## Short Description

This project is designed to utilize a bash script called "runAllTest.sh" that will read through all of the test case files we provide and will run the appropriatly called method with its respective input. Our script will then read the outputs of each test and compare them to the oracle in 

## Requirements

- Ubuntu 14.04
- The following Google Libraries:
    - Blockly Library
        - git clone https://github.com/google/blockly.git
        - Rename to <i>blockly-master</i>
    - Closure Library
        - git clone https://github.com/google/closure-library.git
        - Rename to <i>closure-library</i> and place in same directory as blockly

## Test Case Formatting

- We have two folders that contain test case information used in our script. The text files in the testCases folder contain information on the test cases that is used in the table of the output. The javascript files in the testCaseExecutable folder contain the test cases that will be run. In order to add more tests, you need to add your test cases in both folders.
- Each test case text file must follow a specific format which is outlined below:
- Naming:
    - The name of the file must be testCase followed by a number
    - The extension of the file must be .txt
    - Full file example: testCase01.txt
- File Content:
    - Test Number
    - Requirement
    - Component
    - Method
    - Input
    - Oracle
- Example Test file (testCase01.txt)
    - 1
    - Checks if name is valid and returns a string.
    - Blockly's core
    - safeName()
    - 'fooBar'
    - 'Is Safe Name'
- Each test case javascript file must follow a specific format which is outlined below:
- Naming:
    - The name of the file must be testCase followed by a number
    - The extension of the file must be .js
    - Full file example: testCase01.js
- Example Test file (testCase01.js)
<br><code>////////////////////TEST CASE 1/////////////////////</code><br>
<code>function test_safeName () {</code><br>
<code>var varDB = new Blockly.Names('window,door');</code><br>
<code>assertEquals('Is Safe Name', 'fooBar', varDB.safeName_('fooBar'));</code><br>
<code>}</code>
