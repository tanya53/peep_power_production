function createPosts(data){
  //convert input to json
  var posts = JSON.parse(data);
  for (var i=0;i<posts.length;i++){
    var id = "post" + parseInt(i);
    var logentry = "<div><p>"+posts[i].date+"</p><h1>"+posts[i].title+"</h1><p id = "+id+">"+posts[i].entry+"</p></div>";
    $(".posts").append(logentry);
    for (var j=0;j<posts[i].comments.length;j++){
        var commententry ="<div><p>"+posts[i].comments[j].date+"</p><p>"+posts[i].comments[j].comment+"</p><p>"+
                            posts[i].comments[j].author+"</p>"+"<p>likes: "+posts[i].comments[j].likes+"</p></div>";
        var idtag = "#"+id;
        $(idtag).append(commententry);
    }
  }

}
$(document).ready(function(){
  var apiUrl = window.location.origin + '/popposts';
  //need to get the logs
  ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET',apiUrl,function(data){
    createPosts(data);
  }));
});
