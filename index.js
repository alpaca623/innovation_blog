(function() {
  var xhr = function(opt, callbackFn) {
    var request_url = "http://localhost:3000/api/v1" + opt.url;
    var xhr = new XMLHttpRequest();
    var result = [];
    xhr.open(opt.method, request_url, opt.async);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        result = JSON.parse(xhr.responseText);
      }
    };
    xhr.send();

    return result;
  };
  var request_menu = xhr({
    method: "GET",
    url: "/menu",
    async: false
  });

  var request_document = xhr({
    method: "GET",
    url: "/document",
    async: false
  });

  var menu_grid = function(data) {
    var menu_obj = document.querySelector(".js-menu");
    while (menu_obj.hasChildNodes()) {
      menu_obj.removeChild(menu_obj.firstChild);
    }
    for (var i = 0; i < data.length; i++) {
      var menu = document.createElement("li");
      menu.innerHTML = data[i].name;
      menu.className = data[i].code;

      menu_obj.appendChild(menu);
    }
  };

  var document_grid = function(data) {
    var document_obj = document.querySelector(".js-document");
    while (document_obj.hasChildNodes()) {
      document_obj.removeChild(document_obj.firstChild);
    }
    for (var i = 0; i < data.length; i++) {
      var document = dodcument.createElement("li");
      menu.innerHTML = data[i].name;
      menu.className = "document-class-" + data[i].uid;
      document_obj.appendChild(document);
    }
  };

  // 실행 부분
  menu_grid(request_menu.data);
  document_grid(request_document.data);
})();
