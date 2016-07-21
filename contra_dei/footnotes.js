//
// Cross-browser floating footnotes
//
// (с) blizzard@riscom.com, 2003
//
// version: 1.0000
//

var footnotesEngine = new FootnotesEngine();

//---------------------------------------------------------------------------

function FootnotesEngine()
{
        this.browserName = "";
        this.browserVersion = 0;
        this.Init = FootnotesEngine_Init;
        this.onanchor = FootnotesEngine_OnAnchor;
        this.oncontrol = FootnotesEngine_OnControl;

        if (document.all && document.plugins)
        {
                this.browserName = "MSIE";
                this.browserVersion = parseInt(
                        (new RegExp("MSIE ([0-9]+)")).exec(navigator.appVersion)[1]
                );
                document.write("<style type=\"text/css\">");
                document.write("DIV.footnotes { display: none; }");
                document.write("</style>");
        }
}

//---------------------------------------------------------------------------

function FootnotesEngine_OnAnchor ()
{
        var box = document.all("footnote" + event.srcElement.hash.substr(1));
        box.children[0].onclick = footnotesEngine.oncontrol;

        if (box.style.display == "block")
                box.style.display = "none";
        else
        {
                if (document.body.clientWidth - event.clientX >= 450)
                        box.style.left = event.clientX;
                else
                {
                        box.style.left = (document.body.clientWidth > 450)
                                ? box.style.left = document.body.clientWidth - 450
                                : box.style.left = document.body.clientLeft;
                }

                box.style.top = event.clientY + document.body.scrollTop + 16;

                box.style.width = document.body.clientWidth -
                        parseInt(box.style.left) - 20; // scrollbar?

                box.style.display = "block";
        }

        return false;
}

//---------------------------------------------------------------------------

function FootnotesEngine_OnControl ()
{
        var element = event.srcElement;
        while (element.className != "footnotes")
                element = element.parentElement;

        element.style.display = "none";

        return false;
}

//---------------------------------------------------------------------------

function FootnotesEngine_Init ()
{
        if (this.browserName != "MSIE" || this.browserVersion < 4)
                return;

        var img = new Image();
        img.src = "close2.html";
        img.src = "close3.html";

        document.write("<style type=\"text/css\">");
        document.write("@import url(\"../footnotes.css\");");
        document.write("</style>");

        for (var i = 0; i < document.links.length; i++)
        {
                var link = document.links[i];
                if (link.className == "footnote")
                {
                        for (var j = 0; j < document.anchors.length; j++)
                        {
                                if (document.anchors[j].name == link.hash.substr(1))
                                {
                                        element = document.anchors[j];
                                        while (element.parentElement.parentElement.className != "footnotes")
                                                element = element.parentElement;

                                        document.write
                                        (
                                                "<div id=\"footnote" + link.hash.substr(1) + "\" class=\"footnotes\">" +
                                                "<a class=\"control\" href=\"\">" +
                                                "<img class=\"control\" src=\"../close2.gif\" onmouseover=\"this.src='../close3.gif'\" onmouseout=\"this.src='../close2.gif'\" alt=\"x\" width=\"14\" height=\"13\" title=\"Нажмите сюда или на ссылку, чтобы закрыть окно\" border=\"0\" hspace=\"0\">" +
                                                "</a>" +
                                                "<div class=\"innerBox\">" +
                                                element.innerHTML +
                                                "</div></div>"
                                        );

                                        link.onclick = FootnotesEngine_OnAnchor;
                                        break;
                                }
                        }
                }
        }
}

//---------------------------------------------------------------------------
