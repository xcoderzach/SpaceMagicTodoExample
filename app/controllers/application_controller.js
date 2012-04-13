var TaskListView = require("../views/tasks/list")
  , Task = require("../models/task")
  , Controller = require("LiveController/lib/live_controller").Controller 

Controller("/", function(app) {
  app.get(function() {
    var tasks = Task.find()
    tasks.sortBy("votes", true)
    this.view = new TaskListView(tasks)
  }) 
})
