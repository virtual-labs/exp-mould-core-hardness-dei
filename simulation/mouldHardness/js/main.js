var mto=0.5;
var menu_score = 0;
function dispmenu(val)
{
   val.classList.toggle("change");
  menu_score = menu_score+1;
  if(menu_score==1)
  {
    document.getElementById("navbar").setAttribute("style","display:block");
    document.getElementById("simulation-cont").setAttribute("style","opacity:0.5");
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:1");
    menu_score=-1;
    document.body.style.backgroundColor="black";
  }
  else
    {
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:10");
         document.body.style.backgroundColor="white";
          document.getElementById("simulation-cont").setAttribute("style","opacity:01");
      document.getElementById("navbar").setAttribute("style","display:none");
	  }
}

function sandInFlask()
{
	document.getElementById("mouldHardness").innerHTML="<img src='images/shovelToFlask.gif' width='65%'>";
	document.getElementById("sandInFlask").style.display = "none";
	setTimeout(() => {
	document.getElementById("flaskWithSand").style.display = "block";
	}, 3500);
}

function flaskWithSand()
{
	document.getElementById("mouldHardness").innerHTML="<img src='images/flaskWithSand.jpg' width='50%'>";
	document.getElementById("flaskWithSand").style.display = "none";
	document.getElementById("sandRamming").style.display = "block";
}

function sandRamming()
{
	document.getElementById("mouldHardness").innerHTML="<img src='images/ramming.gif' width='35%'>";
	document.getElementById("sandRamming").style.display = "none";
	setTimeout(() => {
	document.getElementById("sandReading").style.display = "block";
	}, 5000);
}

function sandReading()
{
	document.getElementById("mouldHardness").innerHTML="<img src='images/reading.gif' width='30%'>";
	document.getElementById("sandReading").style.display = "none";
	setTimeout(() => {
	document.getElementById("reading").style.display = "block";
	}, 8000);
}

function result()
{
	document.getElementById("mouldHardness").style.display = "none";
	document.getElementById("reading").style.display = "none";
	document.getElementById("result").style.display = "block";
}

function resetfun()
{
	alert("Simulation will get restart.");
	location.reload();
}