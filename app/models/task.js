var Document = require("LiveDocument/lib/document")

var Task = module.exports = Document.define("Task")
  .key("title", {min: 1})
  .key("votes")
  .key("done") 
  .afterSave(function() {
    //cull some chats, to keep the number down
    Task.find({}, function(tasks) {
      var num = tasks.length - 50
      tasks.sortBy("createdAt", true)
      console.log(num)
      for(i = 0 ; i < num ; i++) {
        tasks.at(tasks.length - (i+1)).remove()
      }
    })
  }) 
