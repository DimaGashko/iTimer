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
			it("formatTime(29, 1) => '29'", () => {
				assert.strictEqual(formatTime(29, 1), '29');
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
			it("formatTime(291, 2) => '291'", () => {
				assert.strictEqual(formatTime(291, 2), '291');
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
			it("formatTime(2910, 3) => '2910'", () => {
				assert.strictEqual(formatTime(2910, 3), '2910');
			});
		});

	});

});