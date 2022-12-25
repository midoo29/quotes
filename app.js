if(localStorage.getItem("dontshow1")==1){
    document.getElementById("buster").style.opacity=1;
    document.getElementById("pp").style.display="none";
}

var qu="" ;
var i =0 ;
document.getElementById("texx").addEventListener("keydown",function(event){
    if(event.key== "Enter")
    {add_quote();}
})

var quotes;
if(localStorage.getItem("arra3")!=null)
{quotes=localStorage.getItem("arra3").split(",") }
else
quotes =quotes=["Make every day in yuor life count and never be ungreatful about this days ","life is life and we live it once"];
document.getElementById("numero").innerHTML =quotes.length;
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("adding");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


//adding -----------------------------------------------------------------------------
function add_quote(){
    var q =filterme(document.getElementById("texx").value);
    console.log(q);
    if(q==1){
    localStorage.setItem("dontshow1",1);
    document.getElementById("buster").style.opacity=1;
    document.getElementById("pp").style.display="none";
    // When the user clicks on the button, open the modal
        
    }
    else{
    localStorage.setItem("dontshow1",0);
    qu= document.getElementById("texx").value;
    if(qu===""||qu===" "||qu==="  "||qu==="   "||qu==="    "||qu==="     "||qu==="      "||qu==="       ") {texx.value="";
    show_modal();
    
}
    else{
    quotes.push(qu);
    texx.value="";
    document.getElementById("numero").innerHTML =quotes.length;}
    localStorage.setItem("arra3",quotes);
    }
};

//showing-------------------------------------------------------------------------
function show_quote(){
if (i>=quotes.length-1 )
    i=0;
    else
    i=i+1
    
//Math.floor(Math.random()*quotes.length)
//var authors = object.keys(quotes);
//var author = authors[Math.floor(Math.random()*authors.length)];
var quote = quotes[i];
document.getElementById("the_quote").innerHTML = quote;

};




function show_modal() {
    modal.style.display = "block";
};

  // When the user clicks on <span> (x), close the modal
span.onclick = function close() {
    modal.style.display = "none";
};

  // When the user clicks anywhere outside of the modal, close it
window.onclick = function closee(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
};








var a= document.getElementById("texx").value;

function filterme(a){
var badWords =["ass","dick","شرموط","شرموطة","عرصا","عرصى",
"عرص","عرصوص","عريص","خرا","خرى","منيك",
"منيوك","منتاك","بتاكلو","بتبلعو","تلحس","تشلملظو",
"شكلو","عض","نيرة","ايري","زبي","عضو","ريتك",
"بخشي","طيزي","قحبة","قحيب","كول","زب",
"اير","بخش","خمستي","قحب","ممحون","ممحونة","كسي","كس","بلعو",
"ابن الكلب","الكلب","حمار","جحش","جحيش","اخو","اخوها","كر",
"تنكة","سكس","بورن","عاهرة","العاهرة","الشرموطة","العرص","الخرا"
,"طيز","Bitch","bitch","Bastard","bastard","son of a bitch","Son of a bitch"
,"Asshole","asshole","Ass","Dick","Piss off","piss","Shit","Fuck","fuck"
,"sex","Sex","بالعرص","بالطيز","بالمنيوك","بطيزي","asss","assss","diiick","shiit","fuuck",""
,"بايري","بالشرموط","حربوق","ولاك","fucck","","","","","","",""
,"","","","","","","","",""
,"","","","","" ]   ;//- contains the list of bad words
var fieldValue =a;  //contains input/Text area text


var badText = fieldValue.split(" ");
for (i = 0; i < badWords.length; i++)
{
    if(badWords[i] != "")
    {
        if(badText.indexOf(badWords[i].trim()) > -1){
            return true;
        }
    }
}
return false;
}

