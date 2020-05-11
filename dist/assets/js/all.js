$(".ham-icon").click(function (e) {
  e.preventDefault();
  $(".list").toggleClass("active");
});
$(".blog-icon").click(function (e) {
  e.preventDefault();
  $(".blog-list").toggleClass("active");
});

// 隱藏所有的 li 內文
$(".qa-text").hide();
// 預設讓第一個 li 加上 active
$(".qa-item").eq(0).addClass("qa-active");
// 預設讓第一個 li 內文 顯示
$(".qa-text").eq(0).show();

// 點擊 li
$(".qa-item").click(function (e) {
  // 取消預設 event 事件
  e.preventDefault();
  // 加上 active 屬性，並把其他有 active 的移除
  $(this).toggleClass("qa-active").siblings().removeClass("qa-active");
  // 讓自己的 li body 切換收合
  $(this).children().next().slideToggle();
  // 讓其他 li body 收合
  $(this).siblings().children().next().slideUp();
});
