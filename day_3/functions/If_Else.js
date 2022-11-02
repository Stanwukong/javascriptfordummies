function currentTime() {
	min = Date().getMinutes();
	if (min < 10) min = "0" + min;
	return Date().getHours() + ":" + min;
  }