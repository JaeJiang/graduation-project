import bar from './bar'
import Vue from 'vue'

var app = new Vue({
	el: '#app',
	data:{
		newTodo:'',
		todoList:[]
	},

	created:function(){



		window.onbeforeunload = ()=>{
			let dataString = JSON.stringify(this.todoList)
			window.localStorage.setItem('myTodos',dataString)
		}

		let oldDataString = window.localStorage.getItem('myTodos')
		let oldData = JSON.parse(oldDataString)
		this.todoList = oldData || []


	},


	methods:{

		addTodo: function(){
			var date = new Date();
			var time = date.getFullYear() + "年" + (date.getMonth()+1) + "月" + date.getDate() + "日" + date.getHours() + "时";

			this.todoList.push({
				title: this.newTodo,
				createdAt: time,
				done:false
			})
			this.newTodo = ''
		},

		removeTodo:function(todo){
			let index = this.todoList.indexOf(todo)
			this.todoList.splice(index,1)
		},



		//getTime: function (t) {
		//	function setT(t) {
		//		return t < 10 ? '0' + t : t;
		//	}
        //
		//	t = t.length == 10 ? t + '000' : t;
		//	let time = new Date(Number(t));
		//	let year   = time.getFullYear(),
		//		month  = time.getMonth() + 1,
		//		date   = time.getDate(),
		//		Hour   = time.getHours(),
		//		Second = time.getSeconds(),
		//		Minu   = time.getMinutes();
		//	return year + '-' + setT(month) + '-' + setT(date) + ' ' + setT(Hour) + ':' + setT(Minu) + ':' + setT(Second);
		//}
	}
		
})

