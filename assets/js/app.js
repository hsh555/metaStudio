(function () {
  // mobile-navbar-web

  var mobileNavbarWebToggler = document.getElementById("mobile-navbar-toggler");
  var mobileNavbarWebCloseBtn = document.querySelector(".mobile-navbar-web__close-btn");
  if (mobileNavbarWebToggler && mobileNavbarWebCloseBtn) {
    var mobileNavbarWeb = document.querySelector(".mobile-navbar-web");

    mobileNavbarWebToggler.onclick = function () {
      if (mobileNavbarWeb) {
        mobileNavbarWeb.classList.remove("mobile-navbar-web--hide");
        mobileNavbarWeb.classList.add("mobile-navbar-web--show");
      }
    };

    mobileNavbarWebCloseBtn.onclick = function () {
      if (mobileNavbarWeb) {
        mobileNavbarWeb.classList.remove("mobile-navbar-web--show");
        mobileNavbarWeb.classList.add("mobile-navbar-web--hide");
      }
    };
  }

  // mobile-navbar

  var mobileNavbarToggler = document.getElementById("mobile-navbar-toggler");
  var mobileNavbar = document.querySelector(".mobile-navbar");
  if (mobileNavbarToggler && mobileNavbar) {
    mobileNavbarToggler.onclick = function () {
      if (mobileNavbar.classList.contains("mobile-navbar--hide")) {
        mobileNavbar.classList.remove("mobile-navbar--hide");
        mobileNavbar.classList.add("mobile-navbar--show");
      } else {
        mobileNavbar.classList.remove("mobile-navbar--show");
        mobileNavbar.classList.add("mobile-navbar--hide");
      }
    };
  }

  // mobileNavbarWebCloseBtn.onclick = function() {
  //   mobileNavbarWeb.classList.remove('mobile-navbar-web--show');
  //   mobileNavbarWeb.classList.add('mobile-navbar-web--hide');
  // };

  // file-uploader init
  var fileInput = document.getElementById("file-upload");
  if (fileInput) {
    var fileData = fileInput.nextElementSibling;
    var image = fileData.querySelector("img");

    fileInput.onchange = function (e) {
      fileData.style.display = "block";

      image.setAttribute("src", URL.createObjectURL(e.target.files[0]));
    };

    var deleteElement = fileData.querySelector(".file-delete");

    deleteElement.onclick = function () {
      fileInput.innerHTML = "";
      image.setAttribute("src", "");
      fileData.style.display = "none";
    };
  }

  // custom-select
  if (document.getElementsByClassName("custom-select")) {
    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      /* For each element, create a new DIV that will act as the selected item: */
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /* For each element, create a new DIV that will contain the option list: */
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
          /* When an item is clicked, update the original select box,
            and the selected item: */
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-selected--active");
      });
    }

    function closeAllSelect(elmnt) {
      /* A function that will close all select boxes in the document,
      except the current select box: */
      var x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i);
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    document.addEventListener("click", closeAllSelect);
  }

  // list-accordion
  var listAccordion = $('.list-accordion');

  if (listAccordion) {
    listAccordion.find('.list-accordion__header').click(function () {
      $(this).next().slideToggle();
      $(this).toggleClass('active');
      $(this).find('.list-accordion__title icon').slideToggle();
    });
  }
})();
