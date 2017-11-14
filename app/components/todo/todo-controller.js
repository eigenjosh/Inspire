function TodoController() {

	var todoService = new TodoService()
	var todosElem = document.getElementById('todo-list')
	var todosFormElem = document.getElementById('add-todo-form')
	var showButton = document.getElementById('show-button')




	function getTodos() {

		todoService.getTodos(draw)
	}

	function draw(todos) {
		var template = ''
		for (i = 0; i < todos.length; i++) {
			var todo = todos[i];
			console.log(todo)
			template += `
			<div class="col-md-3">
			<div class="panel panel-info">
				<div class="panel-heading">
					<i class="glyphicon glyphicon-trash pull-right" onclick="app.controllers.todoController.removeTodo(${i}, getTodos)"></i>
					<h2>To-Do:</h2>
				</div>
				<div class="panel-body text-center">
					<h4>${todo.title}</h4>
				</div>
			</div>
		</div>
			`
		}
		todosElem.innerHTML = template
	}

	this.addTodoFromForm = function addTodoFromForm(event) {
		event.preventDefault()
		var form = event.target
		todoService.addTodo(form, getTodos)
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
		if(completed){
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
		todoService.removeTodo(index, getTodos)

	}

	getTodos()

}