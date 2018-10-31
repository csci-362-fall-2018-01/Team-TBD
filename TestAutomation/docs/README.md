# Requirements
- Ubuntu 14.04
- The following Google Libraries:
    - Blockly Library
        - git clone https://github.com/google/blockly.git
    - Closure Library 
        - git clone https://github.com/google/closure-library.git
        - Rename to <i>closure-library</i> and place in same directory as blockly

# Getting the Project to Run the Script
- git clone https://github.com/csci-362-fall-2018-01/Team-TBD.git
- cd Team-TBD
- cd TestAutomation
- ./scripts/runAllTests.sh
- The results will open in default browser. 

# Test Case Formatting
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
