
// header領域を抜けたらnav透過
const FixedAnimation = () => {
	let headerHeight = $('header').height(); // セレクタ="header"の高さ取得
	let scroll = $(window).scrollTop(); //スクロール値
	// console.log(headerHeight)

	if (scroll >= headerHeight) {
		$('.menu ul').addClass('opacity');
	} else {
		$('.menu ul').removeClass('opacity');
	};
};
//↑動きの詳細をまとめた関数
//↓動かすタイミング

$(window).scroll(() => {
	FixedAnimation();
});

$(window).on('load', () => {
	FixedAnimation();
});

// .shape全体をホバーしたときにリンク
$('.shape,.text_01').hover(
	function () {
		$('.before').addClass('before_active');
		$('.after').addClass('after_active');
	},
	function () {
		$('.before').removeClass('before_active');
		$('.after').removeClass('after_active');
	});

$('.shape,.text_01').hover(
	function () {
		$('.button a').css('color', '#324252');
	},
	function () {
		$('.button a').css('color', '#666');
	});



// ------------------------------------

$(function () {
	$('.Toggle').click(function () {
		$(this).toggleClass('active');
		$('.menu').toggleClass('open');
	});
});

$(function () {
	var open = $('.modal-open'),
		close = $('.modal-close'),
		container = $('.modal-container');

	open.on('click', function () {
		container.addClass('active');
		return false;
	});

	close.on('click', function () {
		container.removeClass('active');
	});

	$(document).on('click', function (e) {
		if (!$(e.target).closest('.modal-body').length) {
			container.removeClass('active');
		}
	});
});

// -------------------------------------------------

$(function () {
	var open = $('.modal-open02'),
		close = $('.modal-close'),
		container = $('.modal-content02');

	open.on('click', function () {
		container.addClass('active');
		return false;
	});

	close.on('click', function () {
		container.removeClass('active');
	});

	$(document).on('click', function (e) {
		if (!$(e.target).closest('.modal-body').length) {
			container.removeClass('active');
		}
	});
});

// 申し込み手順 caption
let duration = 500;
$(function () {
	$('.box').hover(slideIn, slideOut);
});

function slideIn() {
	$('.caption1').stop().animate({ top: "50%" }, duration);
	$('.caption2').stop().animate({ top: "60%" }, duration);
};

function slideOut() {
	$('.caption1').stop().animate({ top: "80%" }, duration);
	$('.caption2').stop().animate({ top: "100%" }, duration);
};

// レスポンシブ>スマホ用

// 申し込み方法
$(function () {
	$('.captionbtn_box').on('touchstart click', function(){
		let value = $(event.currentTarget).next().children('p');// イベント発火した要素の兄弟要素の子要素を取得
		$(value).toggleClass('caption2_active');// 取得した要素に開閉記述
	});
});
// クリックでも動作するように
// $(function () {
// 	$('.captionbtn_box').on('click', function(){
// 		let value = $(event.currentTarget).next().children('p');// イベント発火した要素の兄弟要素の子要素を取得
// 		$(value).toggleClass('caption2_active');// 取得した要素に開閉記述
// 	});
// });
// 画面幅が950以下の時トップテキストを改行したい
$(window).on('load', function () {
	$(window).resize(function () {
		let x = $(window).width();
		let y = 950;

		if (x <= y) {
			$('.text_02 span').addClass('top_br')
		};
	});
});