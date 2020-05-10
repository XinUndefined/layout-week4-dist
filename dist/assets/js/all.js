$(".ham-icon").click(function (e) {
  e.preventDefault();
  $(".list").toggleClass("active");
});

// 隱藏所有的 li 內文
$(".text").hide();
// 預設讓第一個 li 加上 active
$(".qa-item").eq(0).addClass("active");
// 預設讓第一個 li 內文 顯示
$(".text").eq(0).show();

// 點擊 li
$(".qa-item").click(function (e) {
  // 取消預設 event 事件
  e.preventDefault();
  // 加上 active 屬性，並把其他有 active 的移除
  $(this).toggleClass("active").siblings().removeClass("active");
  // 讓自己的 li body 切換收合
  $(this).children().next().slideToggle();
  // 讓其他 li body 收合
  $(this).siblings().children().next().slideUp();
});
