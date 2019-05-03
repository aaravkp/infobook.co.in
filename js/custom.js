
        //tab menu
        function openCourse(evt, courseName) {
          var i, tabcontent, tablinks;
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }
          tablinks = document.getElementsByClassName("tablinks");
          for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
          }
          document.getElementById(courseName).style.display = "block";
          evt.currentTarget.className += " active";
        }
        // Get the element with id="defaultOpen" and click on it
        document.getElementById("btndefaulttab").click();

        /* When the user clicks on the button,
        toggle between hiding and showing the dropdown content */
        function setDropdownMenu() {
          document.getElementById("myDropdown").classList.toggle("show");
        }

        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
          if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        }

        //set home side bar
        function setHomeSideBar() {
          var input, filter, ul, li, a, i;
          input = document.getElementById("mySearch");
          filter = input.value.toUpperCase();
          ul = document.getElementById("myMenu");
          li = ul.getElementsByTagName("li");
          for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
            } else {
              li[i].style.display = "none";
            }
          }
        }


          //set .net tab
        function setDotnettab() {
            document.getElementById("btndotnettab").click();
        }

          //set sql tab
        function setSqltab() {
            document.getElementById("btnsqltab").click();
        }

          //set sql tab
        function setAwstab() {
            document.getElementById("btnawscloudtab").click();
        }

          //set sql tab
        function setJavascripttab() {
            document.getElementById("btnjavascripttab").click();
        }

          //set sql tab
        function setPythontab() {
            document.getElementById("btnpythontab").click();
        }

          //set sql tab
        function setAngulartab() {
            document.getElementById("btnangulartab").click();
        }
        // Fix Menu...............
        //window.onscroll = function() {setFixedMenu()};

        //var header = document.getElementById("tabheader");
        //var sticky = header.offsetTop;

        //function setFixedMenu() {
          //if (window.pageYOffset > sticky) {
            //header.classList.add("sticky");
         // } else {
          //  header.classList.remove("sticky");
          //}
        //}

        // This script is for all course tabs.
         function setSubMenu(evt, cityName) {
          var i, tab1content, tab1links;
          tab1content = document.getElementsByClassName("tab1content");
          for (i = 0; i < tab1content.length; i++) {
            tab1content[i].style.display = "none";
          }
          tab1links = document.getElementsByClassName("tab1links");
          for (i = 0; i < tab1links.length; i++) {
            tab1links[i].className = tab1links[i].className.replace(" active", "");
          }
          document.getElementById(cityName).style.display = "block";
          evt.currentTarget.className += " active";
        }

        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaulttab").click();

        function onInitilize()
        {
            //pre tag print
            prettyPrint();
        }



