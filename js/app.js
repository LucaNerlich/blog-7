import {loadFooter, loadHeader, setupTheme} from "./blocks/base.js";
import {loadScript} from "./vendor/helix.js";


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

const HIGHLIGHT_JS_VERSION = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/';
const SCRIPT_LIST = [
    'highlight.min.js',
    'languages/xml.min.js',
    'languages/bash.min.js',
    'languages/css.min.js',
    'languages/java.min.js',
    'languages/javascript.min.js',
    'languages/typescript.min.js',
    'languages/rust.min.js',
    'languages/python.min.js',
    'languages/json.min.js',
    'languages/yaml.min.js',
    'languages/dockerfile.min.js',
    'languages/nginx.min.js',
    'languages/scss.min.js',
    'languages/markdown.min.js',
];

/**
 * Loads data lazily.
 * @param {Document} doc The container element
 */
async function loadLazy(doc) {
    await loadScript(HIGHLIGHT_JS_VERSION + SCRIPT_LIST.shift());
    await Promise.all(SCRIPT_LIST.map((script) => loadScript(HIGHLIGHT_JS_VERSION + script)));
    hljs.highlightAll();
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
    // eslint-disable-next-line import/no-cycle
    window.setTimeout(() => import('./delayed.js'), 1000);
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
