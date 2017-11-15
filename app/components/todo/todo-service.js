function TodoService() {
	this.todos = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/josheigen'

	function logError(err) {
		console.error(err)
	}

	var id = 0;

	function Todo(config) {
		this.title = config.title.value
		this.description = config.description.value
		this.id = id++
		this.completed = false
	}

	this.getTodos = function getTodos(draw) {
		var addTodo = addTodo()
		if (!draw || typeof draw != 'function') { return console.error("Hey bro, aren't you supposed to give me, like, a callback or something?") }
		$.get(baseUrl)
			.then(res => {
				todos = res
				draw(todos)
			})
			.fail(addTodo)
	}

	this.getTodo = function getTodo(id) {
		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i];
			if (id === todo.id) {
				return todo
			}
		}
	}

	this.addTodo = function (form, getTodos) {
		if (!form || !getTodos || typeof getTodos != 'function') { return console.error('Unable to add new task', 'bad parameters', form, getTodos) }
		var newTodo = new Todo(form)
		$.post(baseUrl, newTodo)
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
			.then(res=>{})
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
