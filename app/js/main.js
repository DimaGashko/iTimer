;(function(){
	"use strict"
	
	var els = {
		openHelp: document.querySelector('.header__help'),
		openSet: document.querySelector('.header__set'),
		
		selectStopwatch: document.querySelector('.iTimer__selectStopwatch'),
		selectTimer: document.querySelector('.iTimer__selectTimer'),
		
		iTimer: document.querySelector('.iTimer'),
		stopwatch: document.querySelector('.iTimer__stopwatch'),
		timer: document.querySelector('.iTimer__timer'),
	}
	
	//help
	els.openHelp.addEventListener('click', () => {
		alert('Помощь будет добавлена в скором времени!');
	});
	
	//set
	els.openSet.addEventListener('click', () => {
		alert('В данный момент настройки недоступны.');
	});
	
	//select type iTimer
	var timers = {};
	
	selectType(localStorage.iTimerType || 'stopwatch');
	
	els.selectStopwatch.addEventListener('click', () => {
		selectType('stopwatch');
	});
	
	els.selectTimer.addEventListener('click', () => {
		selectType('timer');
	});
	
	function selectType(type) {
		var prevType = localStorage.iTimerType;
		
		els.iTimer.classList.remove(`iTimer-${prevType}`);
		els.iTimer.classList.add(`iTimer-${type}`);
		
		if (timers[prevType]) timers[prevType].setDisable(true);
		
		if (timers[type]) timers[type].setDisable(false);
		else createTimer(type);
		
		localStorage.iTimerType = type;
	}	
	
	function createTimer(type) {
		if (type === 'stopwatch') {
			timers.stopwatch = window.s = new Stopwatch();
		} else if (type === 'timer') {
			//timers.timer = window.t = new Timer();
			console.log('На данный момент таймер недоступен.');
		} else {
			console.log('Таймер не найден');
		}
	}
	
}());