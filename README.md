# CSCI 362 Software Engineering

Repository for Team TBD:

- Sarah Nicholson
- Peyton Hartzell
- Mykal Burris
- Kelly Ding

Contains student-created test materials for developers.google.com/blockly/

## Short Description

This project is designed to utilize a bash script called "runAllTest.sh"

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
    - Checks if name has special characters and returns the name.
    - Blockly's core
    - function safeName()
    - '%$@ )<.*'
    - '%$@ )<.*'
