var cca = document.getElementsByClassName('cca');
var w_h_ids = [];
for (var i = 0; i < cca.length; i++) {
  if (cca[i].getAttribute('data-init') !== "true") {
    cca[i].setAttribute('data-init', "true");
    w_h_ids.push(cca[i].className.replace(/cca /g, '') + '-' + cca[i].id);
  }
}
var cc = document.createElement('script');
cc.type = 'text/javascript';
cc.async = true;

// prod
// cc.src = 'https://platform.clearcoin.co/ad/display-by-dims/' + btoa(unescape(encodeURIComponent(w_h_ids.join('!'))));
// dev
cc.src = 'http://localhost:3000/ad/display-by-dims/' + btoa(unescape(encodeURIComponent(w_h_ids.join('!'))));

// todo: ...so this will only work if there is already a script tag somewhere on page?
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(cc, s);