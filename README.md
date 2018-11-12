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
    - Closure Library
        - git clone https://github.com/google/closure-library.git
        - Rename to closure-library and place in same directory as blockly

## Test Case Formatting
- Each test case file must follow a specific format which is outlined below
- Naming:
    - The name of the file must be testCase followed by a number
    - The extension of the file must be .txt
    - Full file example: testCase1.txt
- File Content:
    - Test Number
    - Requirement
    - Component
    - Method
    - Input
    - Oracle
- Example Test file (testCase1.txt)
    - 1
    - Checks if name is valid and returns a string.
    - Blockly's core
    - safeName
    - 'fooBar'
    - 'Is Safe Name'
