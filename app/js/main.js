;(function(){
   "use strict"
   
   var els = {
      openHelp: document.querySelector('.header__help'),
      openSet: document.querySelector('.header__set'),
      
      selectStopwatch: document.querySelector('.selectStopwatch'),
      selectTimer: document.querySelector('.selectTimer'),
      
      iTimer: document.querySelector('.iTimer'),
      stopwatch: document.querySelector('.iTimer__stopwatch'),
      timer: document.querySelector('.iTimer__timer'),
   }
   
   var KEYS = {
      stopwatch:  83,
      timer:  84,
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
   
   document.addEventListener('keyup', (event) => {
      if (!event.altKey) return;
      
      switch (event.keyCode) {
         
         case KEYS.stopwatch:
            selectType('stopwatch');
            break;
         
         case KEYS.timer:
            selectType('timer');
         
      }
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
         timers.timer = window.t = new Timer();
      } else {
         console.log('Таймер не найден');
      }
   }
   
}());