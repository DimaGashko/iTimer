;(function(){
   "use strict"
   
   /**
    * Позволяет писать в текстовых полях только цифры
   */
   function onlyNumber(el, max = Infinity) {
      el.addEventListener('keyup', () => {
         el.value = onlyNumber.gecCorrect(el.value, max);
      });
      
      el.addEventListener('change', () => {
         el.value = onlyNumber.gecCorrect(el.value, max);
      });
      
      el.addEventListener('blur', () => {
         el.value = onlyNumber.gecCorrect(el.value, max);
      });
   }
   
   onlyNumber.getCorrect = function(curVal, max = Infinity) {
      var val = curVal.replace(/\D/g, '');
      
      if (val > (max + '').length) {
         val = val.slice((max + '').length);
      }
      
      val = parseInt(val);
      
      if (isNaN(val) || val < 0) val = 0;
      else if (val > max) val = max;
      
      if (realVal !== val && realVal != '') el.value = val;
   }
   
   window.onlyNumber = onlyNumber;
   
}());