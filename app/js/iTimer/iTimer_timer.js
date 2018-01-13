;(function(){
   "use strict"
   
   function Timer() {
      ITimerBase.apply(this, arguments);
      
      console.log('Timer created!');
   }
   
   var fnBase = ITimerBase.prototype;
   Timer.prototype = Object.create(fnBase);
   
   var fn = Timer.prototype;
   fn.constructor = Stopwatch;
   
   fn.nextPeriod = function() {
      this.updateTime();
      this.renderTime();
   }
   
   fn._init = function() {
      if (this._running) return this;
      fnBase._init.apply(this, arguments);
      
      this.showSet();
   }
   
   fn.start = function() {
      if (this._running) return this;
      this.saveTime();
      
      this.allTime = this.getAllTime(); 
      console.log(this.allTime);
      
      fnBase.start.apply(this, arguments);
      
      return this;
   }
   
   fn.stop = function() {      
      if (!this._running) return this;
      fnBase.stop.apply(this, arguments);
      
      this.saveTime();
      
      return this;
   }
   
   fn._stop = function() {
      if (this._running) return this;
      fnBase._stop.apply(this, arguments);
      
   }
   
   
   fn.reset = function() {
      fnBase.reset.apply(this, arguments);
      
      return this;
   }
   
   fn.updateTime = function() {
      
   }
   
   fn.getAllTime = function() {
      return this.h*60*60*1000 
         + this.m*60*1000 
         + this.s*1000 
         + this.ms;
   }
   
   fn.readSetTime = function() {
      this.h = +this.els.set.h.value;
      this.m = +this.els.set.m.value;
      this.s = +this.els.set.s.value;
      this.ms = +this.els.set.ms.value;
   }
   
   fn.writeSetTime = function() {
      this.els.set.h.value = this.h;
      this.els.set.m.value = this.m;
      this.els.set.s.value = this.s;
      this.els.set.ms.value = this.ms;
   }
   
   fn.showSet = function() {
      this.els.root.classList.add('timer-set');
   }
   
   fn.hideSet = function() {
      this.els.root.classList.remove('timer-set');
   }
   
   fn.saveTime = function() {
      this.hideSet();
      this.readSetTime();
      this.renderTime();
   }
   
   fn.cancelSet = function() {
      this.hideSet();
   }
   
   fn.editTime = function() {
      this.stop();
      this.writeSetTime();
      this.showSet();
   }
   
   fn._initEvents = function() {
      this.els.save.addEventListener('click', () => {
            this.saveTime();
      });
      
      this.els.cancel.addEventListener('click', () => {
         this.cancelSet();
      });
      
      this.els.edit.addEventListener('click', () => {
         this.editTime();
      });
      
      this.els.start.addEventListener('click', () => {
         if (this._disable) return;
         this.start();
      });
      
      this.els.stop.addEventListener('click', () => {
         if (this._disable) return;
         this.stop();
      });
      
      this.els.reset.addEventListener('click', () => {
         if (this._disable) return;
         
         this.reset();
         this.writeSetTime();
         this.editTime();
      });
      
      document.addEventListener('keyup', (event) => {
         if (this._disable) return; 
         
         switch (event.keyCode) {
            case this.KEYS.cancel: 
               this.cancelSet();
               break;
               
            case this.KEYS.start: 
               event.preventDefault();
               this.toggleStart();
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
         if (this._disable) return;
         
         switch (event.keyCode) {
            
            case this.KEYS.start: 
               event.preventDefault();
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
      var r = this.els.root;
      
      this.els.save = r.querySelector('.timer__save');
      this.els.edit = r.querySelector('.timer__edit');
      this.els.cancel = r.querySelector('.timer__cancel');
      
      var set = this.els.set = {};
      set.h = r.querySelector('.timer__seth');
      set.m = r.querySelector('.timer__setm');
      set.s = r.querySelector('.timer__sets');
      set.ms = r.querySelector('.timer__setms');
   }
   
   fn._createParametrs = function() {
      fnBase._createParametrs.apply(this, arguments);
      
      this.allTime = 0 //Оставшееся время в миллисекундахж
   }
   
   fn.iTimerType = 'timer';
   
   fn.KEYS = {
      start: 32,
      reset: 82,
      cancel: 27,
   }
   
   fn._tmpls = {
         
         
      
   }
   
   window.Timer = Timer;
}());