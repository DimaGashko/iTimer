;(function(){
   "use strict"

   var DEF = {
      
   }
   
   function Base() {
      this._createParametrs();
      this._getElements();
      this._initEvents();
      
      this._init();
   }
   
   var fn = Base.prototype;
   
   fn.nextPeriod = function() {}
   fn._initEvents = function() {}
   fn._init = function() {
      this._ofRunning();
      
   }
   
   fn.start = function() {
      if (this._running) return 'return'; //Ответ, для методов, которые разширяют данный
      this._onRunning();
      
      requestAnimationFrame(function tik() {      
         if (this._running) {
            this.nextPeriod();
            requestAnimationFrame(tik.bind(this));
         } else {
            this._stop(); //чтобы правильно остановить таймер 
               //если просто изменят this._running
         }
      }.bind(this));
      
      this.els.stop.focus();
      return this;
   }
   
   fn.stop = function() {
      if (!this._running) return 'return';
      this._running = false;
      
      return this;
   }
   
   fn._stop = function() {
      if (this._running) return 'return';
      
      this._ofRunning();
      this.els.start.focus();
   }
   
   fn.toggleStart = function() {
      (this._running) ? 
         this.stop() : this.start();
         
      return this;
   }
   
   fn.reset = function() {
      if (this._running) return 'return';
      
      this.h = 0;
      this.m = 0;
      this.s = 0;
      this.ms = 0;
      
      this.renderTime();
      
      return this;
   }
   
   fn.renderTime = function() {
      this.els.time.innerHTML = this.getTime();
   }
   
   fn.formatTime = function(value, length) {
      return ('000' + value).slice(-length);
   }
   
   fn._onRunning = function() {
      this.els.root.classList.remove(`${this.iTimerType}-paused`);
      this.els.root.classList.add(`${this.iTimerType}-running`);
      
      this._running = true;
   }
   
   fn._ofRunning = function() {
      this.els.root.classList.remove(`${this.iTimerType}-running`);
      this.els.root.classList.add(`${this.iTimerType}-paused`);
      
      this._running = false;
   }
   
   //error: start -> changeType -> changeType -> start
   fn.setDisable = function(val) {
      this._disable = !!val;
      
      return this;
   }
   
   fn.toggleDisable = function() {
      this.setDisable(!this._disable);
      
      return this;
   }
   
   fn._getElements = function() {
      this.els.iTimerRoot = document.querySelector('.iTimer');
      
      var r = this.els.root = this.els.iTimerRoot
         .querySelector(`.${this.iTimerType}`);
      
      this.els.time = r.querySelector(`.${this.iTimerType}__time`);
      
      this.els.reset = this.els.root.querySelector(`.${this.iTimerType}__reset`);
      this.els.start = this.els.root.querySelector(`.${this.iTimerType}__start`);
      this.els.stop = this.els.root.querySelector(`.${this.iTimerType}__stop`);
   }
   
   fn._createParametrs = function() {
      this.els = {};
      
      this.h = 0;
      this.m = 0;
      this.s = 0;
      this.ms = 0;
      
      this._running = false;
      this._disable = false;
   }
   
   fn.getTime = function() {
      return this.h + ':'
         + this.formatTime(this.m, 2) + ':'
         + this.formatTime(this.s, 2) + '.'
         + this.formatTime(this.ms, 3);
   }
   
   fn.iTimerType = '';
   
   window.ITimerBase = Base;
}());