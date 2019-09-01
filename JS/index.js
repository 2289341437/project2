// 主js
// 
$(function(){
	$('.info-content').load('./pages/home.html')
	$('.info-left li').click(function(){
		//this->li DOM
		var title = $(this).text().trim();
		console.log(title);
		switch (title) {
			case '首页':
				$('.info-content').load('./pages/home.html')
				break;
			case '栏目管理':
				$('.info-content').load('./pages/category-manage.html')
				break;
			case '资讯管理':
				$('.info-content').load('./pages/info-manage.html')
				break;
			case '用户管理':
				$('.info-content').load('./pages/user-manage.html')
				break;
			default:
				// statements_def
				break;
		}
	})
})