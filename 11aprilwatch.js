
 
function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="am";
    if(hh>=12)
    {
        am_pm="pm"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
        var fulltime=`${hh}:${mm} ${am_pm}`
        document.getElementById("Time").innerHTML=fulltime    
  var months=["january","feb","march","april","may","june","july","august","september","october","november","december"]
  
  var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
  document.getElementById("Date").innerHTML=`${dd}/${months[date.getMonth()]}/${yy}` 

   document.getElementById("Day").innerHTML=`${days[date.getDay()]}` 
document.getElementById("sec").innerHTML=ss;
var UpdateTheTime=setTimeout(clock,1000)
}
function greet()
{
    var date=new Date();
    var hh=date.getHours();
    if(hh>=6 && hh<=12)
    {
        document.getElementById("GreetMessage").innerHTML="GOOD MORNING"
        document.getElementById("bgvid").src="mong.mp4.mp4"
    }
     else if(hh>12 && hh<=16)
    {
       /* document.getElementById("GreetMessage").innerHTML="GOOD AFTERNOON"*/
        document.getElementById("bgvid").src="afternoon.mp4.mp4"
     document.getElementById("bgvid").style.width="100%"
        document.getElementById("bgvid").style.bottom="100px"
    }
    else if(hh>16 && hh<=20)
    {
        document.getElementById("GreetMessage").innerHTML="GOOD EVENING"
        document.getElementById("bgvid").src="evng.mp4.mp4"
        document.getElementById("bgvid").style.width="100%"
        document.getElementById("bgvid").style.bottom="100px"
    }
    else
    {
        document.getElementById("GreetMessage").innerHTML="GOOD NIGHT"
        document.getElementById("bgvid").src="night.mp4.webm"
        document.getElementById("bgvid").style.width="100%"
        document.getElementById("bgvid").style.bottom="100px"
    } 
}
    greet()
    function closeWind()
    {
        document.getElementById("greet").style.display="none"
    }
    var a=setTimeout(closeWind,5000);