// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="preface.html">Preface</a></li><li class="chapter-item "><a href="who-book.html"><strong aria-hidden="true">1.</strong> Who this book is for</a></li><li class="chapter-item "><a href="how-to.html"><strong aria-hidden="true">2.</strong> How to use this book</a></li><li class="chapter-item "><div><strong aria-hidden="true">3.</strong> Acknowledgements</div></li><li class="chapter-item "><div><strong aria-hidden="true">4.</strong> How to Cite</div></li><li class="chapter-item affix "><li class="part-title">User Guide</li><li class="chapter-item "><a href="introduction.html"><strong aria-hidden="true">5.</strong> Introduction</a></li><li class="chapter-item "><a href="installation.html"><strong aria-hidden="true">6.</strong> Installation</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item "><a href="system/intro.html"><strong aria-hidden="true">7.</strong> Core Concepts</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="intro/node.html"><strong aria-hidden="true">7.1.</strong> Node</a></li><li class="chapter-item "><a href="intro/network.html"><strong aria-hidden="true">7.2.</strong> Network</a></li><li class="chapter-item "><a href="intro/attrs.html"><strong aria-hidden="true">7.3.</strong> Attributes</a></li><li class="chapter-item "><a href="intro/template.html"><strong aria-hidden="true">7.4.</strong> String Template</a></li><li class="chapter-item "><a href="intro/node-func.html"><strong aria-hidden="true">7.5.</strong> Node Function</a></li><li class="chapter-item "><a href="intro/network-func.html"><strong aria-hidden="true">7.6.</strong> Network Function</a></li><li class="chapter-item "><a href="intro/task.html"><strong aria-hidden="true">7.7.</strong> Task</a></li><li class="chapter-item "><a href="intro/further.html"><strong aria-hidden="true">7.8.</strong> Further Reading</a></li></ol></li><li class="chapter-item "><div><strong aria-hidden="true">8.</strong> Nadi System</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><div><strong aria-hidden="true">8.1.</strong> Nadi Core</div></li><li class="chapter-item "><div><strong aria-hidden="true">8.2.</strong> Nadi Plugin</div></li><li class="chapter-item "><div><strong aria-hidden="true">8.3.</strong> Nadi Py</div></li><li class="chapter-item "><div><strong aria-hidden="true">8.4.</strong> Nadi CLI</div></li><li class="chapter-item "><div><strong aria-hidden="true">8.5.</strong> Nadi GUI</div></li></ol></li><li class="chapter-item "><a href="system/extensions.html"><strong aria-hidden="true">9.</strong> Nadi Extension Capabilities</a></li><li class="chapter-item "><a href="plugins/index.html"><strong aria-hidden="true">10.</strong> List of All Functions</a></li><li class="chapter-item affix "><li class="part-title">Developer Guide</li><li class="chapter-item "><a href="dev/plugins.html"><strong aria-hidden="true">11.</strong> Plugin Development</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><div><strong aria-hidden="true">11.1.</strong> Internal Plugins</div></li><li class="chapter-item "><div><strong aria-hidden="true">11.2.</strong> External Plugins</div></li><li class="chapter-item "><div><strong aria-hidden="true">11.3.</strong> Node Functions</div></li><li class="chapter-item "><div><strong aria-hidden="true">11.4.</strong> Network Functions</div></li></ol></li><li class="chapter-item "><li class="part-title">User Reference</li><li class="chapter-item "><a href="example-usage.html"><strong aria-hidden="true">12.</strong> Example Usage</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="example/tables.html"><strong aria-hidden="true">12.1.</strong> Making Tables</a></li><li class="chapter-item "><a href="example/gen-report.html"><strong aria-hidden="true">12.2.</strong> Generating Reports</a></li><li class="chapter-item "><a href="example/timeseries.html"><strong aria-hidden="true">12.3.</strong> Analysing Timeseries</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="example/data-gap.html"><strong aria-hidden="true">12.3.1.</strong> Looking at Data Gaps</a></li><li class="chapter-item "><a href="example/data-gap-vis.html"><strong aria-hidden="true">12.3.2.</strong> Visualizing Data Gaps</a></li></ol></li></ol></li><li class="chapter-item "><a href="plugins/intro.html"><strong aria-hidden="true">13.</strong> Internal Plugins</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="plugins/attrs.html"><strong aria-hidden="true">13.1.</strong> Attrs</a></li><li class="chapter-item "><a href="plugins/command.html"><strong aria-hidden="true">13.2.</strong> Command</a></li><li class="chapter-item "><a href="plugins/connections.html"><strong aria-hidden="true">13.3.</strong> Connections</a></li><li class="chapter-item "><a href="plugins/core.html"><strong aria-hidden="true">13.4.</strong> Core</a></li><li class="chapter-item "><a href="plugins/debug.html"><strong aria-hidden="true">13.5.</strong> Debug</a></li><li class="chapter-item "><a href="plugins/logic.html"><strong aria-hidden="true">13.6.</strong> Logic</a></li><li class="chapter-item "><a href="plugins/regex.html"><strong aria-hidden="true">13.7.</strong> Regex</a></li><li class="chapter-item "><a href="plugins/render.html"><strong aria-hidden="true">13.8.</strong> Render</a></li><li class="chapter-item "><a href="plugins/series.html"><strong aria-hidden="true">13.9.</strong> Series</a></li><li class="chapter-item "><a href="plugins/table.html"><strong aria-hidden="true">13.10.</strong> Table</a></li><li class="chapter-item "><a href="plugins/timeseries.html"><strong aria-hidden="true">13.11.</strong> Timeseries</a></li><li class="chapter-item "><a href="plugins/visuals.html"><strong aria-hidden="true">13.12.</strong> Visuals</a></li></ol></li><li class="chapter-item "><a href="plugins/intro-ex.html"><strong aria-hidden="true">14.</strong> External Plugins</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="plugins/dams.html"><strong aria-hidden="true">14.1.</strong> Dams</a></li><li class="chapter-item "><a href="plugins/datafill.html"><strong aria-hidden="true">14.2.</strong> Data Fill</a></li><li class="chapter-item "><a href="plugins/errors.html"><strong aria-hidden="true">14.3.</strong> Errors</a></li><li class="chapter-item "><a href="plugins/fancy_print.html"><strong aria-hidden="true">14.4.</strong> Fancy Print</a></li><li class="chapter-item "><a href="plugins/gnuplot.html"><strong aria-hidden="true">14.5.</strong> Gnuplot</a></li><li class="chapter-item "><a href="plugins/graphics.html"><strong aria-hidden="true">14.6.</strong> Graphics</a></li><li class="chapter-item "><a href="plugins/graphviz.html"><strong aria-hidden="true">14.7.</strong> Graphviz</a></li><li class="chapter-item "><a href="plugins/html.html"><strong aria-hidden="true">14.8.</strong> HTML</a></li><li class="chapter-item "><a href="plugins/nadi_gis.html"><strong aria-hidden="true">14.9.</strong> Nadi GIS</a></li><li class="chapter-item "><a href="plugins/print_node.html"><strong aria-hidden="true">14.10.</strong> Print Node</a></li><li class="chapter-item "><a href="plugins/streamflow.html"><strong aria-hidden="true">14.11.</strong> Streamflow</a></li></ol></li><li class="chapter-item "><li class="part-title">Developer Reference</li><li class="chapter-item "><a href="devref/data-structures.html"><strong aria-hidden="true">15.</strong> Data Structure</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="devref/node.html"><strong aria-hidden="true">15.1.</strong> Node</a></li><li class="chapter-item "><a href="devref/network.html"><strong aria-hidden="true">15.2.</strong> Network</a></li><li class="chapter-item "><a href="devref/timeseries.html"><strong aria-hidden="true">15.3.</strong> Timeseries</a></li><li class="chapter-item "><a href="devref/string-templates.html"><strong aria-hidden="true">15.4.</strong> String Templates</a></li><li class="chapter-item "><a href="devref/tables.html"><strong aria-hidden="true">15.5.</strong> Tables</a></li><li class="chapter-item "><a href="devref/file-templates.html"><strong aria-hidden="true">15.6.</strong> File Templates</a></li><li class="chapter-item "><a href="devref/tasks.html"><strong aria-hidden="true">15.7.</strong> Tasks</a></li><li class="chapter-item "><a href="devref/node-functions.html"><strong aria-hidden="true">15.8.</strong> Node Functions</a></li><li class="chapter-item "><a href="devref/network-functions.html"><strong aria-hidden="true">15.9.</strong> Network Functions</a></li></ol></li><li class="chapter-item "><li class="part-title">Developer Notes and Future Direction</li><li class="chapter-item "><a href="notes/intro.html"><strong aria-hidden="true">16.</strong> Developer Notes</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="notes/motivations.html"><strong aria-hidden="true">16.1.</strong> Motivation</a></li><li class="chapter-item "><a href="notes/rust.html"><strong aria-hidden="true">16.2.</strong> Why Rust?</a></li><li class="chapter-item "><div><strong aria-hidden="true">16.3.</strong> Plugin System Experiments</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><div><strong aria-hidden="true">16.3.1.</strong> First Prototype: cdylib</div></li><li class="chapter-item "><div><strong aria-hidden="true">16.3.2.</strong> Second Prototype: abi_stable</div></li></ol></li><li class="chapter-item "><a href="notes/writing-book.html"><strong aria-hidden="true">16.4.</strong> Writing this Book</a></li></ol></li><li class="chapter-item "><div><strong aria-hidden="true">17.</strong> Future Ideas to Implement</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="future/optimization.html"><strong aria-hidden="true">17.1.</strong> Optimization Algorithms</a></li><li class="chapter-item "><a href="future/interactive-plots.html"><strong aria-hidden="true">17.2.</strong> Interactive Plots</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
