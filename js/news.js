require('../css/news.scss');
var ajax = require('./ajax.js');
var createEl = require('./createEl.js');
var pageIndex = location.search.substr(6) || 1;
var newsWrap = document.getElementById('news-wrap');

ajax('/tuojie/GetNews', function (news) {
	// 内容
	for(var j = 0; j < news.data.length; j++){
		newsWrap.appendChild(createEl({
			attr: [{key: 'class', value: 'news-body'}],
			child: [createEl({
				attr: [{key: 'class', value: 'news-pic clearfix'}],
				className: 'news-pic clearfix',
				child: [createEl({
					el: 'img',
					attr: [{key: 'src', value: news.data[j].pic}]
				})]
			}),createEl({
				attr: [{key: 'class', value: 'news-content clearfix'}],
				child: [createEl({
					attr: [{key: 'class', value: 'news-title'}],
					child: [createEl({
						el: 'a',
						content: news.data[j].title,
						attr: [{key: 'href', value: news.data[j].link}, {key: 'target', value: '_blank'}]
					})]
				}),createEl({
					attr: [{key: 'class', value: 'news-detail'}],
					child: [createEl({
						el: 'a',
						content: news.data[j].content.length > 135 ? news.data[j].content.substr(0, 135) + '...' : news.data[j].content,
						attr: [{key: 'href', value: news.data[j].link}, {key: 'target', value: '_blank'}]
					})]
				})]
			})]
		}))
	}

	// 分页
	var page = document.getElementById('news-page');
	for(var i = 1; i <= news.page.totalPage; i++){
		var a = document.createElement('a');
		a.innerText = i;
		if(i === pageIndex * 1){
			a.setAttribute('class', 'active');
		}
		a.setAttribute('href', 'news.html?page=' + i + '#news-wrap');
		page.appendChild(a);
	}
}, {page: pageIndex, pageSize: 8, category: 1});


