
// thanh tiến độ ở đầu trang web


 var h = document.documentElement,
 
 b = document.body,
 st = 'scrollTop',
 sh = 'scrollHeight',
 progress = document.querySelector('.progress'),
 scroll;
document.addEventListener('scroll', function() {
 scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
 progress.style.setProperty('--scroll', scroll + '%');
});


//     var h = document.documentElement,
//   b = document.body,
//   st = 'scrollTop',
//   sh = 'scrollHeight',
//   progress = document.querySelector('.nav_progress'),
//   scroll;

// document.addEventListener('scroll', function() {
//   scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
//   progress.style.setProperty('--scroll', scroll + '%');
// });
  