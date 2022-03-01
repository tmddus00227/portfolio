$(document).ready(function(){

//내비 클릭시 밑줄
let gnb = $('.gnb li a');

gnb.click(function(){
  $(this).addClass('act4').parent().siblings().find('a').removeClass('act4'); 

  $(this).removeClass('act4'); 
  $(this).addClass('act4');
});
//스크롤 내릴때 내비 밑줄
// $(window).scroll(function(){
// 	var scroll = $(window).scrollTop();
// 	//console.log(scroll);
// 	if(scroll >= 0){
// 		// console.log('a');
// 		$(".gnb li a").removeClass('act4');
//   } else if(scroll >= 930){
//     $(".gnb li:first-child a").addClass('act4');
//   }
// 	// } else{
// 	// 	//console.log('a');
// 	// 	$(".gnb li:first-child a").removeClass("act4");
// 	// }
// });
// var num = prompt( "원하는 숫자를 입력하세요.", "" );

// if ( num >= 100 )
// {
//   document.write ( "입력한 숫자는 100 이상입니다." );
// }
// else if ( num >= 50 )
// {
//   document.write ( "입력한 숫자는 50 이상, 99 이하입니다." );
// }
// else if (num >= 0 )
// {
//   document.write ( "입력한 숫자는 0 이상, 49 이하입니다." )
// }
// else
// {
//   document.write( "입력한 숫자는 음수입니다." );
// }

//메인 이미지 슬라이드
let g = 0;

function fadeInOut(){
  $('.g_slide li').stop().fadeOut();

  if(g==2){ 
    g = 0;
  }else{ 
    g++;
  }

  $('.g_slide li').eq(g).stop().fadeIn();

  }

  let Timer = setInterval(fadeInOut, 3000);


//어바웃 스킬바
$(window).scroll(function(){
  let skill = $(this).scrollTop();
  console.log(skill);
  if(skill>=780){
    $('.skill > li:first-child > .bar').stop().animate({'width':'80%'},500);
    $('.skill > li:nth-child(2) > .bar').stop().animate({'width':'80%'},500);
    $('.skill > li:nth-child(3) > .bar').stop().animate({'width':'30%'},500);
    $('.skill > li:nth-child(4) > .bar').stop().animate({'width':'40%'},500);
    $('.skill > li:nth-child(5) > .bar').stop().animate({'width':'60%'},500);
    $('.skill > li:last-child > .bar').stop().animate({'width':'75%'},500);

    $('.skill > li:first-child > .bar > .ball').stop().animate({'left':'140px'},500);
    $('.skill > li:nth-child(2) > .bar > .ball').stop().animate({'left':'140px'},500);
    $('.skill > li:nth-child(3) > .bar > .ball').stop().animate({'left':'38px'},500,);
    $('.skill > li:nth-child(4) > .bar > .ball').stop().animate({'left':'58px'},500,);
    $('.skill > li:nth-child(5) > .bar > .ball').stop().animate({'left':'100px'},500);
    $('.skill > li:last-child > .bar > .ball').stop().animate({'left':'130px'},500);
  };
});

//포트폴리오 탭콘텐츠
$('.port01').show();

$('.p_con > ul > li > a').click(function(){
  $('.p_con > ul > li > div').hide();
  $(this).next().show();
  return false;
});

//갤러리 내비 클릭 시 색 변경
const img_list = $('.g_list > li');
const gbtn = $('.g_lnb > ul > li > a');

$('.g_lnb > ul > li:first-child a').addClass('act1');

gbtn.click(function(e){
  e.preventDefault();

  $('.g_lnb > ul > li > a').removeClass('act1');
  $(this).addClass('act1');

});
//갤러리 이미지 클릭시 모달창 
const g_img = $('.g_list > li > a img');

g_img.click(function(e){
  e.preventDefault();

  let imgUrl = $(this).attr('src');
  console.log(imgUrl);
  let modal = "<div class='modal'><img src='"+imgUrl+"'><a href='#' title='닫기'><i class='fas fa-times'></i></a></div>";
  $('body').append(modal);


  $('.modal .fa-times').click(function(){
    $('.modal').fadeOut();
    return false;
  });
});


//갤러리 내비게이션 변수선언
const total = $('.g_lnb > ul > li:first-child');
const design = $('.g_lnb > ul > li:nth-child(2)');
const banner = $('.g_lnb > ul > li:nth-child(3)');
const uiux = $('.g_lnb > ul > li:last-child');

total.click(function(){ // all 전체보기
  $('.g_list li').hide();
  $('.g_list li').stop().fadeIn();
});
design.click(function(){
  $('.g_list li').hide();
  $('.design').stop().fadeIn();
});
banner.click(function(){
  $('.g_list li').hide();
  $('.banner').stop().fadeIn();
});
uiux.click(function(){
  $('.g_list li').hide();
  $('.uiux').stop().fadeIn();
});

//qna
let qna = $('.qna > ul > li > a');

qna.click(function(){
    $(this).next().slideDown().parent().siblings().find('p').slideUp();
    $(this).find('i').addClass('act2').parent().parent().siblings().find('i').removeClass('act2');
    return false;
});
//qna 갤러리슬라이드
let qc_btn = $('.qc_btn > li');
let n = qc_btn.index();
console.log(n);

qc_btn.click(function(){
  n = -($(this).index()*$('#q_slide img').width());
  console.log(n);

  $('#q_slide .q_img').stop().animate({'left':n},500);
  $('.qc_btn li').removeClass('act3');
  $(this).addClass('act3');

});
function move(n){
  n = -(n*$('#q_slide > .q_img img').width());
  $('.q_img').animate({'left':n},300);
}

let num = 0;
let Timer2 = setInterval(function(){
  if(num == 3){
    num = 0;
    $('.qc_btn li').removeClass('act3');
    $('.qc_btn li').eq(num).addClass('act3');
  }else{
    num++;
    $('.qc_btn li').removeClass('act3');
    $('.qc_btn li').eq(num).addClass('act3');
  }
  move(num);
},3000);

// 모달창
let modal = '<div class="modal"><div class="m_img"><img src="./images/modal.jpg" alt="모달창"><p><input type="checkbox" id="ch"><label for="ch">오늘 하루 창 열지 않기</label><input type="button" value="닫기" id="m_btn"></p></div></div>';

$('body').append(modal);

if($.cookie('popup')=='none'){
  $('.modal').hide();
}

let $ex = $('.modal #ch'); 
function closeModal(){
  if($ex.is(':checked')){ 
    $.cookie('popup', 'none',{expires:1, path:'/'});
  }
  $('.modal').hide();
}

$('#m_btn').click(function(){
  closeModal();
});


});