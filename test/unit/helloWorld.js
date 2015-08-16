describe("Hello world", function() {
	beforeEach(function() {
		this.addMatchers({
			toBeDivisibleByTwo: function() {
				var list = this.actual.split(' ');
				return (list.length % 2) === 0;
			},
			wordsToBeEqualTo: function(number) {
				var list = this.actual.split(' ');
				return list.length  === number;
			}
		});
	});

	it("says hello", function() {
		expect(helloWorld()).toEqual("Hello world!");
	});

	 it("says world", function() {
		expect(helloWorld()).toContain("world");
	});

	it('is divisible by 2', function() {
		expect(helloWorld()).toBeDivisibleByTwo();
	});

	it('is divisible by 2', function() {
		expect(helloWorld()).wordsToBeEqualTo(2);
	});
  
});
