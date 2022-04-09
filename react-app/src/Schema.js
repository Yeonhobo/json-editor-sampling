const Schema = 
// {
//   "title": "Yeonho is here",
//   "type": "object",
//   "properties": {

//       "First_Name":  {"type": "string"},
//       "School_Email":  {"type": "string"},
//       "Wusup": {
//         "type":  "array",
//         "format": "tab",
//         "title": "Info about me",
//         "items": {
//           "type": "object",
//           "title": "info#",
//           "properties": {
//             "School": {"type": "string"},
//             "Major": {"type": "string"},
//           }
//         },
//     }
//   }
// }

{
  "title": "An object",
  "type": "object",
  "properties": {
    "fieldOne": {
      "title": "I should be changed to 'foo'",
      "type": "string",
      "enum": ["foo","bar","char"],
      "default": "bar"
    },
    "depender1": {
      "title": "I depend on fieldOne to be 'foo'",
      "type": "string",
      "enum": ["lorem","ipsum"],
      "options": {
        "dependencies": {
          "fieldOne": ["foo", "char"]
        }
      }
    },
    // "depender2": {
    //   "title": "I depend on fieldOne to be 'bar'",
    //   "type": "string",
    //   "enum": ["dolor", "sit"],
    //   "options": {
    //     "dependencies": {
    //       "fieldOne": "bar"
    //     }
    //   }
    // }
  }
}

module.exports = {Schema: Schema};