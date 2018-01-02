;(function($){
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
	selectType(localStorage.iTimerType || 'stopwatch');
	
	els.selectStopwatch.addEventListener('click', () => {
		selectType('stopwatch');
	});
	
	els.selectTimer.addEventListener('click', () => {
		selectType('timer');
	});
	
	function selectType(type) {
		els.iTimer.classList.remove(`iTimer-${localStorage.iTimerType}`);
		els.iTimer.classList.add(`iTimer-${type}`);
		
		localStorage.iTimerType = type;
	}
	
}(jQuery));