var ajax = function (url, callback, data) {
	var request = new XMLHttpRequest();
	request.open('POST', url);
	request.send(JSON.stringify(data || {}));
	request.onreadystatechange = function() {
		if (request.readyState===4) {
			if (request.status===200) {
				var data = JSON.parse(request.responseText);
				callback(data)
			} else {
				console.error("发生错误：" + request.status);
			}
		}
	}
};

module.exports = ajax;