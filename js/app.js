import {loadFooter, loadHeader, setupTheme} from "./blocks/base.js";


/**
 * Loads everything needed for the initial page.
 * @param {Document} doc The container element
 */
async function loadInitial(doc) {
    document.documentElement.lang = 'en';
    const main = doc.querySelector('main');
    if (main) {
    }

    await loadHeader(doc.querySelector('header'));
    await loadFooter(doc.querySelector('footer'));
    await setupTheme(doc.getElementById('theme-switcher'));

    // Scroll into anchor view
    const {hash} = window.location;
    const element = hash ? doc.getElementById(hash.substring(1)) : false;
    if (hash && element) {
        element.scrollIntoView();
    }
}

/**
 * Loads data lazily.
 * @param {Document} doc The container element
 */
function loadLazy(doc) {
    // e.g load blogposts etc
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
    // eslint-disable-next-line import/no-cycle
    window.setTimeout(() => import('./delayed.js'), 3000);
    // load anything that can be postponed to the latest here
}

async function loadPage() {
    await loadInitial(document);
    loadLazy(document);
    loadDelayed();
}

loadPage().then(r => {
    console.debug("Page loaded.")
});
