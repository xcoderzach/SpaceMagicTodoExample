var ListView = require("views/list_view") 
  , NewTaskView = require("./new")

  , TaskView = ListView.define("TaskView")                                            
  .action("change input[type=checkbox]", function(event, element) {
    var done = element.is(":checked")
    this.model.set({ done: done })
    this.model.save()
  })
  .action("click .upVote", function(event, element) {
    var votes = this.model.get("votes")
    this.model.set({ votes: votes + 1 })
    this.model.save()
  }) 
  .action("click .downVote", function(event, element) {
    var votes = this.model.get("votes")
    this.model.set({ votes: votes - 1 })
    this.model.save()
  })
 

module.exports = ListView.define("TaskListView")                                            
  .template("/templates/tasks/list.html") 
  .subView("#newTaskForm", NewTaskView)
  .singleView(TaskView) 
