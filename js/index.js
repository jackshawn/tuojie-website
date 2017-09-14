require('../css/index.scss');

var ajax = require('./ajax.js');

ajax('/tuojie/GetslidePics', function (pics) {
	var list = document.getElementById('banner-container');
	var buttonsContainer = document.getElementById('buttons');
	
	var last = document.createElement('img');
	last.setAttribute('src', pics[pics.length - 1].pic);
	list.appendChild(last);
	
	for(var i = 0;i < pics.length; i++){
		var img = document.createElement('img');
		img.setAttribute('src', pics[i].pic);
		list.appendChild(img);

		var span = document.createElement('span');
		span.setAttribute('index', i + 1 + '');
		span.innerText = i + 1;

		if(i === 0){
			span.setAttribute('class', 'on');
		}
		buttonsContainer.appendChild(span)
	}

	var first = document.createElement('img');
	first.setAttribute('src', pics[0].pic);
	list.appendChild(first);

	picSlideInit(pics, list)
});

var picSlideInit =  function (pics, list) {
	var container = document.getElementById('banner');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;
	var len = pics.length;
	var animated = false;
	var interval = 3000;
	var timer;
	
	function animate (offset) {
		if (offset == 0) {
			return;
		}
		animated = true;
		var time = 300;
		var inteval = 10;
		var speed = offset/(time/inteval);
		var left = parseInt(list.style.left) + offset;
		console.log(left);
		var go = function (){
			if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
				list.style.left = parseInt(list.style.left) + speed + 'px';
				setTimeout(go, inteval);
			}
			else {
				list.style.left = left + 'px';
				if(left>-600){
					list.style.left = -1920 * len + 'px';
				}
				if(left<(-1920 * len)) {
					list.style.left = '-1920px';
				}
				animated = false;
			}
		}
		
		go();
	}

	function showButton() {
		for (var i = 0; i < buttons.length ; i++) {
			if( buttons[i].className == 'on'){
				buttons[i].className = '';
				break;
			}
		}
		buttons[index - 1].className = 'on';
	}

	function play() {
		timer = setTimeout(function () {
			next.onclick();
			play();
		}, interval);
	}
	function stop() {
		clearTimeout(timer);
	}

	next.onclick = function () {
		console.log('clicked')
		if (animated) {
			return;
		}
		if (index === len) {
			index = 1;
		}
		else {
			index += 1;
		}
		animate(-1920);
		showButton();
	}
	
	prev.onclick = function () {
		if (animated) {
			return;
		}
		if (index === 1) {
			index = len;
		}
		else {
			index -= 1;
		}
		animate(1920);
		showButton();
	};

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function () {
			if (animated) {
				return;
			}
			if(this.className == 'on') {
				return;
			}
			var myIndex = parseInt(this.getAttribute('index'));
			var offset = -1920 * (myIndex - index);

			animate(offset);
			index = myIndex;
			showButton();
		}
	}

	container.onmouseover = stop;
	container.onmouseout = play;

	play();

};

ajax('/tuojie/GetNews', function (d) {
	var data = d.data;
	// 左侧新闻
	document.getElementById('news-left-img').setAttribute('src', data[0].pic);
	document.getElementById('news-left-a').setAttribute('href', data[0].link);
	document.getElementsByClassName('news-left-title')[0].innerText = data[0].title;
	document.getElementsByClassName('news-left-title')[0].setAttribute('href', data[0].link);
	document.getElementsByClassName('news-left-detail')[0].innerText = data[0].content.length > 145 ? data[0].content.substr(0, 145) + '...' : data[0].content;
	document.getElementsByClassName('news-left-detail')[0].setAttribute('href', data[0].link);
	// 右侧新闻
	var date = document.getElementsByClassName('news-right-date');
	var title = document.getElementsByClassName('news-right-title');
	var detail = document.getElementsByClassName('news-right-detail');
	for(var j = 0; j < 3; j++){
		var year = document.createElement('div');
		year.setAttribute('class', 'news-date-year');
		date[j].innerText = data[j + 1].time.substr(8, 10);
		year.innerText = data[j + 1].time.substr(0, 7);
		date[j].appendChild(year);
		title[j].innerText = data[j + 1].title;
		title[j].setAttribute('href', data[j + 1].link);
		detail[j].innerText = data[j + 1].content.length > 110 ? data[j + 1].content.substr(0, 110) + '...' : data[j + 1].content;
		detail[j].setAttribute('href', data[j + 1].link);
	}
},{page: 1, pageSize: 4, category: 1});
