function doTask(taskName, callback) {
  console.log(`Starting the task: ${taskName}`);
  setTimeout(() => {
    console.log(`Task "${taskName}" is completed.`);
    callback(); // Invoke the callback function
  }, 1000);
}

function onTaskComplete() {
  console.log("All tasks are done!");
}

// Call the doTask function with a task name and a callback
doTask("Read File", onTaskComplete);
