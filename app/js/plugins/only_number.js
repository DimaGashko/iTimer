;(function(){
   "use strict"
   
   /**
    * Позволяет писать в текстовых полях только цифры
   */
   function onlyNumber(el, max = Infinity) {
      el.addEventListener('keyup', () => {
         if (el.value === '') return;
         el.value = onlyNumber.getCorrect(el.value, max);
      });
      
      el.addEventListener('blur', () => {
         el.value = onlyNumber.getCorrect(el.value, max);
      });
   }
   
   onlyNumber.getCorrect = function(curVal, max = Infinity) {
      var val = curVal.replace(/\D/g, '');
      var maxLen = (max != Infinity) ? 
         (max + '').length : Infinity;
      
      if (val.length > maxLen) {
         val = val.slice(0, maxLen);
      }
      
      val = parseInt(val);
      
      if (isNaN(val) || val < 0) val = 0;
      else if (val > max) val = max;
      
      return '' + val;
   }
   
   window.onlyNumber = onlyNumber;
   
}());