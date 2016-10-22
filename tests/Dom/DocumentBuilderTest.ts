import {AbstractDomTestCase} from "../../dist";
import {DocumentBuilder} from "../../dist/Dom/index";

export class DocumentBuilderTest extends AbstractDomTestCase {

    public testSetSource() {
        let builder: DocumentBuilder = new DocumentBuilder();
        builder.setSource("<p class='foo' id='foo'></p><p class='bar'></p>");
        let doc: Document = builder.getMock();

        this.assertElementsCount(doc, ".foo", 1);
        this.assertElementsCount(doc, ".baz", 0);
        let a: HTMLAnchorElement = doc.createElement("a");

        a.className = "foo";
        doc.getElementById("foo").appendChild(a);

        this.assertElementsCount(doc, ".foo", 2);
    }

    public testCreateFromUrl() {
        let builder: DocumentBuilder = new DocumentBuilder();
        let doc: Document = builder.setLocation("http://example.com", true).getMock();
        this.assertEquals("Example Domain", doc.title);
    }

    public testDomInterfaces() {
        let builder: DocumentBuilder = new DocumentBuilder();
        builder.setSource(`
        <html id="html">
        <head id="head">
            <link id="link"/>
            <meta charset="utf-8" id="meta"/>
            <style id="style"></style>
            <title id="title"></title>
        </head>
        <body id="body">
            <a id="anchor" href="/"></a>
            <area shape="" coords="" href="/" alt="" id="area">
            <br id="br"/>
            <base id="base" href="/">
            <button id="button"></button>
            <canvas id="canvas" class="canvas"></canvas>
            <dl id="dl"></dl>
            <data id="data"></data>
            <datalist id="datalist"></datalist>
            <dialog id="dialog"></dialog>
            <div id="div"></div>
            <embed id="embed"></embed>
            <fieldset id="fieldset">
                <legend id="legend"></legend>
                <input/>
            </fieldset>
            <form id="form"></form>
            <hr id="hr"/>
            <h1 id="heading"></h1>
            <iframe id="iframe"></iframe>
            <picture id="picture">
            <img src="foo.jpg" id="image">
            </picture>
            <input type="password" id="input"/>
            <ul id="ul">
                <li id="li"></li>
            </ul>
            <label for="input" id="label"></label>
            <map id="map"></map>
            <meter value="1" id="meter"></meter>
            <ins id="ins">Modified</ins>
            <del id="del">Deleted</del>
            <ol id="ol"></ol>
            <object id="object">
                <param name="foo" value="bar" id="param"/>
            </object>
            <select id="select">
                <optgroup label="Optgroup" id="optgroup">
                    <option id="option"></option>                
                </optgroup>
            </select>
            <output id="output"></output>
            <p id="paragraph"></p>
            <pre id="pre"></pre>
            <progress id="progress" value="70" max="100">70 %</progress>
            <q id="quote"></q>
            <blockquote id="blockquote"></blockquote>
            <script id="script"></script>
            <shadow id="shadow"></shadow>
            <span id="span"></span>
            <textarea id="textarea"></textarea>
            <time id="time"></time>
            <foobarchik id="foobarchik">HTMLUnknownElement</foobarchik>
         </body>
         </html>
        `);
        let doc: Document = builder.getMock();

        this.assertInstanceOf(HTMLAnchorElement, doc.getElementById("anchor"));
        this.assertInstanceOf(HTMLAreaElement, doc.getElementById("area"));
        this.assertInstanceOf(HTMLBRElement, doc.getElementById("br"));
        this.assertInstanceOf(HTMLBaseElement, doc.getElementById("base"));
        this.assertInstanceOf(HTMLBodyElement, doc.getElementById("body"));
        this.assertInstanceOf(HTMLButtonElement, doc.getElementById("button"));
        this.assertInstanceOf(HTMLCanvasElement, doc.getElementById("canvas"));
        this.assertInstanceOf(HTMLCollection, doc.getElementsByClassName("canvas"));
        this.assertInstanceOf(HTMLDListElement, doc.getElementById("dl"));
        /**
         * Not present in TypeScript
         */
        // this.assertInstanceOf(HTMLDataElement, doc.getElementById("data"));
        this.assertInstanceOf(HTMLDataListElement, doc.getElementById("datalist"));
        /**
         * Not supported in TypeScript
         */
        // this.assertInstanceOf(HTMLDialogElement, doc.getElementById("dialog"));
        this.assertInstanceOf(HTMLDivElement, doc.getElementById("div"));
        this.assertInstanceOf(Document, doc);
        this.assertInstanceOf(HTMLDocument, doc);
        this.assertInstanceOf(HTMLElement, doc.getElementById("div"));
        this.assertInstanceOf(HTMLEmbedElement, doc.getElementById("embed"));
        this.assertInstanceOf(HTMLFieldSetElement, doc.getElementById("fieldset"));
        /**
         * Not present in standard typescript library and not supports by jsdom
         * https://developer.mozilla.org/ru/docs/Web/API/HTMLFormControlsCollection
         */
        // this.assertInstanceOf(HTMLFormControlsCollection, doc.getElementById("fieldset").elements);
        // this.assertInstanceOf(HTMLCollection, doc.getElementById("fieldset").elements);
        this.assertInstanceOf(HTMLFormElement, doc.getElementById("form"));
        this.assertInstanceOf(HTMLHRElement, doc.getElementById("hr"));
        this.assertInstanceOf(HTMLHeadElement, doc.getElementById("head"));
        this.assertInstanceOf(HTMLHeadingElement, doc.getElementById("heading"));
        this.assertInstanceOf(HTMLHtmlElement, doc.getElementById("html"));
        this.assertInstanceOf(HTMLHtmlElement, doc.documentElement);
        this.assertInstanceOf(HTMLIFrameElement, doc.getElementById("iframe"));
        this.assertInstanceOf(HTMLImageElement, doc.getElementById("image"));
        this.assertInstanceOf(HTMLInputElement, doc.getElementById("input"));
        /**
         * Not present in TypeScript.
         * Not support by jsdom
         * See:
         * https://developer.mozilla.org/ru/docs/Web/API/HTMLKeygenElement
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen
         */
        // this.assertInstanceOf(HTMLKeygenElement, doc.getElementById("input"));
        this.assertInstanceOf(HTMLLIElement, doc.getElementById("li"));
        this.assertInstanceOf(HTMLLabelElement, doc.getElementById("label"));
        this.assertInstanceOf(HTMLLegendElement, doc.getElementById("legend"));
        this.assertInstanceOf(HTMLLinkElement, doc.getElementById("link"));
        this.assertInstanceOf(HTMLMapElement, doc.getElementById("map"));
        this.assertInstanceOf(HTMLMetaElement, doc.getElementById("meta"));
        this.assertInstanceOf(HTMLMeterElement, doc.getElementById("meter"));
        this.assertInstanceOf(HTMLModElement, doc.getElementById("ins"));
        this.assertInstanceOf(HTMLModElement, doc.getElementById("del"));
        this.assertInstanceOf(HTMLOListElement, doc.getElementById("ol"));
        this.assertInstanceOf(HTMLObjectElement, doc.getElementById("object"));
        this.assertInstanceOf(HTMLOptGroupElement, doc.getElementById("optgroup"));
        this.assertInstanceOf(HTMLOptionElement, doc.getElementById("option"));

        let selectEl = <HTMLSelectElement> doc.getElementById("select");
        this.assertInstanceOf(HTMLCollection, selectEl.options);
        /**
         *
         * Not supported by jsdom now 2016-10-21
         * Get error: HTMLOptionsCollection is not defined
         */
        // this.assertInstanceOf(HTMLOptionsCollection, selectEl.options);
        /**
         * Not present in TypeScript.
         * See:
         * https://developer.mozilla.org/ru/docs/Web/API/HTMLOutputElement#Specifications
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output
         */
        // this.assertInstanceOf(HTMLOutputElement, doc.getElementById("output"));
        this.assertInstanceOf(HTMLParagraphElement, doc.getElementById("paragraph"));
        this.assertInstanceOf(HTMLParamElement, doc.getElementById("param"));
        /**
         * Present in TypeScript, but not support by jsdom
         */
        // this.assertInstanceOf(HTMLPictureElement, doc.getElementById("picture"));
        this.assertInstanceOf(HTMLPreElement, doc.getElementById("pre"));
        this.assertInstanceOf(HTMLProgressElement, doc.getElementById("progress"));
        this.assertInstanceOf(HTMLQuoteElement, doc.getElementById("quote"));
        this.assertInstanceOf(HTMLQuoteElement, doc.getElementById("blockquote"));
        this.assertInstanceOf(HTMLScriptElement, doc.getElementById("script"));
        this.assertInstanceOf(HTMLSelectElement, doc.getElementById("select"));
        /**
         * Not present in TypeScript
         * Not supports by jsdom
         * See https://developer.mozilla.org/ru/docs/Web/API/HTMLShadowElement
         */
        // this.assertInstanceOf(HTMLShadowElement, doc.getElementById("shadow"));
        this.assertInstanceOf(HTMLSpanElement, doc.getElementById("span"));
        this.assertInstanceOf(HTMLStyleElement, doc.getElementById("style"));
        this.assertInstanceOf(HTMLTextAreaElement, doc.getElementById("textarea"));
        /**
         * Not present in TypeScript, but support well by jsdom
         */
        // this.assertInstanceOf(HTMLTimeElement, doc.getElementById("time"));
        this.assertInstanceOf(HTMLTitleElement, doc.getElementById("title"));
        this.assertInstanceOf(HTMLUnknownElement, doc.getElementById("foobarchik"));
        this.assertInstanceOf(HTMLUListElement, doc.getElementById("ul"));
    }

