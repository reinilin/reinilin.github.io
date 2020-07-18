function startTime() {
  const today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();

  const date = today.getDate();
  const year = today.getFullYear();
  const month_idx = today.getMonth();
  const months = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"];
  const month = months[month_idx];

  h = checkTime(h);
  m = checkTime(m);
  document.getElementById('time').innerHTML = h + ":" + m;

  if (h < 5 || h > 20) {
    //night
    document.getElementById('greeting').innerHTML = "good night.<br>today is " + month + " " + date + ", " + year + ".";
    document.getElementById('text').style.color = "#000219";
    document.body.style.backgroundImage = "url('assets/img/night.png')";
    document.getElementById('meow').style.opacity = 0;
  } else if (h < 12) {
    //morning
    document.getElementById('greeting').innerHTML = "good morning.<br>today is " + month + " " + date + ", " + year + ".";
    document.getElementById('text').style.color = "#6C6B66";
    document.body.style.backgroundImage = "url('assets/img/morning.png')";
    document.getElementById('meow').style.opacity = 0;
  } else if (h < 17) {
    //afternoon
    document.getElementById('greeting').innerHTML = "good afternoon.<br>today is " + month + " " + date + ", " + year + ".";
    document.getElementById('text').style.color = "#435569";
    document.body.style.backgroundColor = "#D6E6FE";
    document.getElementById('meow').style.opacity = 1;
  } else {
    //evening
    document.getElementById('greeting').innerHTML = "good evening.<br>today is " + month + " " + date + ", " + year + ".";
    document.getElementById('text').style.color = "#28373C";
    document.body.style.backgroundImage = "url('assets/img/evening.png')";
    document.getElementById('meow').style.opacity = 0;
  }
  var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // prepend 0 for single digit #s
  return i;
}

startTime();
