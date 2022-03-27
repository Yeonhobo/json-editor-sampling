const Schema = 
{
  "title": "Yeonho is here",
  "type": "object",
  "properties": {

      "First_Name":  {"type": "string"},
      "School_Email":  {"type": "string"},
      "Wusup": {
        "type":  "array",
        "format": "tab",
        "title": "Info about me",
        "items": {
          "type": "object",
          "title": "info#",
          "properties": {
            "School": {"type": "string"},
            "Major": {"type": "string"},
          }
        },
    }
  }
}
module.exports = {Schema: Schema};