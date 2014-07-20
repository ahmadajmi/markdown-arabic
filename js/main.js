(function(){
  function Editor(input, preview) {
    this.update = function () {
      preview.innerHTML = markdown.toHTML(input.value);
    };
    input.editor = this;
    this.update();
  }
  var $ = function (id) { return document.getElementById(id); };
  new Editor($("text-input"), $("preview"));

})();
