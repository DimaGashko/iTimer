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
	
	var iTimerType = "1";
	
	//help
	els.openHelp.addEventListener('click', () => {
		alert('Помощь будет добавлена в скором времени!');
	});
	
	//set
	els.openSet.addEventListener('click', () => {
		alert('В данный момент настройки недоступны.');
	});
	
	//select type iTimer	
	els.selectStopwatch.addEventListener('click', () => {
		open
	});
	
	els.selectTimer.addEventListener('click', () => {
		
	});
	
	function selectStopwatch() {
		els.iTimer.classList.remove('iTimer-timer');
		els.iTimer.classList.add('iTimer-stopwatch');
	}
	
	function selectTimer() {
		els.iTimer.classList.remove('iTimer-stopwatch');
		els.iTimer.classList.add('iTimer-timer');
	}
	
}(jQuery));