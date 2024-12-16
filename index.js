document.getElementById("body").insertAdjacentHTML('afterbegin', "" +
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
    "<div class=\"fullmenu\" id='fullmenu'>\n" +
    "<a href=\"javascript:void(0);\" onclick=\"hidetopmenu()\"><img src=\"close.svg\" style='float: right; height: 35px; width: 35px; margin: 10px; margin-bottom: 10px; backdrop-filter: blur(10px) brightness(0.5); border-radius: 10px; background-color: var(--navigator-color); border: 1px solid rgba(150, 150, 150, 0.3); box-shadow: #131313 0px 0px 10px;'></a>" +
    "    <div>\n" +
    "        <a class='anav' href=\"./main.html\">Главная</a>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <a class='anav' href=\"FirstSemester.html\">Первый семестр</a>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <a class='anav' href=\"\">Второй семестр</a>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <a class='anav' href=\"Services.html\">Услуги</a>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <a class='anav' href=\"\">Авторизация</a>\n" +
    "    </div>\n" +
    "</div>" +
    "<div style=\"display: flex; justify-content: space-between;\">\n" +
    "    <div style=\"text-align: center;\">\n" +
    "        <img src=\"Logo.svg\" class='logo' height=\"50\" alt=\"Logo\">\n" +
    "        <p style=\"margin: 2px;\">Logo</p>\n" +
    "    </div>\n" +
    "    <div style=\"text-align: end;\">\n" +
    "        <p>Группа ЭФБО-04-23</p>\n" +
    "        <p>Валянский Андрей Максимович</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div id='topmenu' class=\"navigator\">\n" +
    "    <div>\n" +
    "        <a class='anav' href=\"./main.html\">Главная</a>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <a class='anav' href=\"FirstSemester.html\">Первый семестр</a>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <a class='anav' href=\"\">Второй семестр</a>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <a class='anav' href=\"Services.html\">Услуги</a>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <a class='anav' href=\"\">Авторизация</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div style='display: flex; justify-content: space-between'>" +
    "<a href=\"javascript:void(0);\" onclick=\"hidemenu()\"><img src=\"burger-menu-left.svg\" style='display: flex; height: 35px; width: 35px; margin-top: 10px; margin-bottom: 10px; backdrop-filter: blur(10px) brightness(0.5); border-radius: 10px; background-color: var(--navigator-color); border: 1px solid rgba(150, 150, 150, 0.3); box-shadow: #131313 0px 0px 10px;'></a>" +
    "<a style='position: sticky; top: 10px;' href=\"javascript:void(0);\" onclick=\"hidetopmenu()\"><img src=\"burger-menu-right.svg\"  class=\"topmenubutton\" style='height: 35px; width: 35px; margin-top: 10px; margin-bottom: 10px; backdrop-filter: blur(10px) brightness(0.5); border-radius: 10px; background-color: var(--navigator-color); border: 1px solid rgba(150, 150, 150, 0.3); box-shadow: #131313 0px 0px 10px;'></a>" +
    "</div>")
document.getElementById("navigation").innerHTML = "" +
    "        <p style='margin-top: 0; margin-bottom: 0.5em'>Навигация по странице:</p>\n" +
    "        <div><a class='anav' href=\"main.html#frontend\">Фронтенд</a></div>\n" +
    "        <div><a class='anav' href=\"main.html#backend\">Бэкенд</a></div>";
document.getElementById("body").insertAdjacentHTML('beforeend', "" +
    "<div class='buttom'>\n" +
    "    <p>© Валянский Андрей Максимович, 2024</p>\n" +
    "    <div class='socialblock'>\n" +
    "        <div>\n" +
    "            <a href=\"\"><img class='social' src=\"WhatsApp.svg\" height=\"30\" alt=\"WhatsApp\"></a>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <a href=\"\"><img class='social' src=\"vk-logo-svgrepo-com.svg\" height=\"30\" alt=\"VK\"></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>")
function hidemenu() {
    const x = document.getElementById("navigation");
    if (x.style.display === "block") {
        x.style.animation = "slideout 0.5s 1";
        x.style.animationTimingFunction = "ease-in-out"
        x.addEventListener("animationend", function handleAnimationEnd(event) {
            x.style.display = "none";
            x.removeEventListener("animationend", handleAnimationEnd);
        });
    } else {
        x.style.display = "block";
        x.style.animation = "slidein 0.5s 1 ";
        x.style.animationTimingFunction = "ease-in-out"
    }
}

function hidetopmenu() {
    const x = document.getElementById("fullmenu");
    const body = document.getElementById("body");
    if (x.classList.contains("flex")) {
        body.classList.remove("body");
        x.style.animation = "menuout 0.5s 1";
        x.addEventListener("animationend", function handleAnimationEnd(event) {
            x.classList.remove("flex");
            x.removeEventListener("animationend", handleAnimationEnd);
        });
    } else {
        x.classList.add("flex");
        body.classList.add("body");
        x.style.animation = "menuin 0.5s 1";
    }
}