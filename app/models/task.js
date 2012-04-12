var Document = require("LiveDocument/lib/document")

module.exports = Document.define("Task")
  .key("title")
  .key("votes")
  .key("done") 
