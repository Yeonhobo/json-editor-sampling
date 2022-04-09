# react-app
Simple react frontend application to test out the json-editor library



# Reason
This project has been started by Benny Craig and Yeonho Jang in order to contribute to the json-editor github repository as of March 25th, 2022. We are contributing to this open source project as a homework for our EECS 481 software engineering class under Professor Wes Weimer. 



# Goal
In response to issue #1139 (https://github.com/json-editor/json-editor/issues/1139), we will implement a feature which allows for (1) json value validations and (2) regex pattern recognition in field dependencies.

(1) 
- If value does not match the regex pattern, alert the user with a message. "Invalid input. Does not match the pattern: REGEX PATTERN"

i.e.)
{
    "ServerName": {
      "type": "string",
      "title": "Server Name",
      "description": "Name of the Server",
      "pattern": "^(AA|BB)-[0-99]{2}$",
      "examples": [
        "AA-01",
        "BB-55"
      ]
    }
}

- In the example above, the value for "ServerName" should always match the pattern described by the regex

(2)
- A field will appear in the UI when certain criteria are met. These criteria are described by regex patterns specified in the "dependencies" property.

i.e.)
"Cloud": {
      "title": "Cloud",
      "type": "string",
      "description": "Cloud in VMM",
      "options": {
        "dependencies": {
          "ServerName": {
            "pattern": "^(AA)-[0-99]{2}$"
          }
        },
        "enum": [
          "one",
          "two"
        ]
      }
    }
- Notice the pattern is a subset of the possible values for the "ServerName" field.



# Record keeping log
- Looked into "dependencies" feature of JSON-Editor. JSON-Editor already supports dependencies which are hardcoded into the JSON Schema


# Next Steps:
- Find "dependencies" in source code -> validator.js
- Read about Validator in Wiki for step 1
    - Figure out if step 1 is already implemented properly (if pattern validation already works)
- learning about how to change a dependency locally: https://whatapalaver.co.uk/npm-dependency