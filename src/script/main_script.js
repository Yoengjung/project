function menu_check_onclick_fcn () {
    var sidebar = document.getElementsByClassName('side_nav')[0];
    var main = document.getElementsByTagName("main")[0];
    console.log(main);
    console.log(sidebar);
   if (sidebar.style.left =="-200px") {
        sidebar.style.left = "0px"
        main.style.left = "200px"
   }
   else {
        sidebar.style.left = "-200px";
        main.style.left = "0px"
   }
}
