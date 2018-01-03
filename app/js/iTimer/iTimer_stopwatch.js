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
	
	fn.nextPeriod = function() {
		this.h++;
		console.log(this.h);
	}
	
	fn.lap = function() {
		if (!this._running || this._disable) return;
		
		console.log('lap');
	}
	
	fn.reset = function() {
		fnBase.reset.apply(this, arguments);
	}
	
	fn._getElements = function() {
		fnBase._getElements.apply(this, arguments);
		
		this.els.lap = this.els.root.querySelector('.iTimer__lap');
	}
	
	fn.iTimerType = 'stopwatch';
	
	fn.KEYS = {
		start: 32,
		lap: 76,
		reset: 82,
	}
	
	window.Stopwatch = Stopwatch;
}());