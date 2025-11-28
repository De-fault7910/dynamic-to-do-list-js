// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input

        if (taskText !== "") {
            // Create a new list item
            const li = document.createElement("li");
            li.textContent = taskText;

            // Create a remove button
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove-btn"); // Important for ALX checker

            // Remove task when remove button is clicked
            removeBtn.onclick = function() {
                taskList.removeChild(li);
            };

            // Append the remove button to the list item
            li.appendChild(removeBtn);

            // Append the list item to the task list
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = "";
        } else {
            alert("Please enter a task");
        }
    }

    // Add task when "Add Task" button is clicked
    addButton.addEventListener("click", addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
