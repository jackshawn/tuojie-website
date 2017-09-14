var createEl = function (option) {
	var el = document.createElement(option.el || 'div');
	if(option.attr){
		for(var l = 0; l < option.attr.length; l++){
			el.setAttribute(option.attr[l].key, option.attr[l].value);
		}
	}
	if(option.content){
		el.innerText = option.content;
	}
	if(option.child){
		for(var k = 0; k < option.child.length; k++){
			el.appendChild(option.child[k])
		}
	}
	return el;
};

module.exports = createEl;