function menu_check_onclick_fcn() {
     var sidebar = document.getElementsByClassName('side_nav')[0];
     var main = document.getElementsByTagName("main")[0];

     var real_time_interface = document.getElementsByClassName('time_interface')[0];

     console.log(main);
     console.log(sidebar);
     //메뉴바가 펼쳐져있는 경우
     if (sidebar.style.left == "-200px") {
          sidebar.style.left = "0px"
          main.style.left = "200px"
          real_time_interface.style.left= "40%"
     }
     //메뉴바가 펼쳐있지 않는 경우
     else {
          sidebar.style.left = "-200px";
          main.style.left = "0px"
          real_time_interface.style.left= "50%"
     }
}

function real_time_fcn() {
     var target = document.getElementById('real_time');
     function clock() {
          var time = new Date();

          var month = time.getMonth();
          var date = time.getDate();
          var day = time.getDay();
          var week = ['일', '월', '화', '수', '목', '금', '토']

          var hours = time.getHours();
          var minutes = time.getMinutes();
          var seconds = time.getSeconds();

          target.innerHTML =
               `${month + 1}월 ${date}일 ${week[day]}요일 ` +
               `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
     }
     clock();
}
setInterval(real_time_fcn, 1000);
