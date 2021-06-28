const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const db = require("./model/");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

function success(res, payload) {
  return res.status(200).json(payload);
}

app.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await db.Task.find({});
    return success(res, tasks);
  } catch (err) {
    next({ status: 400, message: "failed to get tasks" });
  }
});

app.post("/tasks", async (req, res, next) => {
  try {
    const task = await db.Task.create(req.body);
    return success(res, task);
  } catch (err) {
    next({ status: 400, message: "failed to create task" });
  }
});

app.put("/tasks/:id", async (req, res, next) => {
  try {
    const task = await db.Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return success(res, task);
  } catch (err) {
    next({ status: 400, message: "failed to update task" });
  }
});
app.delete("/tasks/:id", async (req, res, next) => {
  try {
    await db.Task.findByIdAndRemove(req.params.id);
    return success(res, "task deleted!");
  } catch (err) {
    next({ status: 400, message: "failed to delete task" });
  }
});

app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request"
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});