// JavaScript Document
/*
RegExp class)
http://www.w3schools.com/jsref/jsref_obj_regexp.asp
http://www devguru com/technologies/ecmascript/ .devguru.com/technologies/ecmascript/QuickRef/regexp.html

JavaScrip RegExp Tutorials
http://www.evolt.org/article/Regular_Expressions_in_JavaScript/17/36435/– h // j i ki /j / h l ttp://www.javascrip

*/


var comSep = /[\w+\-*\s*\w*]+,*/g, str = "commas, semi-colon, dots, single-quote, double-quote, exclamation_mark, question mark";
a(str.match(comSep))

function spiltBySeparator(array, separator){//spiltBySeparator(['you_me', "me-you", 'us.US', "me", "toYou"], ",");
var match_separator = new RegExp(/[\w+\W*.*\s*\w*]+,*/g);
var matched = String(array).match(match_separator);
var splited = matched[0].split(separator); return splited;
}
var nt = spiltBySeparator(['you.me',  "me.you", 'us.US', "me", "to.You" ], /\s/g);
a(nt + nt.length)


function isANumber( n ) { var numStr = /^-?(\d+\.?\d*)$|(\d*\.?\d+)$/; return numStr.test( n.toString() ); } 




var validation = { isEmailAddress:function(str) { var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
return pattern.test(str); 
// returns a boolean
 },
isNotEmpty:function (str) { var pattern =/\S+/; 
return pattern.test(str); 
// returns a boolean 
}, 
isNumber:function(str) {
 var pattern = /^\d+$/; return pattern.test(str); 
 // returns a boolean
  },
isValidPhone: function(phone){
var test = /^[0-9\_]{7,20}/;
return test.test(phone);
 },
isValidName: function(name){
var test = /^[a-zA-Z0-9]{2,20}/;
return test.test(name);
},
 isSame:function(str1,str2){ return str1 === str2; 
  
  }};




var obj = {};
//Numbers and Floats only
var
a = /[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/,

d = /^-?\d+(\.\d+)?$/,
c = /^-?\d*[\.]?\d+$/,
tst = /^\d+$/;
tst = /^[0-9]+$/;
//356.56-578.75 568
var fl1 = /^-?\d*\.?\d*$/; 
//376-478.578.5990 no space
var fl2 = /^-?\d+\.?\d*$/;
var float = /^\d+\.?\d*$/;
//alert(fl2.test(n));

var blob = /<(.|\n)*?>/g;
rgx = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/,
email = /\b[a-zA-Z(\d)+.]+?\@[\w.]+?.[a-z]/,

date = /(\d{1,2})-(\d{1,2})-(\d{4}) (\d{1,2}):(\d{2})/,
dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/; 
var numberReSnippet = "(?:NaN|-?(?:(?:\\d+|\\d*\\.\\d+)(?:[E|e][+|-]?\\d+)?|Infinity))"; var matchOnlyNumberRe = new RegExp("^("+ numberReSnippet + ")$");
