var tweetsOn = false;

function showTweets( data ) {
  var tweets = "";

  for ( var i in data ) {
    tweets += "<p class=\"tweet\">" + data[i].text + "</p>";
  }
  $( ".enhanced-twitter" ).html( tweets );
}

function turnOnTweets() {
  if ( !tweetsOn ) {
    $( "body" ).append( "<script src='http://api.twitter.com/1/statuses/user_timeline.json?screen_name=robtarr&callback=showTweets'/>");
    tweetsOn = true;
  }
};

(function() {
  mediaCheck({
    media: "(min-width: 800px)",
    entry: turnOnTweets
  });
})();

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");