/**
 * Loads a block named 'header' into header
 * @param {Element} header header element
 * @returns {Promise}
 */
async function loadHeader(header) {

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
    loadFooter,
    setupToc,
    setupSeo,
    setupTheme
}
