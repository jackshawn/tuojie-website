require('../css/contact.scss');
var map = new AMap.Map('contact-map', {
	zoom: 15,
	center: [118.874912, 32.018469],
});
var marker = new AMap.Marker({
	position: [118.874912, 32.018469],
});
marker.setMap(map);
AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView'], function () {
	map.addControl(new AMap.ToolBar());
})
var info = new AMap.InfoWindow({
	content: "南京拓界信息技术有限公司<br>电话: 025-84600004<br>邮箱: support@tuojieinfo.com<br>地址: 南京市秦淮区中国云计算创新基地B栋7层",
	offset: new AMap.Pixel(0, -28)
})
info.open(map, marker.getPosition())