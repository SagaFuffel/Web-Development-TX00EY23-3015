let todosArray = [];
let nextId = 1;

function getAll() {
    return todosArray;
}

if (require.main === module) {
    console.log("getAll called:", getAll());
}

/*{
    "task": "Buy groceries",
    "completed": false,
    "dueDate": "2025-08-30"
}*/


function addOne(task, completed, dueDate) {
    // Check if any parameter is empty or undefined
    if (!task || !completed || !dueDate) {
        return false;
    }

    const newToDo = {
        id: nextId++,  // Assigns a unique id and increments it
        task,
        completed,
        dueDate
    };

    todosArray.push(newToDo); // Adds the new to-do to the array
    return newToDo; // Returns the added to-do object
}

function findById(id) {
    const numericId = Number(id); // Converts the ID to a number
    const toDo = todosArray.find(item => item.id === numericId); // Finds the car with the matching ID
    return toDo || false; // Returns the todo item or false if not found
}

function updateOneById(id, updatedData) {
    const toDo = findById(id);
    if (toDo) {
        // Update properties only if they are provided in updatedData
        if (updatedData.task) toDo.task = updatedData.task;
        if (updatedData.completed) toDo.completed = updatedData.completed;
        if (updatedData.dueDate) toDo.dueDate = updatedData.dueDate;
        return toDo; // Returns the updated to-do object
    }
    return false; // Returns false if the tdo thing
    //  with the provided ID is not found
}

function deleteOneById(id) {
    const toDo = findById(id);
    if (toDo) {
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(toDo => toDo.id !== Number(id)); // Filters out the car with the matching ID
        return todosArray.length < initialLength; // Returns true if the array length decreased, indicating successful deletion
    }
    return false; // Returns false if the  watodo things not found
}

if (require.main === module) {
    // Add todos
    let result = addOne("Buy groceries", false, "2025-08-30");
    console.log(result);
    result = addOne("Wash dishes", true, "2026-09-23");
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { task: "Buy groceries", completed: true, dueDate: "2025-08-30" }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}

const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;