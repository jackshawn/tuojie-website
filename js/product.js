require('../css/product.scss')

var tabs = document.getElementsByClassName('tab');
var arrow = document.getElementsByClassName('tab-arrow');
var panel = document.getElementsByClassName('panel');
var panelProdcut = document.getElementsByClassName('panel-product');
var productWrap = document.getElementsByClassName('product-wrap');
var productDetail = document.getElementsByClassName('product-detail');
for (var i = 0; i < tabs.length; i++) {
    (function (index) {
        tabs[index].onclick = function () {
            console.log(index);
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].className = 'tab';
                arrow[j].className = 'tab-arrow';
                panel[j].className = 'panel clearfix';
            }
            arrow[index].className = 'tab-arrow arrow-active';
            panel[index].className = 'panel panel-active clearfix';
            this.className = 'tab tab-active';
	        productWrap[0].style.display = 'block';
	        for (var m = 0; m < productDetail.length; m++) {
		        productDetail[m].className = 'product-detail';
	        }
        }
    })(i)
}
for (var k = 0; k < panelProdcut.length; k++) {
    (function (index) {
        panelProdcut[index].onclick = function () {
            console.log(index);
            productWrap[0].style.display = 'none'
            for (var m = 0; m < productDetail.length; m++) {
                productDetail[m].className = 'product-detail';
            }
            productDetail[index].className = 'product-detail product-active';
        }
    })(k)
}