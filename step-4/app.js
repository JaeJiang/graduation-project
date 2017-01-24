import bar from './bar'
import Vue from 'vue'
import AV from 'leancloud-storage'

var APP_ID = 'F3UkuDlal71UvF2zwUY3GoVP-gzGzoHsz';
var APP_KEY = 'v3vSOioD6OEfHgo9VuG3QMpQ';
AV.init({
	appId: APP_ID,
	appKey:APP_KEY
});




var app = new Vue({
	el: '#app',
	data:{
		actionType:'signUp',
		formDate:{
			username:'',
			password:''
		},
		newTodo:'',
		todoList:[],
		currentUser: null,
	},

	created:function(){
		window.onbeforeunload = ()=>{
			let dataString = JSON.stringify(this.todoList)
			window.localStorage.setItem('myTodos',dataString)
		}

		let oldDataString = window.localStorage.getItem('myTodos')
		let oldData = JSON.parse(oldDataString)
		this.todoList = oldData || []

		//this.currentUser = this.getCurrentUser();
	},


	methods:{
		addTodo: function(){
			this.todoList.push({
				title: this.newTodo,
				createdAt: new Date(),
				done:false
			})
			this.newTodo = ''
		},

		removeTodo:function(todo){
			let index = this.todoList.indexOf(todo)
			this.todoList.splice(index,1)
		},

		signUp: function(){
			let user = new AV.User();
			user.setUsername(this.formDate.username);
			user.setPassword(this.formDate.password);
			user.signUp().then( (loginedUser) => {
				this.currentUser = this.getCurrentUser()
			}, (error) =>  {
				alert('注册失败')
			});
		},



		login: function () {
			AV.User.logIn(this.formDate.username,this.formDate.password).then(function(loginUser){
				this.currentUser = this.getCurrentUser()
			},(error) => {
				alert('登录失败')
			});
		},
		getCurrentUser: function() {
			let {id, createdAt, atteributes:{username}} = AV.User.current()
			return {id, username, createdAt}
		}else{
			return null
		}
		},
		logout: function () {
			AV.User.logOut()
			this.currentUser = null
			window.location.reload()
		}
	}
})

bar();