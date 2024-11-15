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

function injectMeta(head) {
    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'utf-8');
    head.appendChild(metaCharset);

    const metaViewport = document.createElement('meta');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1');
    metaViewport.setAttribute('name', 'viewport');
    head.appendChild(metaViewport);

    const linkCSS = document.createElement('link');
    linkCSS.setAttribute('href', '/css/main.css');
    linkCSS.setAttribute('rel', 'stylesheet');
    head.appendChild(linkCSS);

    const title = document.createElement('title');
    title.textContent = 'Luca Nerlich';
    head.appendChild(title);

    const metaDescription = document.createElement('meta');
    metaDescription.setAttribute('content', 'Luca Nerlich Games Blog');
    metaDescription.setAttribute('name', 'description');
    head.appendChild(metaDescription);

    const metaOgTitle = document.createElement('meta');
    metaOgTitle.setAttribute('content', '');
    metaOgTitle.setAttribute('property', 'og:title');
    head.appendChild(metaOgTitle);

    const metaOgType = document.createElement('meta');
    metaOgType.setAttribute('content', '');
    metaOgType.setAttribute('property', 'og:type');
    head.appendChild(metaOgType);

    const metaOgUrl = document.createElement('meta');
    metaOgUrl.setAttribute('content', '');
    metaOgUrl.setAttribute('property', 'og:url');
    head.appendChild(metaOgUrl);

    const metaOgImage = document.createElement('meta');
    metaOgImage.setAttribute('content', '');
    metaOgImage.setAttribute('property', 'og:image');
    head.appendChild(metaOgImage);

    const linkFavicon = document.createElement('link');
    linkFavicon.setAttribute('href', '/favicon.ico');
    linkFavicon.setAttribute('rel', 'icon');
    linkFavicon.setAttribute('sizes', 'any');
    head.appendChild(linkFavicon);

    const linkIconSvg = document.createElement('link');
    linkIconSvg.setAttribute('href', '/icon.svg');
    linkIconSvg.setAttribute('rel', 'icon');
    linkIconSvg.setAttribute('type', 'image/svg+xml');
    head.appendChild(linkIconSvg);

    const linkAppleTouchIcon = document.createElement('link');
    linkAppleTouchIcon.setAttribute('href', '/icon.png');
    linkAppleTouchIcon.setAttribute('rel', 'apple-touch-icon');
    head.appendChild(linkAppleTouchIcon);

    const linkManifest = document.createElement('link');
    linkManifest.setAttribute('href', '/site.webmanifest');
    linkManifest.setAttribute('rel', 'manifest');
    head.appendChild(linkManifest);

    const metaThemeColor = document.createElement('meta');
    metaThemeColor.setAttribute('content', '#fafafa');
    metaThemeColor.setAttribute('name', 'theme-color');
    head.appendChild(metaThemeColor);
}

async function loadHead(head) {
    await injectMeta(head);
    await addUmamiAnalytics(head);
}

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
