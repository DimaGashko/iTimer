;(function(){
	"use strict"
	
	function Stopwatch() {
		ITimerBase.apply(this, arguments);
	}
	
	var fnBase = ITimerBase.prototype;
	Stopwatch.prototype = Object.create(fnBase);
	
	var fn = Stopwatch.prototype;
	fn.constructor = Stopwatch;
	
	fn._initEvents = function() {
		this.els.start.addEventListener('click', () => {
			this.start();
		});
		
		this.els.stop.addEventListener('click', () => {
			this.stop();
		});
		
		this.els.lap.addEventListener('click', () => {
			this.lap();
		});
		
		this.els.reset.addEventListener('click', () => {
			this.reset();
		});
		
		document.addEventListener('keyup', (event) => {
			switch (event.keyCode) {
				
				case this.KEYS.start: 
					event.preventDefault();
					this.toggleStart();
					break;
					
				case this.KEYS.lap:
					if (event.altKey) {
						event.preventDefault();
						this.lap();
					}
					break;
					
				case this.KEYS.reset:
					if (event.altKey) {
						event.preventDefault();
						this.reset();
					}
					break;
					
				default: break;
			}
		});
	}
	
	fn.nextPeriod = function() {
		this.h++;
		console.log(this.h);
	}
	
	fn.lap = function() {
		if (!this.running) return;
		
		console.log('lap')
	}
	
	fn.reset = function() {
		console.log('reset')
	}
	
	fn._getElements = function() {
		fnBase._getElements.apply(this, arguments);
		
		this.els.reset = this.els.root.querySelector('.iTimer__reset');
		this.els.start = this.els.root.querySelector('.iTimer__start');
		this.els.lap = this.els.root.querySelector('.iTimer__lap');
		this.els.stop = this.els.root.querySelector('.iTimer__stop');
	}
	
	fn.iTimerType = 'stopwatch';
	
	fn.KEYS = {
		start: 32,
		lap: 76,
		reset: 82,
	}
	
	window.Stopwatch = Stopwatch;
}());