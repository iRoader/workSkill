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

	.check{
		width: 48px;
		height: 48px;
		background-color: #0ff;
		position: relative;
	}
	input{
		opacity: 0;
		width: 100%;
		height: 100%;
	}
	img{
	    position: absolute;
	    pointer-events: none;
	    display: block;
	    width: 16px;
	    height: 16px;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%, -50%);
	}

js

	$(".check").on('click', '#checked_img', function(){
		if($('#checked_img').is(':checked')){
			$('.check-img').attr('src', 'img/1.jpg');
		}
		else{
			$('.check-img').attr('src', 'img/2.jpg');
		}
	})
