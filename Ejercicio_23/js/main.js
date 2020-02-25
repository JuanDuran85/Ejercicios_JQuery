$(function() {
  $(document).ready(function() {
    $(".httpbin").click(function() {
      $.ajax({
        type: "POST",
        url: "https://httpbin.org/post",
        data: "test=POST+PROJECT&by=Eddie+Kidiw",
        dataType: "json",
        success: function(data) {
            console.log(data);
          $(".result").append(
            '<ul class="list-group"><li class="list-group-item">' +
              data.form["by"] +
              '</li><liclass="list-group-item">' +
              data["form"]["test"] +
              '</li><li class="list-group-item">' +
              data["headers"]["User-Agent"] +
              '</li><li class="list-group-item">' +
              data["headers"]["Content-Type"] +
              '</li><li class="list-group-item">' +
              data["headers"]["Accept-Encoding"] +
              '</li><li class="list-group-item">' +
              data["headers"]["Accept-Language"] +
              "</li></ul>"
          );
        }
      });
    });
  });
});
