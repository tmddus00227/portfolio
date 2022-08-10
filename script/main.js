$(document).ready(function(){

//메인 이미지 슬라이드
let mn = 0;
function fadeInOut(){
  $('.slide li').stop().fadeOut();
  if(mn==4){mn=0;
  }else{
    mn++;
  }
  $('.slide li').eq(mn).stop().fadeIn();
}
let Timer = setInterval(fadeInOut,5000);

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
  $('.p_con > ul > li > a').removeClass('act0');
  $(this).addClass('act0');
  $('.p_con > ul > li > div').hide();
  $(this).next().show();
  return false;
});

//포트폴리오 상세보기 팝업
//힐링횡성 상세보기
const detail_1 = $('.port01 > .list > .p_img > a img');
detail_1.click(function(e){
  e.preventDefault();
  let detail1 = '<div class="d_page"><div class="d_page1"><img src="./images/healingdetail.png" alt="힐링횡성상세페이지"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail1);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});
//산골초가펜션 상세보기
const detail_2 = $('.port02 > .list > .p_img > a img');
detail_2.click(function(e){
  e.preventDefault();
  let detail1 = '<div class="d_page"><div class="d_page1"><img src="./images/sangolchogadetail.png" alt="산골초가펜션상세페이지"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail1);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});
//크리스피크림도넛 상세보기
const detail_3 = $('.port03 > .list > .p_img > a img');
detail_3.click(function(e){
  e.preventDefault();
  let detail1 = '<div class="d_page"><div class="d_page1"><img src="./images/krispydetail.png" alt="크리스피크림도넛상세페이지"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail1);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});
//블랙핑크 상세보기
const detail_4 = $('.port04 > .list > .p_img > a img');
detail_4.click(function(e){
  e.preventDefault();
  let detail1 = '<div class="d_page"><div class="d_page1"><img src="./images/blackpinkdetail.png" alt="블랙핑크상세페이지"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail1);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
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
  let g_modal = "<div class='g_modal'><img src='"+imgUrl+"'><a href='#' title='닫기'><i class='fas fa-times'></i></a></div>";
  $('body').append(g_modal);
  $('.g_modal .fa-times').click(function(){
    $('.g_modal').fadeOut();
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
  if(num == 2){
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


//모달창
let modal ='<div class="modal"><div class="p_wrap"><div class="popup"><img src="./images/logo.png" alt="로고"><p>본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 만들어졌습니다.</p><p>일부 내용 및 이미지 등은 별도의 출처가 있습니다.</p><p class="close"><input type="checkbox" id="ch"><label for="ch">오늘 하루 창 열지 않기</label><input type="button" value="닫기" id="m_btn"></p></div></div></div>';

$('footer').append(modal);

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