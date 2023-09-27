$(window).on('load', () => {
  // HTMLドキュメントが読み込み完了したとき
  console.log('loadイベントが発生しました');
  });

$(function(){
  // 画面をスクロールしたとき
  $(document).on('scroll', () => {
    console.log('scrollイベントが発生しました');
  });
});

