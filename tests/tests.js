describe("ITimerBase", () => {
	var fn = ITimerBase.prototype;
	
	describe("fn.formatTime(value, length)", () => {
		var formatTime = fn.formatTime;
		
		describe("Length: 1", () => {
			it("formatTime(0, 1) => '0'", () => {
				assert.strictEqual(formatTime(0, 1), '0');
			});
			it("formatTime(5, 1) => '5'", () => {
				assert.strictEqual(formatTime(5, 1), '5');
			});
		});
		
		describe("Length: 2", () => {
			it("formatTime(0, 2) => '00'", () => {
				assert.strictEqual(formatTime(0, 2), '00');
			});
			it("formatTime(5, 2) => '05'", () => {
				assert.strictEqual(formatTime(5, 2), '05');
			});
			it("formatTime(29, 2) => '29'", () => {
				assert.strictEqual(formatTime(29, 2), '29');
			});
		});
		
		describe("Length: 3", () => {
			it("formatTime(0, 3) => '000'", () => {
				assert.strictEqual(formatTime(0, 3), '000');
			});
			it("formatTime(5, 3) => '005'", () => {
				assert.strictEqual(formatTime(5, 3), '005');
			});
			it("formatTime(29, 3) => '029'", () => {
				assert.strictEqual(formatTime(29, 3), '029');
			});
			it("formatTime(291, 3) => '291'", () => {
				assert.strictEqual(formatTime(291, 3), '291');
			});
		});

	});

});

describe("onlyNumber", () => {
	var f = onlyNumber.getCorrect;
		
   it("onlyNumber('0', 59) => '0'", () => {
      assert.strictEqual(f('0', 59), '0');
   });
   it("onlyNumber('1', 59) => '1'", () => {
      assert.strictEqual(f('1', 59), '1');
   });
   it("onlyNumber('12', 59) => '12'", () => {
      assert.strictEqual(f('12', 59), '12');
   });
   it("onlyNumber('123', 59) => '12'", () => {
      assert.strictEqual(f('123', 59), '12');
   });
   it("onlyNumber('123456', 59) => '12'", () => {
      assert.strictEqual(f('123456', 59), '12');
   });
   it("onlyNumber('60', 59) => '59'", () => {
      assert.strictEqual(f('60', 59), '59');
   });
   it("onlyNumber('-10', 59) => '10'", () => {
      assert.strictEqual(f('-10', 59), '10');
   });
   it("onlyNumber('-', 59) => '0'", () => {
      assert.strictEqual(f('-', 59), '0');
   });
   it("onlyNumber('asdf', 59) => '0'", () => {
      assert.strictEqual(f('asdf', 59), '0');
   });
   it("onlyNumber('-60', 59) => '59'", () => {
      assert.strictEqual(f('-60', 59), '59');
   });
   it("onlyNumber('10a', 59) => '10'", () => {
      assert.strictEqual(f('10a', 59), '10');
   });
   it("onlyNumber('-10a', 59) => '10'", () => {
      assert.strictEqual(f('-10a', 59), '10');
   });
   it("onlyNumber('-60asdg', 59) => '10'", () => {
      assert.strictEqual(f('-60asdf', 59), '59');
   });
   
});


















