/**
 * Loads a block named 'header' into header
 * @param {Element} header header element
 * @returns {Promise}
 */
async function loadHeader(header) {

}

function addUmamiAnalytics(head) {
    const umamiScript = document.createElement('script')
    umamiScript.src = 'https://umami-t8kgsg4o4wc4o80wgwwo484c.lucanerlich.com/script.js'
    umamiScript.async = false
    umamiScript.defer = true
    umamiScript.setAttribute('data-website-id', 'da42909d-320f-45f7-a929-88d8e8c154c7')

    // Insert the script into the head of the document
    head.appendChild(umamiScript);
}

async function loadHead(head) {
    addUmamiAnalytics(head);
}

/**
 * Loads a block named 'footer' into footer
 * @param footer footer element
 * @returns {Promise}
 */
async function loadFooter(footer) {
    footer.appendChild(document.createElement('hr'));
    const greetings = document.createElement('p');
    greetings.textContent = "Luca. | "

    const backHome = document.createElement('a');
    backHome.href = "/";
    backHome.textContent = "Startseite";
    greetings.appendChild(backHome);

    const themeSwitcher = document.createElement("span");
    themeSwitcher.id = "theme-switcher";
    themeSwitcher.textContent = " | ☀️ / 🌗"
    greetings.appendChild(themeSwitcher);
    footer.appendChild(greetings);
}

async function setupToc(tocList) {
}

async function setupTheme(themeSwitcher) {
    // set default theme
    const cachedTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', cachedTheme ? cachedTheme : 'light');

    // setup theme-switcher button
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
}

async function setupSeo(main) {
    const headline = main.querySelector('h1');
    document.title = headline?.textContent;
}

export {
    loadHeader,
    loadHead,
    loadFooter,
    setupToc,
    setupSeo,
    setupTheme
}