    public testTableDomInterfaces() {
        let builder: DocumentBuilder = new DocumentBuilder();
        builder.setSource(`
            <table id="table">
                <caption id="tableCaption"></caption>
                <thead id="thead"></thead>
                <tfoot id="tfoot"></tfoot>
                <tbody id="tbody">
                <colgroup id="colgroup">
                    <col id="col" span="2">
                </colgroup>
                <tr id="tr">
                    <th id="th"></th>
                    <td id="td"></td>
                </tr>
                </tbody>
            </table>
        `);
        let doc = builder.getMock();
        this.assertInstanceOf(HTMLTableCaptionElement, doc.getElementById("tableCaption"));
        this.assertInstanceOf(HTMLTableCellElement, doc.getElementById("th"));
        this.assertInstanceOf(HTMLTableCellElement, doc.getElementById("td"));
        this.assertInstanceOf(HTMLTableColElement, doc.getElementById("col"));
        this.assertInstanceOf(HTMLTableColElement, doc.getElementById("colgroup"));
        this.assertInstanceOf(HTMLTableDataCellElement, doc.getElementById("td"));
        this.assertInstanceOf(HTMLTableElement, doc.getElementById("table"));
        this.assertInstanceOf(HTMLTableHeaderCellElement, doc.getElementById("th"));
        this.assertInstanceOf(HTMLTableRowElement, doc.getElementById("tr"));
        this.assertInstanceOf(HTMLTableSectionElement, doc.getElementById("thead"));
        this.assertInstanceOf(HTMLTableSectionElement, doc.getElementById("tfoot"));
        this.assertInstanceOf(HTMLTableSectionElement, doc.getElementById("tbody"));
    }

    public testMediaDomInterfaces() {
        let builder: DocumentBuilder = new DocumentBuilder();
        builder.setSource(`
            <audio id="audio"></audio>
            <video id="video">
                <source id="source"/>
                <track id="track" src="foo"/>
            </video>
        `);
        let doc: Document = builder.getMock();

        this.assertInstanceOf(HTMLAudioElement, doc.getElementById("audio"));
        this.assertInstanceOf(HTMLMediaElement, doc.getElementById("audio"));
        this.assertInstanceOf(HTMLMediaElement, doc.getElementById("video"));
        this.assertInstanceOf(HTMLSourceElement, doc.getElementById("source"));
        this.assertInstanceOf(HTMLTrackElement, doc.getElementById("track"));
        this.assertInstanceOf(HTMLVideoElement, doc.getElementById("video"));

    }
}