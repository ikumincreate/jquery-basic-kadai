$(function(){
    // id属性"change-color"がクリックされたら
    $('#change-color').on('click', function(){
      // id属性"target"のフォントカラーを黒から赤に変更する
      $('#target').css('color', 'red');
    });

  // id属性"change-text"がクリックされたら
  $('#change-text').on('click', function(){
    // id属性"target"を「こんにちは！」から「Hello!」に変化させる
    $('#target').text('Hello!');
  });

  // id属性"fade-out"がクリックされたら
  $('#fade-out').on('click', function(){
    // id属性"target"をフェードアウトさせる
    $('#target').fadeOut();
  });

  // id属性"fade-in"がクリックされたら
  $('#fade-in').on('click', function(){
    // id属性"target"をフェードインさせる
    $('#target').fadeIn();
  });
})