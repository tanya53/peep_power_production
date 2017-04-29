function createEntries(data){
  //convert input to json
  var logs = JSON.parse(data);
  for (var i=0;i<logs.length;i++){
    var logentry = "<div><p>"+logs[i].date+"</p><h1>"+logs[i].title+"</h1><p>"+logs[i].entry+"</p></div>";
    $(".blog").append(logentry);
  }

}
$(document).ready(function(){
  var apiUrl = window.location.origin + '/shiplogs';
  //need to get the logs
  ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET',apiUrl,function(data){
    createEntries(data);
  }));
});
