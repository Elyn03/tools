var reset = document.getElementById('reset')
var start = document.getElementById('start')
var bstop = document.getElementById('stop')

// let hr = 00
// let min = 00
// let sec = 00
   
let hr = 00
let min = 00
let sec = 00
let count = 00

reset.addEventListener('click', () => {
   let hr = 00
   let min = 00
   let sec = 00
   document.getElementById("hr").innerHTML = "00";
   document.getElementById("min").innerHTML = "00";
   document.getElementById("sec").innerHTML = "00";
})


start.addEventListener('click', () => {
   console.log('start')
   timer = true
   time()
})

function time() {
   if (timer) {
      count++;

      if (count == 100) {
         sec ++
         count = 0
      }

      if (sec == 60) {
         min ++
         sec = 0
      }

      if (min == 60) {
         hr ++
         min = 0
      }

      if (hr < 10) {
         document.getElementById("hr").innerHTML = "0" + hr;
      } else {
         document.getElementById("hr").innerHTML = hr;
      }

      if (min < 10) {
         document.getElementById("min").innerHTML = "0" + min;
      } else {
         document.getElementById("min").innerHTML = min;
      }

      if (sec < 10) {
         document.getElementById("sec").innerHTML = "0" + sec;
      } else {
         document.getElementById("sec").innerHTML = sec;
      }

      setTimeout(time, 10);
   }

}

bstop.addEventListener('click', () => {
   console.log('stop')
   console.log("hr :", hr, "min : ", min, "sec : ", sec)
   timer = false
})