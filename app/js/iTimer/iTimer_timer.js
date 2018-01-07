(function(){
	'use strict';
	
	function Timer() {
		ITimerBase.apply(this, arguments);
		
		console.log('Timer created!');
	};
	
	var fnBase = ITimerBase.prototype;
	Timer.prototype = Object.create(fnBase);
	
	var fn = Timer.prototype;
	fn.constructor = Stopwatch;
	
	fn.nextPeriod = function() {
		this.updateTime();
		this.renderTime();
	};
	
	fn.start = function() {
		var answer = fnBase.start.apply(this, arguments);
		if (answer === 'return') return this;
		
		return this;
	};
	
	fn.stop = function() {		
		var answer = fnBase.stop.apply(this, arguments);
		if (answer === 'return') return this;
		
		return this;
	};
	
	fn._stop = function() {
		var answer = fnBase._stop.apply(this, arguments);
		if (answer === 'return') return this;
		
		
	};
	
	
	fn.reset = function() {
		var answer = fnBase.reset.apply(this, arguments);
		if (answer === 'return') return this;
		
		
		
		return this;
	};
	
	fn.updateTime = function() {
		
	};
	
	fn._initEvents = function() {
		/*this.els.start.addEventListener('click', () => {
			if (!this._disable) this.start();
		});
		
		this.els.stop.addEventListener('click', () => {
			if (!this._disable) this.stop();
		});
		
		this.els.lap.addEventListener('click', () => {
			if (!this._disable) this.lap();
		});
		
		this.els.reset.addEventListener('click', () => {
			if (!this._disable) this.reset();
		});*/
		
		document.addEventListener('keyup', (event) => {
			if (this._disable) return; 
			
			switch (event.keyCode) {
				
			/*case this.KEYS.start: 
				event.preventDefault();
				this.toggleStart();
				break;
				
			case this.KEYS.reset:
				if (event.altKey) {
					event.preventDefault();
					this.reset();
				}
				break;
				
			default: break;*/
			}
		});
		
		document.addEventListener('keydown', (event) => {
			if (this._disable) return;
			
			switch (event.keyCode) {
				
			/*case this.KEYS.start: 
				event.preventDefault();
				break;
				
			case this.KEYS.lap:
				if (event.altKey) event.preventDefault();
				break;
				
			case this.KEYS.reset:
				if (event.altKey) event.preventDefault();
				break;
				
			default: break;*/
			}
		});
	};
	
	fn._getElements = function() {
		fnBase._getElements.apply(this, arguments);
		
	};
	
	fn._createParametrs = function() {
		fnBase._createParametrs.apply(this, arguments);
		
		
	};
	
	fn.iTimerType = 'timer';
	
	fn.KEYS = {
		start: 32,
		reset: 82,
	}
	
	fn._tmpls = {
			
			
		
	}
	
	window.Timer = Timer;
}());