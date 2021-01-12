function toggle_theme() {
    const html_tag = document.getElementsByTagName("html")[0]
    
    if (html_tag.hasAttribute("data-theme")) {
        html_tag.removeAttribute("data-theme")
        return window.localStorage.removeItem("site-theme")
    }
    
    html_tag.setAttribute('data-theme', 'dark')
    window.localStorage.setItem("site-theme", "dark")
}

const theme = window.localStorage.getItem("site-theme")
if (theme !== null) {
    const html_tag = document.getElementsByTagName("html")[0]
    html_tag.setAttribute("data-theme", theme)
}

document.getElementById("theme")
        .addEventListener("click", toggle_theme)
