$(function(){
  
  var monit=[];
  var result = 0;


  $('.button').on({
    
    mousedown: function(){
      $(this).addClass('pushed');

      switch($(this).text()) {
        case '÷':
          monit.push('/');
          $('#monitor').text(monit.join('')); 
          break;
        case '×':
          monit.push('*');
          $('#monitor').text(monit.join('')); 
          break;
        case 'DEL':
          monit.pop();
          $('#monitor').text(monit.join(''));
          break;
        case 'C':
          monit = [];
          $('#monitor').text(monit.join('')); 
          break;
        case '=':
          result = eval(monit.join(''));
          $('#monitor').text(result);  
          break;
        default:
          monit.push($(this).text());
          $('#monitor').text(monit.join('')); 
          break;
      }
    },

    mouseup: function(){
      $(this).removeClass('pushed')
    }
  });  
});





