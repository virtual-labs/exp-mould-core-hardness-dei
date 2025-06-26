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

function surface1()
{
	document.getElementById("greenSandCore").innerHTML="<img src='images/greenHorizontalTest.gif' width='45%'>";
	document.getElementById("surface1").style.display = "none";
	setTimeout(() => {
	document.getElementById("reading1").style.display = "block";
	document.getElementById("greenSandSurface1").style.display = "block";
	}, 3500);
}

function surface2()
{
	document.getElementById("greenSandCore").innerHTML="<img src='images/greenDigonalTest.gif' width='45%'>";
	document.getElementById("reading1").style.display = "none";
	document.getElementById("greenSandSurface1").style.display = "none";
	setTimeout(() => {
	document.getElementById("reading2").style.display = "block";
	document.getElementById("greenSandSurface2").style.display = "block";
	}, 3500);
}

function surface3()
{
	document.getElementById("greenSandCore").innerHTML="<img src='images/greenTopTest.gif' width='45%'>";
	document.getElementById("reading2").style.display = "none";
	document.getElementById("greenSandSurface2").style.display = "none";
	setTimeout(() => {
	document.getElementById("reading3").style.display = "block";
	document.getElementById("greenSandSurface3").style.display = "block";
	}, 3500);
}

function result()
{
	document.getElementById("greenSandCore").style.display = "none";
	document.getElementById("reading3").style.display = "none";
	document.getElementById("greenSandSurface3").style.display = "none";
	document.getElementById("observations").style.display = "block";
	
}

function drySurface1()
{
	document.getElementById("drySandCore").innerHTML="<img src='images/dryHorizontalTest.gif' width='45%'>";
	document.getElementById("drySurface1").style.display = "none";
	setTimeout(() => {
	document.getElementById("dryReading1").style.display = "block";
	document.getElementById("drySandSurface1").style.display = "block";
	}, 3200);
}

function drySurface2()
{
	document.getElementById("drySandCore").innerHTML="<img src='images/dryDigonalTest.gif' width='45%'>";
	document.getElementById("dryReading1").style.display = "none";
	document.getElementById("drySandSurface1").style.display = "none";
	setTimeout(() => {
	document.getElementById("dryReading2").style.display = "block";
	document.getElementById("drySandSurface2").style.display = "block";
	}, 3000);
}

function drySurface3()
{
	document.getElementById("drySandCore").innerHTML="<img src='images/dryTopTest.gif' width='45%'>";
	document.getElementById("dryReading2").style.display = "none";
	document.getElementById("drySandSurface2").style.display = "none";
	setTimeout(() => {
	document.getElementById("dryReading3").style.display = "block";
	document.getElementById("drySandSurface3").style.display = "block";
	}, 3500);
}

function dryResult()
{
	document.getElementById("drySandCore").style.display = "none";
	document.getElementById("dryReading3").style.display = "none";
	document.getElementById("drySandSurface3").style.display = "none";
	document.getElementById("dryObservations").style.display = "block";
	
}

function resetfun()
{
	alert("Simulation will get restart.");
	location.reload();
}