
function clik(){
  document.getElementById("inp").style.display="none"
  date = document.getElementById("date").value
  name = document.getElementById("name").value
  derec = document.getElementById("derect").value
  min=60
  sek=60

  document.getElementById("stop").style.display="flex"
  setInterval(function (){
     sek--
      if (sek<=0){
      min--
        if (min<=0){
        date--
          if (date<=0){
            document.getElementById("inp").style.display="flex"
            clearInterval(timer);
          }
      }
    }

    document.getElementById("zago").innerText="DeadLineTime:"+date+"h:"+min+"m:"+sek+"s"
  },1000)
   document.getElementById("prof").innerText="Имя:"+name+";"+" описание:"+derec+";"

}
function reclik(){
  window.location.reload()
}

