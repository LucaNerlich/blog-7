import {loadFooter, loadHead, loadHeader, setupSeo, setupTheme, setupToc} from "./blocks/base.js";

/**
 * Loads everything needed for the initial page.
 * @param {Document} doc The container element
 */
async function loadInitial(doc) {
    document.documentElement.lang = 'de';

    await loadHead(doc.querySelector('head'));
    await loadHeader(doc.querySelector('header'));
    await loadFooter(doc.querySelector('footer'));
    await setupToc(doc.getElementById("toc"));
    await setupSeo(doc.querySelector("main"));
    await setupTheme(doc.getElementById('theme-switcher'));

    // Scroll into anchor view
    const {hash} = window.location;
    const element = hash ? doc.getElementById(hash.substring(1)) : false;
    if (hash && element) {
        element.scrollIntoView();
    }
}

async function loadPage() {
    await loadInitial(document);
}

loadPage().then(() => {
    console.debug("Page loaded.")
});
