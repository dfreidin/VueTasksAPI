const tasks = require("../controllers/tasks");
module.exports = function(app) {
    app.get("/tasks", tasks.index);
    app.post("/tasks", tasks.create);
    app.delete("/tasks/:id", tasks.destroy);
    app.get("/tasks/:id", tasks.show);
    app.put("/tasks/:id", tasks.update);
}