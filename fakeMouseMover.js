(function() {
  'use strict';
  setInterval(() => {
    const evt = new MouseEvent('mousemove', {
      bubbles: true,
      cancelable: true,
      clientX: 100,
      clientY: 100,
      movementX: 1,
      movementY: 1,
    });
    document.dispatchEvent(evt);
    console.log("Evento 'mousemove' sintético disparado");
  }, 15000);
})();
