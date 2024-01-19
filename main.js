setInterval(date, 1000)
let p = 0;

function date() {
   let point = ++p;
   let mon = document.getElementById('mon');
   let tue = document.getElementById('tue');
   let wed = document.getElementById('wed');
   let thus = document.getElementById('thus');
   let fri = document.getElementById('fri');
   let sat = document.getElementById('sat');
   let sun = document.getElementById('sun');
   let month = document.getElementById('month');
   let year = document.getElementById('year');
   let mass = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
   let y = new Date().getFullYear();
   let m = new Date().getMonth();


   let one = document.getElementById('1');
   let two = document.getElementById('2');
   let three = document.getElementById('3');
   let four = document.getElementById('4');
   let five = document.getElementById('5');
   let six = document.getElementById('6');
   let seven = document.getElementById('7');
   let eight = document.getElementById('8');
   let nine = document.getElementById('9');
   let ten = document.getElementById('10');
   let eleven = document.getElementById('11');
   let twelve = document.getElementById('12');
   let thirteen = document.getElementById('13');
   let fourteen = document.getElementById('14');
   let fifteen = document.getElementById('15');
   let sixteen = document.getElementById('16');
   let seventeen = document.getElementById('17');
   let eighteen = document.getElementById('18');
   let nineteen = document.getElementById('19');
   let twenty = document.getElementById('20');
   let twentyone = document.getElementById('21');
   let twentytwo = document.getElementById('22');
   let twentythree = document.getElementById('23');
   let twentyfour = document.getElementById('24');
   let twentyfive = document.getElementById('25');
   let twentysix = document.getElementById('26');
   let twentyseven = document.getElementById('27');
   let twentyeight = document.getElementById('28');
   let twentynine = document.getElementById('29');
   let thirty = document.getElementById('30');
   let thirtyone = document.getElementById('31');
   let date = new Date().getDate();

   /*
      if (m <= 0) {
         m = m + 1;
         m;
      }
      */
   month.innerHTML = mass[m];

   year.innerHTML = y;

   switch (date) {
      case 1:
         one.className = "bg-primary text-light"
         mon.className = "text-dark"



         break;
      case 2:
         tue.className = "text-dark"

         two.className = "bg-primary text-light"
         break;

      case 3:

         wed.className = "text-dark"


         three.className = "bg-primary text-light"
         break;

      case 4:
         thus.className = "text-dark"

         four.className = "bg-primary text-light"
         break;
      case 5:
         fri.className = "text-dark"

         five.className = "bg-primary text-light"
         break;
      case 6:
         sat.className = "text-dark"

         six.className = "bg-primary text-light"
         break;
      case 7:
         sun.className = "text-dark"

         seven.className = "bg-primary text-light"
         break;
      case 8:
         mon.className = "text-dark";

         eight.className = "bg-primary text-light"
         break;
      case 9:
         tue.className = "text-dark"

         nine.className = "bg-primary text-light"
         break;
      case 10:
         thus.className = "text-dark"


         ten.className = "bg-primary text-light"

      case 11:

         eleven.className = "bg-primary text-light"
         break;
      case 12:

         twelve.className = "bg-primary text-light"
         break;
      case 13:

         thirteen.className = "bg-primary text-light"
         break;
      case 14:

         fourteen.className = "bg-primary text-light"
         break;
      case 15:

         fifteen.className = "bg-primary text-light"
         break;
      case 16:

         sixteen.className = "bg-primary text-light"
         wed.className = "text-dark"
      case 17:
         seventeen.className = "bg-primary text-light"
         wed.className = "text-dark"
         break;
      case 18:

         eighteen.className = "bg-primary text-light"


         break;
      case 19:
         nineteen.className = "bg-primary text-light"
         break;
      case 20:

         twenty.className = "bg-primary text-light"
         break;
      case 21:
         twentyone.className = "bg-primary text-light"
         break;

      case 22:

         twentytwo.className = "bg-primary text-light"
         break;
      case 23:

         twentythree.className = "bg-primary text-light"
         break;
      case 24:

         twentyfour.className = "bg-primary text-light"
         break;
      case 25:

         twentyfive.className = "bg-primary text-light"
         break;
      case 26:

         twentysix.className = "bg-primary text-light"
         break;
      case 27:

         twentyseven.className = "bg-primary text-light"
         break;
      case 28:
         twentyeight.className = "bg-primary text-light"
         break;
      case 29:

         twentynine.className = "bg-primary text-light"
         break;
      case 30:

         thirty.className = "bg-primary text-light"
         break;
      case 31:

         thirtyone.className = "bg-primary text-light"
         break;

   }

}