$(document).ready(function(){

//네비 클릭 이벤트
$(".mNav").click(function(){
  $("#menu").slideToggle();
});

$(window).resize(function(){
  let wWidth = $(window).width();
  if(wWidth > 1023){
    $("#menu".removeAttr("style"))
  }
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
//산골초가펜션 상세보기
const detail_1 = $('.port01 > .list > .p_img > a img');
detail_1.click(function(e){
  e.preventDefault();
  let detail1 = '<div class="d_page"><div class="d_page1"><img src="./images/sangolchogadetail.jpg" alt="산골초가펜션상세페이지"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail1);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});
//크리스피크림도넛 상세보기
const detail_2 = $('.port02 > .list > .p_img > a img');
detail_2.click(function(e){
  e.preventDefault();
  let detail1 = '<div class="d_page"><div class="d_page1"><img src="./images/krispydetail.jpg" alt="크리스피크림도넛상세페이지"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail1);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});
//블랙핑크 상세보기
const detail_3 = $('.port03 > .list > .p_img > a img');
detail_3.click(function(e){
  e.preventDefault();
  let detail1 = '<div class="d_page"><div class="d_page1"><img src="./images/blackpinkdetail.jpg" alt="블랙핑크상세페이지"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail1);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});
//힐링횡성 상세보기
const detail_4 = $('.port04 > .list > .p_img > a img');
detail_4.click(function(e){
  e.preventDefault();
  let detail1 = '<div class="d_page"><div class="d_page1"><img src="./images/healingdetail.jpg" alt="힐링횡성상세페이지"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail1);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});

//디자인 상세보기 팝업
//배너 상세보기 1
const detail_51 = $('#section4 ul li:first-child a img');
detail_51.click(function(e){
  e.preventDefault();
  let detail2 = '<div class="d_page"><div class="d_page1"><img src="./images/logodesign.jpg" alt="디자인1"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail2);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});
//배너 상세보기 2
const detail_52 = $('#section4 ul li:nth-child(2) a img');
detail_52.click(function(e){
  e.preventDefault();
  let detail2 = '<div class="d_page"><div class="d_page1"><img src="./images/banner1.jpg" alt="디자인2"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail2);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});
//배너 상세보기 3
const detail_53 = $('#section4 ul li:nth-child(3) a img');
detail_53.click(function(e){
  e.preventDefault();
  let detail2 = '<div class="d_page"><div class="d_page1"><img src="./images/banner2.jpg" alt="디자인3"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail2);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});
//배너 상세보기 4
const detail_54 = $('#section4 ul li:nth-child(4) a img');
detail_54.click(function(e){
  e.preventDefault();
  let detail2 = '<div class="d_page"><div class="d_page1"><img src="./images/banner3.jpg" alt="디자인4"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail2);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});
//배너 상세보기 5
const detail_55 = $('#section4 ul li:nth-child(5) a img');
detail_55.click(function(e){
  e.preventDefault();
  let detail2 = '<div class="d_page"><div class="d_page1"><img src="./images/banner4.jpg" alt="디자인5"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail2);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});
//배너 상세보기 6
const detail_56 = $('#section4 ul li:nth-child(6) a img');
detail_56.click(function(e){
  e.preventDefault();
  let detail2 = '<div class="d_page"><div class="d_page1"><img src="./images/banner5.jpg" alt="디자인6"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail2);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});
//배너 상세보기 7
const detail_57 = $('#section4 ul li:nth-child(7) a img');
detail_57.click(function(e){
  e.preventDefault();
  let detail2 = '<div class="d_page"><div class="d_page1"><img src="./images/banner6.jpg" alt="디자인7"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail2);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});
//배너 상세보기 8
const detail_58 = $('#section4 ul li:last-child a img');
detail_58.click(function(e){
  e.preventDefault();
  let detail2 = '<div class="d_page"><div class="d_page1"><img src="./images/banner7.jpg" alt="디자인8"></div><a href="#" title="닫기"><i class="fas fa-times"></i></a></div>';
  $('body').append(detail2);
  $('.d_page .fa-times').click(function(){
    $('.d_page').fadeOut();
    return false;
});
});

const f_container = document.querySelector(".f_container");
document.body.addEventListener("mousemove", e => {
  const x = e.clientX;
  const y = e.clientY - 35;
  gsap.to(f_container, {
    y: y
  });
  gsap.to(".f_textmask", {
    y: -y
  });
});

});