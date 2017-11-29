$(function(){
  
  var monit='';
  var result = 0;

  $('.button').on({
    mouseenter: function(){
      $(this).addClass('pointer');
    },
    mousedown: function(){
      $(this).addClass('pushed');

      if($(this).text() === '÷') {
        monit = $('#monitor').append('/');
      }

      else if ($(this).text() === '×') {
        monit = $('#monitor').append('*');
      }

      else {
      monit = $('#monitor').append($(this).text());
      }
    },

    mouseup: function(){
      $(this).removeClass('pushed')
    }
  });

  $('#C').on({
    mouseenter: function(){
      $(this).addClass('pointer');
    },
    mousedown: function(){
      $(this).addClass('pushed');
      $('#monitor').empty();
    },
    mouseup: function(){
      $(this).removeClass('pushed');
    }
  });
  
  $('#equals').on({
    mouseenter: function(){
      $(this).addClass('pointer');
    },
    mousedown: function(){
      $(this).addClass('pushed');
      result = eval($('#monitor').text());
      $('#monitor').text(result);
    },
    mouseup: function(){
      $(this).removeClass('pushed')
    }
  });
});