var twitterMessage = "vsvr fgsrgfr gsfbt sdfsg gfgffbt svffffff fpg."
var countChar = twitterMessage.length;
var countCharLeft = 140 - countChar;
alert("You have written "+countChar+" characters and left "+countCharLeft+" characters.")
var tweet = prompt("Please enter words that you want to tweet: ");
slicedTweet = tweet.slice(0,50);
alert(slicedTweet);
