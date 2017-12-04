$(function(){
  
  var monit=[];
  var result = 0;


  $('.button').on({
    
    mousedown: function(){
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
            if (result.length > 9) {
              $('#monitor').text(result.toExponential(2));
            }
            else {
              $('#monitor').text(result);  
            }
          break;
        default:
          monit.push($(this).text());
          $('#monitor').text(monit.join('')); 
          break;
      }
    }
  });  
});





