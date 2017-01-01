import { hello } from './es6sample';

var $div = document.createElement('div');
$div.innerHTML = hello();

document.body.appendChild($div);

if (module.hot) {
  module.hot.accept(function(err) {
    if (err) {
      console.error(err);
    }
  });

  module.hot.dispose(function() {
    $div.parentNode.removeChild($div);
  });
}


