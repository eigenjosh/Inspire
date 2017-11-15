function TodoController() {

	var todoService = new TodoService()
	var todosElem = document.getElementById('todo-list')
	var todosFormElem = document.getElementById('add-todo-form')
	var showButton = document.getElementById('show-button')
	var todosCount = document.getElementById('count')




	function getTodos() {
		todoService.getTodos(drawTodos)
	}


	function drawTodos(todos) {
		var template = ''
		template += `
		<p>${todos.length}</p>
		`
		todosCount.innerHTML = template
		for (i = 0; i < todos.length; i++) {
			var todo = todos[i];
			console.log(todo)
			template += `
			<div class="col-md-3">
			<div class="panel panel-info">
				<div class="panel-heading">
					<i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.todoController.removeTodo(${i})"></i>
					<h4>${todo.name}</h4>
				</div>
				<div class="panel-body text-center">
				</div>
			</div>
		</div>
			`
		}
		todosElem.innerHTML = template
	}

	this.addTodoFromForm = function addTodoFromForm(event) {
		event.preventDefault()
		var name = event.target.name.value
		todoService.addTodo(name, getTodos)
		todosFormElem.classList.toggle('hidden', true)
	}
	var formstate = false

	this.showAddTodoForm = function showAddTodoForm() {
		if (formstate) {
			showButton.innerText = 'Add Task'
			showButton.className = 'btn btn-info'
			todosFormElem.classList.add('hidden')
			formstate = false
		} else {
			showButton.innerText = 'Cancel'
			showButton.className = 'btn btn-danger'
			todosFormElem.classList.remove('hidden')
			formstate = true
		}
	}

	var completed = false

	this.toggleTodoStatus = function toggleTodoStatus(index) {
		if (completed) {
			showButton.innerText = 'Mark as Complete'
			showButton.className = 'btn btn-info'
			todosFormElem.classList.add('hidden')
			completed = false
		} else {
			showButton.innerText = 'Cancel'
			showButton.className = 'btn btn-danger'
			todosFormElem.classList.remove('hidden')
			completed = true
		}

	}

	this.removeTodo = function removeTodo(index) {
		todoService.removeTodo(index)
		getTodos()

	}

	getTodos()
}