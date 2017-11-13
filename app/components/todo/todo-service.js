function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/josheigen'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	this.getTodos = function (draw) {
		$.get(baseUrl)
			.then(function (res) { // <-- WHY IS THIS IMPORTANT????
				
			})
			.fail(logError)
	}

	this.addTodo = function (todo) {
		// WHAT IS THIS FOR???
		$.post(baseUrl, todo)
			.then(function(res){ // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?

				console.log('To-Do successfully added!')
				todoList.push(todo)
				for()
				todoList.lastIndexOf["id"] = todoList.
				console.log(todoId)
				return res
			}) 
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		for(i=0;i<todoList.length;i++){
			todoId = todoList[i].id
			return todoId
		}
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		if(todo.completed){
			todo.completed = false
		} else {
			todo.completed = true
		}
		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(todoId)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.fail(logError)
	}

	this.removeTodo = function () {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		
	}

}
