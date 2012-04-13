var View = require("views/view") 
  , Task = require("../../models/task")
  , _ = require("underscore")

module.exports = View.define("NewTaskView")
  .action("submit #newTaskForm", function(event, element) {
    var input = element.find("input[type=text]")
    var title = input.val()
    input.val("")

    Task.create({ title: title, votes: 0, done: false })

    event.preventDefault()
  })
