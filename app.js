function powerOfTwo(num) {
	if(num < 2) {
		ans = false;
	}else {
		while(num >= 2) {
			var test = num % 2;
			if(test == 0) {
				num = num / 2;
				ans = true;
			}else {
				num = 0;
				ans = false;
			}
		}
	}

	return ans;

}

console.log(powerOfTwo(100));


