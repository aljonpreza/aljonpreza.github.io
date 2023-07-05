var systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
var theme = sessionStorage.getItem('theme');

$(window).on("load", function () {
    if (systemInitiatedDark.matches) {
        document.getElementById("theme-toggle").innerHTML = '<span class=\"material-symbols-outlined\">light_mode</span>';
    } else {
        document.getElementById("theme-toggle").innerHTML = '<span class=\"material-symbols-outlined\">dark_mode</span>';
    }

    function prefersColorTest(systemInitiatedDark) {
        if (systemInitiatedDark.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');		
            document.getElementById("theme-toggle").innerHTML = '<span class=\"material-symbols-outlined\">light_mode</span>';
            sessionStorage.setItem('theme', '');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            document.getElementById("theme-toggle").innerHTML = '<span class=\"material-symbols-outlined\">dark_mode</span>';
            sessionStorage.setItem('theme', '');
        }
    }
    systemInitiatedDark.addEventListener("change", prefersColorTest);
});

function modeSwitcher() {
    var theme = sessionStorage.getItem('theme');
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        sessionStorage.setItem('theme', 'light');
        document.getElementById("theme-toggle").innerHTML = '<span class=\"material-symbols-outlined\">dark_mode</span>';
    }	else if (theme === "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        sessionStorage.setItem('theme', 'dark');
        document.getElementById("theme-toggle").innerHTML = '<span class=\"material-symbols-outlined\">light_mode</span>';
    } else if (systemInitiatedDark.matches) {	
        document.documentElement.setAttribute('data-theme', 'light');
        sessionStorage.setItem('theme', 'light');
        document.getElementById("theme-toggle").innerHTML = '<span class=\"material-symbols-outlined\">dark_mode</span>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        sessionStorage.setItem('theme', 'dark');
        document.getElementById("theme-toggle").innerHTML = '<span class=\"material-symbols-outlined\">light_mode</span>';
    }
}

if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    sessionStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = '<span class=\"material-symbols-outlined\">light_mode</span>';
} else if (theme === "light") {
    document.documentElement.setAttribute('data-theme', 'light');
    sessionStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = '<span class=\"material-symbols-outlined\">dark_mode</span>';
}