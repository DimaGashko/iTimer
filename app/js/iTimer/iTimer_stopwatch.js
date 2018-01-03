;(function(){
	"use strict"
	
	function Stopwatch() {
		ITimerBase.apply(this, arguments);
	}
	
	var fnBase = ITimerBase.prototype;
	Stopwatch.prototype = Object.create(fnBase);
	
	var fn = Stopwatch.prototype;
	fn.constructor = Stopwatch;
	
	fn.nextPeriod = function() {
		this.updateTime();
		this.renderTime();
	}
	
	fn.start = function() {
		var answer = fnBase.start.apply(this, arguments);
		if (answer === 'return') return;
		
		if (!this.timeStart) {
			this.timeStart = Date.now();
		}
		
		if (this.startPaused) {
			this.timeStart += Date.now() - this.startPaused;
		}
	}
	
	fn._stop = function() {
		var answer = fnBase._stop.apply(this, arguments);
		if (answer === 'return') return;
		
		this.startPaused = Date.now();
	}
	
	fn.lap = function() {
		if (!this._running || this._disable) return;
		
		console.log('lap');
	}
	
	fn.reset = function() {
		var answer = fnBase.reset.apply(this, arguments);
		if (answer === 'return') return;
		
		this.timeStart = 0;
		this.startPaused = 0;
	}
	
	fn.updateTime = function() {
		var date = new Date(Date.now() - this.timeStart);
		
		this.h = date.getUTCHours();
		this.m = date.getUTCMinutes();
		this.s = date.getUTCSeconds();
		this.ms = date.getUTCMilliseconds();
	}
	
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
		
		document.addEventListener('keydown', (event) => {
			switch (event.keyCode) {
				
				case this.KEYS.start: 
					event.preventDefault();
					break;
					
				case this.KEYS.lap:
					if (event.altKey) event.preventDefault();
					break;
					
				case this.KEYS.reset:
					if (event.altKey) event.preventDefault();
					break;
					
				default: break;
			}
		});
	}
	
	fn._getElements = function() {
		fnBase._getElements.apply(this, arguments);
		
		this.els.lap = this.els.root.querySelector('.iTimer__lap');
	}
	
	fn._createParametrs = function() {
		fnBase._createParametrs.apply(this, arguments);
		
		this.timeStart = 0;
		this.startPaused = 0;
	}
	
	fn.iTimerType = 'stopwatch';
	
	fn.KEYS = {
		start: 32,
		lap: 76,
		reset: 82,
	}
	
	window.Stopwatch = Stopwatch;
}());