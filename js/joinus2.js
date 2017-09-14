require('../css/joinus2.scss');
var ajax = require('./ajax.js');
var createEl = require('./createEl.js');
var jobWrap = document.getElementById('job-wrap');

ajax('/tuojie/GetRecruitments', function (jobs) {
	for(var i = 0; i < jobs.length; i += 2){
		jobWrap.appendChild(createEl({
			attr: [{key: 'class', value: 'joinus2 clearfix'}],
			child: (function () {
				var arr = [];
				var pushEl = function (name, detail) {
					arr.push(createEl({
						attr: [{key: 'class', value: 'job-content clearfix'}],
						child: [createEl({
							attr: [{key: 'class', value: 'job-name'}],
							content: name
						}),createEl({
							attr: [{key: 'class', value: 'job-detail'}],
							content: detail
						})]
					}))
				};
				pushEl(jobs[i].position, jobs[i].description);
				if(i + 1 !== jobs.length){
					pushEl(jobs[i + 1].position, jobs[i + 1].description)
				}
				return arr;
			})()
		}))
	}
});

