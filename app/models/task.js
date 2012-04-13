var Document = require("LiveDocument/lib/document")

module.exports = Document.define("Task")
  .key("title", {min: 1})
  .key("votes")
  .key("done") 
