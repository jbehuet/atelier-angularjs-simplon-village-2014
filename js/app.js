angular
	.module('app',['ngRoute'])
	.controller("mainController", mainController)
	.service("Messages", messagesService)
	.config(routes);