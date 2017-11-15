function TodoService() {
	this.todos = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/josheigen'

	function logError(err) {
		console.error(err)
	}

	var id = 0


	this.getTodos = function getTodos(cb) {
		if (!cb || typeof cb != 'function') { return console.error('WOah I need a cb to run') }
		// first task is to request the data from the server ASYNC
		// the data from the server
		// give the controller what it wants
		$.get(baseUrl)
			.then(res => {
				// second task is to update the local todos array with 
				todos = res
				cb(todos)
			})
			.fail()
	}


	this.addTodo = function (name, getTodos) {
		if (!name || !getTodos || typeof getTodos != 'function') { return console.error('Unable to add new task', 'bad parameters', name, getTodos) }
		var todo = {
			name: name,
			completed: false
		}
		$.post(baseUrl, todo)
			.then(getTodos)
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId) {

		for (i = 0; i < todos.length; i++) {
			todoId = todos[i].id
			return todoId
		}

		if (todo.completed) {
			todo.completed = false
		} else {
			todo.completed = true
		}

		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(todoId)
		})
			.then(res => { })
			.fail(logError)
	}

	this.removeTodo = function removeTodo(index, getTodos) {

		$.ajax({
			url: baseUrl + '/' + index,
			method: 'DELETE'
		})
			.then(getTodos)
			.fail(logError)
	}

}
