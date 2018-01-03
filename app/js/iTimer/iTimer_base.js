﻿;(function(){
	"use strict"
	
	function Base() {
		this._createParametrs();
		this._getElements();
		this._initEvents();
	}
	
	var fn = Base.prototype;
	
	fn.nextPeriod = function() {}
	fn._initEvents = function() {}
	
	fn.start = function() {
		if (this.running) return;
		this._onRunning();
		
		requestAnimationFrame(function tik() {
			
			this.nextPeriod();
			
			if (this.running) {
				requestAnimationFrame(tik.bind(this));
			}
		}.bind(this));
	}
	
	fn.stop = function() {
		this._ofRunning();
	}
	
	fn.toggleStart = function() {
		(this.running) ? 
			this.stop() : this.start();
	}
	
	fn.renderTime = function() {
		this.els.h.innerHTML = this.formatTime(this.h, 2);
		this.els.m.innerHTML = this.formatTime(this.m, 2);
		this.els.s.innerHTML = this.formatTime(this.s, 2);
		this.els.ms.innerHTML = this.formatTime(this.ms, 2);
	}
	
	fn.formatTime = function(value, length) {
		var strValue = value + '';
		
		if (strValue.length >= length) return strValue;
		return (new Array(length).join('0') + strValue).slice(-length);
	}
	
	fn._onRunning = function() {
		this.els.iTimerRoot.classList.remove('iTimer-paused');
		this.els.iTimerRoot.classList.add('iTimer-running');
		
		this.running = true;
	}
	
	fn._ofRunning = function() {
		this.els.iTimerRoot.classList.add('iTimer-paused');
		this.els.iTimerRoot.classList.remove('iTimer-running');
		
		this.running = false;
	}
	
	fn._getElements = function() {
		this.els.iTimerRoot = document.querySelector('.iTimer');
		
		var r = this.els.root = this.els.iTimerRoot
			.querySelector(`.iTimer__${this.iTimerType}`);
		
		this.els.h = r.querySelector('iTimer__h');
		this.els.m = r.querySelector('iTimer__m');
		this.els.s = r.querySelector('iTimer__s');
		this.els.ms = r.querySelector('iTimer__ms');
	}
	
	fn._createParametrs = function() {
		this.els = {};
		
		this.h = 0;
		this.m = 0;
		this.s = 0;
		this.ms = 0;
		
		this.startTime = 0;
		this.pausedTime = 0;
		
		this.running = false;
	}
	
	fn.iTimerType = '';
	
	window.ITimerBase = Base;
}());