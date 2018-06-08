var cm_config_defaults = {
        home_page: "https://cuzin-pro.blogspot.com/",
        max_result: 7,
        t_w: 32,
        t_h: 32,
        summary: 9999,
        new_tab_link: true,
        ct_id: "comments-container",
        new_cm: " Komentar Baru!",
        interval: 30000,
        alert: true
    },
    _cookie = {
        set: function (_0x7e58x5, _0x7e58x6, _0x7e58x7) {
            var i, _0x7e58x9;
            if (_0x7e58x7) {
                i = new Date();
                i.setTime(i.getTime() + (_0x7e58x7 * 24 * 60 * 60 * 1000));
                _0x7e58x9 = "; expires=" + i.toGMTString();
            } else {
                _0x7e58x9 = "";
            };
            document.cookie = _0x7e58x5 + "=" + _0x7e58x6 + _0x7e58x9 + "; path=/";
        },
        get: function (_0x7e58x6) {
            var _0x7e58xa = _0x7e58x6 + "=",
                _0x7e58x9 = document.cookie.split(";"),
                _0x7e58x7;
            for (var _0x7e58x5 = 0; _0x7e58x5 < _0x7e58x9.length; _0x7e58x5++) {
                _0x7e58x7 = _0x7e58x9[_0x7e58x5];
                while (_0x7e58x7.charAt(0) == " ") {
                    _0x7e58x7 = _0x7e58x7.substring(1, _0x7e58x7.length);
                };
                if (_0x7e58x7.indexOf(_0x7e58xa) == 0) {
                    return _0x7e58x7.substring(_0x7e58xa.length, _0x7e58x7.length);
                };
            };
            return null;
        },
        del: function (_0x7e58xb) {
            this.set(_0x7e58xb, "", -1);
        }
    },
    tt_cm = (_cookie.get("tt_cm")) ? _cookie.get("tt_cm") : 0,
    doc_title = document.title;
for (var i in cm_config_defaults) {
    cm_config_defaults[i] = (typeof (cm_config[i]) == "undefined") ? cm_config_defaults[i] : cm_config[i];
};

function showRecentComments(_0x7e58x12) {
    var _0x7e58x13 = _0x7e58x12.feed.entry,
        _0x7e58x14 = parseInt(_0x7e58x12.feed["openSearch$totalResults"].$t, 10),
        _0x7e58x15 = "",
        _0x7e58x16 = tt_cm,
        _0x7e58xe = cm_config_defaults;
    if (_0x7e58x16 < _0x7e58x14) {
        if (_0x7e58xe.alert === true) {
            alert((_0x7e58x14 - _0x7e58x16) + _0x7e58xe.new_cm);
        } else {
            if (_0x7e58xe.alert === false) {
                document.title = "(" + (_0x7e58x14 - _0x7e58x16) + _0x7e58xe.new_cm + ") " + doc_title;
            } else {
                _0x7e58xe.alert((_0x7e58x14 - _0x7e58x16), _0x7e58xe.new_cm);
            };
        };
    };
    _0x7e58x15 = "<ul class=\"cm-outer\">";
    for (var i = 0; i < _0x7e58x13.length; i++) {
        for (var _0x7e58x7 = 0; _0x7e58x7 < _0x7e58x13[i].link.length; _0x7e58x7++) {
            if (_0x7e58x13[i].link[_0x7e58x7].rel == "alternate") {
                link = _0x7e58x13[i].link[_0x7e58x7].href;
                break;
            };
        };
        var _0x7e58x17 = link.lastIndexOf("/") + 1,
            _0x7e58x18 = link.lastIndexOf("."),
            _0x7e58x19 = link.split("-").join(" ").substring(_0x7e58x17, _0x7e58x18) + "&hellip;";
        author = _0x7e58x13[i].author[0];
        name = author.name["$t"];
        avatar = author["gd$image"].src.replace(/\/s[0-9]+(\-c|\/)/, "/s" + _0x7e58xe.t_w + "$1").replace(/http\:\/\/www.google.com\/url\?source\=imglanding(.*?)q\=/i, "").replace(/\.(jpg|jpeg|png|bmp|gif)(.*?)$/i, ".$1");
        profile = (author.uri) ? author.uri["$t"] : "#nope";
        date = _0x7e58x13[i]["gd$extendedProperty"][1].value;
        content = ("content" in _0x7e58x13[i]) ? _0x7e58x13[i].content["$t"].replace(/<br ?\/?>/ig, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "") : "";
        nt = (_0x7e58xe.new_tab_link) ? " target=\"_blank\"" : "";
        content = (content.length > _0x7e58xe.summary) ? content.substring(0, _0x7e58xe.summary) + "&hellip;" : content;
        _0x7e58x15 += "<li>";
        _0x7e58x15 += "<div class=\"cm-header\"><strong><span class=\"tentacgia\"><a href=\"" + profile + "\" title=\"" + name + "\"" + nt + ">" + name + "</a></span> Đăng ngày  " + date + " tại: <span class=\"tentacbaiviet\"><a class=\"tieudebaidang\" href=\"" + link + "\" title=\"" + _0x7e58x19 + "\"" + nt + ">" + _0x7e58x19 + "</a></span></strong></div>";
        _0x7e58x15 += "<div class=\"cm-content\"><a href=\"" + profile + "\" title=\"" + name + "\"" + nt + "><img alt=\"Đang tải ảnh...\" style=\"width:" + _0x7e58xe.t_w + "px;height:" + _0x7e58xe.t_h + "px;\" src=\"" + avatar + "\"></a>";
        _0x7e58x15 += "<span class=\"cm-text\">  Bình luận: " + content + "</span>";
        _0x7e58x15 += "</div></li>";
    };
    _0x7e58x15 += "</ul>";
    document.getElementById(_0x7e58xe.ct_id).innerHTML = _0x7e58x15;
    _cookie.set("tt_cm", _0x7e58x14, 7000);
    tt_cm = _0x7e58x14;
}(function () {
    var _0x7e58xc = document.getElementsByTagName("head")[0],
        _0x7e58xd = document.createElement("script"),
        _0x7e58xe = cm_config_defaults;
    _0x7e58xd.type = "text/javascript";
    _0x7e58xd.id = "cm-feed-script";
    _0x7e58xd.src = _0x7e58xe.home_page + "/feeds/comments/default?alt=json-in-script&redirect=false&max-results=" + _0x7e58xe.max_result + "&callback=showRecentComments";
    _0x7e58xc.appendChild(_0x7e58xd);
    setInterval(function () {
        var _0x7e58xf = document.createElement("script");
        _0x7e58xf.type = "text/javascript";
        _0x7e58xf.id = "cm-feed-script";
        _0x7e58xf.src = _0x7e58xe.home_page + "/feeds/comments/default?alt=json-in-script&redirect=false&max-results=" + _0x7e58xe.max_result + "&callback=showRecentComments";
        var _0x7e58x10 = document.getElementById("cm-feed-script");
        _0x7e58x10.parentNode.removeChild(_0x7e58x10);
        _0x7e58xc.appendChild(_0x7e58xf);
    }, _0x7e58xe.interval);
})();
