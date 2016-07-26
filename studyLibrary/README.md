# workSkill
This is the solution to some of the problems I have encountered in my work.

###1、扩大 checkbox 点击范围
思路：

1、div标签设置宽高，
2、使input百分百现实。给input设置透明度。
3、在JS中控制每次点击的时候切换图片。
html

	<div class="check">
		<img class="check-img" src="img/1.jpg" alt="">
		<input type="checkbox" id="checked_img" checked="checked">
	</div>
	
css

	var arr = ["大漠","W3cplus"];
	console.log(arr instanceof Array); // true
js

	var arr = ["大漠","W3cplus"];
	arr.constructor === Array

###2、table 切换
