'use strict';
/** @type {!Array} */
var _0x4f9f = ["use strict", "anyTourID", "Tour Title Default", "Tour Subtitle Default", "#000", "ltr", "line", "Welcome to the interactive tour", "This tour will tell you about the main site functionalities", "", "Continue the unfinished tour?", 'Click "Continue" to start with step on which finished last time.', "right", "New Step Title", "New Step Description", "auto", "uniqueName", "next", "Follow the required conditions to continue.", "Next", "Prev", "Fulfill all conditions!", "Cancel Tour",
    "\u00d7", "Hide Tour Map", "\u2261", "Tour Map", "End Tour", "Start over", "Continue", "Start", "Cancel", "Tour Intro", "Unfinished Tour", '<div class="gWidget">', '<div class="gCover">[modal-cover]</div>', '<div class="gAction">', '<span class="gType">[modal-type]</span>', '<span class="gBtn">[modal-map]</span>', '<span class="gBtn">[modal-close]</span>', '<div class="gTimer">[modal-timer]</div>', "</div>", '<div class="gScroll">', '<div class="gHeader">[modal-header]</div>', '<div class="gContent">[modal-body]</div>',
    '<div class="gFooter">', '<span class="gPage">', '<span class="gPageVal">[step-value]</span>', '<span class="gPageTotal">[step-total]</span>', "</span>", '<span class="gBtn">[modal-prev]</span>', '<span class="gBtn">[modal-next]</span>', '<span class="gBtn">[modal-cancel]</span>', '<span class="gBtn">[modal-start]</span>', '<span class="gBtn">[modal-begin-first]</span>', '<span class="gBtn">[modal-begin-continue]</span>', '<div class="g-map-pos">', '<div class="gMapAction">', '<span class="gBtn">[map-toggle]</span>',
    '<span class="gBtn">[map-hide]</span>', '<div class="gMapHeader">[map-header]</div>', '<div class="gMapContent">[map-content]</div>', '<div class="gMapBufer"></div>', "iGuider", "attr", "fn", "length", "attributes", "specified", "name", "value", "each", "apply", "opt", "lang", "extend", "intro", "continue", "tourMap", "stepsDef", "steps", "modalTemplate", "trim", "mapTemplate", "startStep", "overlayOpacity", "overlayColor", "iGuiderLang", "v", "scrollDoc", "html,body", "gMapPos", "body", "appendTo",
    "g-map-pos-", "position", "addClass", "stepTimerId", "delayAfterId", "delayBeforeId", "duration", "sTop", "sBot", "sLeft", "sRight", "requestAnimFrame", "requestAnimationFrame", "webkitRequestAnimationFrame", "mozRequestAnimationFrame", "oRequestAnimationFrame", "msRequestAnimationFrame", "setTimeout", "easeOutQuad", "userAgent", "navigator", "MSIE", "indexOf", ".", "substring", "match", "protocol", "location", "file:", 'Some plugin functions "localStorage" is not available on local files (using the file: protocol) for this browser!',
    "log", 'The plugin "iGuider" does not support this version of the browser!', "debug", "gLoader", '<div class="g-loader"><div class="g-loader-b"></div><div class="g-loader-s"></div></div>', "createOverlayLayer", "g-preloader", "html", "removeClass", "PI", "progressCircleTimer", "strokeDashoffset", "style", "progressValue", "correctColor", "ok", "charAt", "#", "substr", "replace", "toLowerCase", "f0f8ff", "faebd7", "00ffff", "7fffd4", "f0ffff", "f5f5dc", "ffe4c4", "000000", "ffebcd", "0000ff", "8a2be2",
    "a52a2a", "deb887", "5f9ea0", "7fff00", "d2691e", "ff7f50", "6495ed", "fff8dc", "dc143c", "00008b", "008b8b", "b8860b", "a9a9a9", "006400", "bdb76b", "8b008b", "556b2f", "ff8c00", "9932cc", "8b0000", "e9967a", "8fbc8f", "483d8b", "2f4f4f", "00ced1", "9400d3", "ff1493", "00bfff", "696969", "1e90ff", "d19275", "b22222", "fffaf0", "228b22", "ff00ff", "dcdcdc", "f8f8ff", "ffd700", "daa520", "808080", "008000", "adff2f", "f0fff0", "ff69b4", "cd5c5c", "4b0082", "fffff0", "f0e68c", "e6e6fa", "fff0f5", "7cfc00",
    "fffacd", "add8e6", "f08080", "e0ffff", "fafad2", "d3d3d3", "90ee90", "ffb6c1", "ffa07a", "20b2aa", "87cefa", "8470ff", "778899", "b0c4de", "ffffe0", "00ff00", "32cd32", "faf0e6", "800000", "66cdaa", "0000cd", "ba55d3", "9370d8", "3cb371", "7b68ee", "00fa9a", "48d1cc", "c71585", "191970", "f5fffa", "ffe4e1", "ffe4b5", "ffdead", "000080", "fdf5e6", "808000", "6b8e23", "ffa500", "da70d6", "eee8aa", "98fb98", "afeeee", "d87093", "ffefd5", "ffdab9", "cd853f", "ffc0cb", "dda0dd", "b0e0e6", "800080", "ff0000",
    "bc8f8f", "4169e1", "8b4513", "fa8072", "f4a460", "2e8b57", "fff5ee", "a0522d", "c0c0c0", "87ceeb", "6a5acd", "708090", "fffafa", "00ff7f", "4682b4", "d2b48c", "008080", "d8bfd8", "ff6347", "40e0d0", "ee82ee", "d02090", "f5deb3", "ffffff", "f5f5f5", "ffff00", "9acd32", "rgb(123, 234, 45)", "rgb(255,234,245)", "#00ff00", "336699", "#fb0", "f0f", "re", "process", "exec", "r", "g", "b", "toRGB", "rgb(", ", ", ")", "toHex", "0", "gradient", "search", "rgba", "hexToRGBA", "test", "split", "0x", "join",
    "rgba(", ",", "hexToRGBCODE", "clearSavePar", "tColor", "tCanvas", "tOpacity", "g-show g-event", "fillStyle", "ctx", "width", "height", "fillRect", "redrawOverlay", "deleteOverlayLayer", "g-show", "shapeRemove", "g-event", "clearRect", "g-active", ".g-active", "g-step-success", "createCanvas", "#g-overlay-wrap", "canvas", "createElement", "id", "g-overlay-wrap", "getElementById", "2d", "getContext", "setCanvasSize", "delRect", "prevX", "prevY", "prevW", "prevH", "shape", "saveColorR", "saveColorG",
    "saveColorB", "saveOpacity", "start_animate", "tDuration", "pathOpacity", "draw", "changeColor", "pathColorR", "pathColorG", "pathColorB", "saveShape", "push", "x", "y", "prevBR", "BR", "saveX", "pathX", "saveY", "pathY", "saveW", "pathW", "saveH", "pathH", "saveBR", "pathBR", "toFixed", "sqrt", "globalCompositeOperation", "destination-out", "beginPath", "arc", "closePath", "rgba(0,0,0,1)", "fill", "source-over", "undefined", "moveTo", "lineTo", "quadraticCurveTo", "saveColor", "color", "colorR",
    "colorG", "colorB", "opacity", "pop", "remove", ".g-shape", "searchEl", "outerWidth", "outerHeight", "left", "offset", "scrollLeft", "top", "scrollTop", "tMargin", "shapeBorderRadius", "is", "setEmpty", "50%", "css", "g-shape", "<div>", "fixStepNumVal", "spacing", "waitElementTime", "stringify", "parse", "setCanvasDefault", "def", "startOpt", "#0000", "tIni", "tourid", "tourTitle", "gMapHeader", "empty", "last", ":contains([map-header])", "g-map-header", "gMapContent", ":contains([map-content])",
    "g-map-content", "href", "loc", "keyboardEvent", "timer", "title", "\u2116", '<div data-hindex="', '" class="g-step-item" data-title="', '"><span class="g-step-item-text">', "</span></div>", "ready", "\\$&", "skip", "registerMissingElements", "center", "target", '[data-target ="', '"]', "MSStream", "clickEvent", "touchend", "click", "ontouchmove", "ontouchend", "mousemove.", "hName", "mousedown.", "mouseup.", "ontouchstart", "touchmove.", "touchstart.", "touchend.", "mousemoveEvent", "mouseupEvent",
    "mousedownEvent", "platform", "You are in Privacy Mode\nPlease deactivate Privacy Mode and then reload the page to view the Tour.", "destroy", "function", "boolean", "string", "number", "object", "isArray", "array", "toStringObj", "hasOwnProperty", "coneHide", "cone-hide", "modalPos", "coneShow", "selectCallback", "autofocus", "startIndex", "blur", ":focus", "focus", "targetEl", "messHide", "messEvHide", "posCorrect", "data-pos", "data-cone", "data-cont", "modalSize", "coneCheckHor", "l", "t", "c",
    "coneCheckVert", "g-pos-correct", "play", "return ", "lineNumber", " The callback function specified is not correct.", "pause", "start", "iGuider_event", "setItem", "end", "progressFunc", "abort", "iGuider_restored", "iGuider_opt", "removeItem", "iGuider_step", "finish", "iGuider_data-", "tourID", "itour_options", "create", "no_steps", "keydown.iGuider", "design", "keyboard", "keyCode", " Click  Esc and Destroy", " Click Keyboard Next", " Click Keyboard Prev", "prev", " Click Keyboard Enter", ".g-modal-intro-show",
    " Click Keyboard Start", "active", "modalStart", "trigger", ".g-modal-continue-show", " Click Keyboard Continue", "modalBeginContinue", "on", "overlayPos", " Start overlayPos func", "modalData", "round", "disable", "g-disable", "%", "vw", "bgColor", "modalTimerControll", "titleColor", "modalHeader", "modalContentColor", "modalBody", "paginationColor", "#paginationColorStyle", ".g-modal-pos .g-modal-step-value, .g-modal-pos .g-modal-step-total {color:", "}", '<style id="paginationColorStyle">', "timerColor",
    "#timerColorStyle", ".g-modal-timer-line .g-modal-timer { background: ", "; } .g-progress__value { stroke: ", "; }", '<style id="timerColorStyle">', "btnColor", "#btnColorStyle", ".g-modal-pos .gBtn {color:", '<style id="btnColorStyle">', "btnHoverColor", "#btnHoverColorStyle", ".g-modal-pos .gBtn:hover {color:", '<style id="btnHoverColorStyle">', "#listBtnColorStyle", ".g-map-pos .gBtn {color:", '<style id="listBtnColorStyle">', "#listBtnHoverColorStyle", ".g-map-pos .gBtn:hover {color:", '<style id="listBtnHoverColorStyle">',
    "itemNumColor", "#itemNumColorStyle", ".g-step-item:before {color:", '<style id="itemNumColorStyle">', "itemColor", "#itemColorStyle", ".g-step-item:not(.hCur):not(:hover) {color:", '<style id="itemColorStyle">', "itemHoverColor", "#itemHoverColorStyle", ".g-step-item:not(.hCur):hover {color:", '<style id="itemHoverColorStyle">', "itemActiveColor", "#itemActiveColorStyle", ".hCur .g-step-item-text {color:", '<style id="itemActiveColorStyle">', "itemActiveBg", "#itemActiveBgStyle", ".g-step-item.hCur:before {background:",
    '<style id="itemActiveBgStyle">', "checkColor", "#checkColorStyle", ".g-step-item:after {border-color:", '<style id="checkColorStyle">', "checkReadyColor", "#checkReadyColorStyle", ".g-step-item.g-step-success:after {border-color:", '<style id="checkReadyColorStyle">', "#checkPaginationColorStyle", ".g-map-pos .g-modal-step-value, .g-map-pos .g-modal-step-total {color:", '<style id="checkPaginationColorStyle">', "eTop", "eLeft", "mbw", "mbh", "h", "w", "sMaxH", "sMaxW", "sideTB", "sideLR", "-100%",
    "contentPos", "modalPosShow", "show", "stop", " posCorrect func - 1", 'Parameter "steps" is undefined or empty', "indexActive", "modalNextShow", "g-modal-next-show", "g-modal-next-hide", "nextText", "modalNext", "modalNextHide", "modalPrevShow", "g-modal-prev-show", "g-modal-prev-hide", "prevText", "modalPrev", "modalPrevHide", "modalStartShow", "g-modal-start-hide", "modalStartHide", "coverShow", "g-modal-cover-show", "g-modal-cover-hide", "coverHide", "modalStepShow", "g-modal-step-show", "g-modal-step-hide",
    "modalStepHide", "modalContShow", "g-modal-cont-show", "g-modal-cont-hide", "modalContHide", "modalTitleShow", "g-modal-title-show", "g-modal-title-hide", "modalTitleHide", "modalIntroShow", "g-modal-intro-show", "g-modal-intro-hide", "modalIntroHide", "modalCloseHide", "g-modal-close-hide", "g-modal-close-show", "modalCloseShow", "modalMapHide", "g-modal-map-hide", "g-modal-map-show", "modalMapShow", "modalContinueShow", "g-modal-continue-show", "g-modal-continue-hide", "modalContinueHide", "timerShow",
    "g-timer-show", "g-timer-hide", "timerHide", "modalPosShowId", " start modalPosShow func", "animate", "modalPosHide", " start modalPosHide func", "hide", "g-modal-pos", "g-modal-size", "introDialogBtnStart", "g-modal-start", ":contains([modal-start])", "modalCloseIntro", "introDialogBtnCancel", "g-modal-close-intro g-modal-close", ":contains([modal-cancel])", "modalBeginFirst", "g-modal-begin-first", ":contains([modal-begin-first])", "g-modal-begin-continue", ":contains([modal-begin-continue])",
    "timerType", "modalTimer", ":contains([modal-timer])", "g-modal-timer", "g-modal-timer-line", "circle", '<svg class="g-progress" width="44" height="44" viewBox="0 0 44 44"><circle class="g-progress__meter" cx="22" cy="22" r="21" stroke-width="2" /><circle class="g-progress__value" cx="22" cy="22" r="21" stroke-width="2" /></svg>', "g-modal-timer-circle", ".g-progress__value", "querySelector", "strokeDasharray", "insertAfter", "g-timer-controll g-timer-pause gBtn", "modalImage", ":contains([modal-cover])",
    "g-modal-cover", "modalMap", "tourMapText", "tourMapTitle", "g-modal-map", ":contains([modal-map])", "tourMapDetect", "enable", "true", "modalCloseTour", "cancelText", "cancelTitle", "g-modal-close-tour g-modal-close", ":contains([modal-close])", "modalType", "g-modal-type", ":contains([modal-type])", ":contains([modal-header])", "g-modal-header", ":contains([modal-body])", "g-modal-body", "prevTextDefault", "g-modal-prev", ":contains([modal-prev])", "nextTextDefault", "g-modal-next", ":contains([modal-next])",
    "modalStepValue", "modalStepTotal", "text", "filter", ':contains("', '")', "[step-value]", "[step-total]", "textDirection", "rtl", "g-modal-step-total", "g-el-absent", '[data-hindex="', "event", ' Run "hStep" func - 1', "Target is ", " Target is ", " (HTML) and Destroy", "hClose", "g-map-close-tour g-modal-close", ":contains([map-close])", "hHide", "hideText", "g-map-hide", ":contains([map-hide])", "hToggle", "g-map-toggle", ":contains([map-toggle])", "progress", "beforeFunc", "before", "after_beforeFunc",
    "iGuider-highlight", "getStep", "duringFunc", "during", "afterFunc", "after", "after_afterFunc", ".iGuider-highlight", "messageErrorId", "messageEventId", ".gErrorMessage", ".gEventMessage", "messageErrorHide", "messageEventHide", "messageError", "checkNext", "gErrorMessage", ".gFooter", "checkPrev", "func", "stopTimer", "0%", "startTimer", "timeSave", "timerState", "100%", "mouseenter.iGuider mousemove.iGuider", ".gWidget, .g-shape, .iGuider-highlight", "g-timer-progress-hide", "g-timer-progress-show",
    "mouseleave.iGuider", "changeDelayId", "goFlag", "iGuider_go", "getItem", " targetOpt.target: ", " The target is HTML code", "tagName", "[", '*="', "\\.", "\\[", " The target is jQuery object", " The selector is data-target attribute", '[data-target="', " targetElSelector: ", "targetElSave", "delayBefore", ":visible", "open", "g-map-open", "hElHidden", "data-g-stepid", "removeAttr", "data-g-step", "step-", "stepID", "cover", "load", "src", "<img>", "content", "endText", "g-modal-step-value", "pagination",
    ".g-modal-type", "iGuider_data", "customEvent", "customTarget", "data-uid", "h-", "customTargetSelector", '[data-uid="', "eventFlag", ".iGuider", "off", "delayAfter", "nowLoc", "nextIndex", ' Run "hStep" func - 2', "Custom target don't have class and id attributes", "Custom target is absent", "Custom event is absent", "hCur", "[data-hindex]", ".gMapContent", "floor", "false", "scrolling", "then", "promise", ' Run "searchElement" func - 1', "hidden", ' Run "searchElement" func - 2', "absent", " $('",
    "') ", "is found!", "is visible!", ' Run "stepFunc" func - 1', "is hidden", "is absent on the page", " Waiting for item max: ", "ms", " Start the timer", " Time is up", ' Run "stepFunc" func - 2', ' Run "stepFunc" func - 3', " Empty object of parameters for current step and Destroy", "step data is missing", ' Run "hStep" func - 3', "windowContinue", "storageDetectId", "hTourCover", "contDialogBtnBegin", "contDialogBtnContinue", "modalTypeColor", " posCorrect func - 2", "modalContinueType", "stepValue",
    "page", "otherPage", "parseJSON", "tourId", "1", " continue.enable: ", " iGuider_restored: ", "startStepVal", "stepVal", "targetLocVal", " $.iGuider.v.nowLoc: ", " $.iGuider.v.targetLocVal: ", " Redirect 8", " targetLoc: ", " Redirect 1", " Steps array does not have abject items", " Steps parameter is absent.", " Redirect 7", ".g-modal-start", ".g-modal-begin-first", " Redirect 2", ".g-modal-begin-continue", " Redirect 3", ".g-preloader", "resize.iGuider", "scroll.iGuider", "Your browser does not support multi-page",
    " Old Browser and Destroy", "nextStep", " Redirect 4", ' Run "hStep" func - 4', ".g-modal-next", "prevStep", " Redirect 5", ' Run "hStep" func - 5', " No previous steps", ".g-modal-prev", ".g-modal-close", " Click Close and Destroy", "setStep", " Redirect 6", ' Run "hStep" func - 6', " Attention: Invalid step number", "clickable", "g-map-no-clickable", "data-hindex", ".g-step-success", "overlayClickable", ' Click "overlay" (HTML) and Destroy', ".g-map-open", "map", "toggle", "dataPos", "dataCone",
    "dataCont", " posCorrect func - 3", "mouseenter.iGuider", "index", "mouseleave", "mouseenter", ".g-timer-controll", "timerStateDefault", "iGuider_timer", "windowIntro", " Start generate intro window", " Start intro content installation", " Start intro width installation", " Start intro style installation", " Start intro position installation", " posCorrect func - 4", " Start intro overlay installation", " Start intro block display installation", "modalIntroType", ' Parameter "steps" is not set.',
    ' Parameter "steps" is empty.', " Run Steps", " Mess: All target elements is absent.", ' Council: Check the "Steps" parameter.', "clearData", "Warning! \nDetected re-initialization of plugin. Check the code calling the plugin!", "g-timer-play", "g-timer-pause", "g-state-pause", "g-state-play", ".g-modal-prev-show", ".g-modal-next-show", "eventMessage", "gEventMessage", ".g-map-pos-right", "g-map-pos-left g-map-pos-right", ".g-map-pos-left, .g-map-pos-right", ".g-map-pos", "iGuiderItemAdd", ".iguider-btnCont",
    "tourlist-item", "tourlist-item-title", "tourSubtitle", "tourlist-item-subtitle", "iGuiderBtnAdd", ".iguider-btn", '<div class="iguider-btn-shape"><span class="iguider-btn-icon" style="color:#fff"></span></div><div class="iguider-btnCont"></div>', "iguider-btn", "click.iguiderbtn", ".tourlist-item", "g-tour-list-show", "toggleClass", "find", "Options array is empty", "Parameters passed in wrong format", "iGuiderSet", "The parameter set is missing", ".g-modal-header", ".g-step-item.hCur .g-step-item-text",
    ".g-modal-body", "hNav-disable", "g-modal-step-num-show", "g-modal-step-num-hide", "[data-uid]", "overlays", "introDialog", "mousemove.iGuider", ".hOverlay", "All plugin data is destroyed.", "Warning! \nDetected call of method Destroy for an element that is not associated with plugin. Check the code!", "call", "slice", "prototype", "set", "init", "Method ", " in jQuery.iGuider doesn't exist", "error", "Sorry! No Web Storage support.", "https://codecanyon.net/item/iguider-jquery-webpage-help-tour/21073716",
    "www.codecanyon.net", 'This is DEMO version of the plug-in "', '", it will not work on your device. Purchase full version on site <a style="color:white;background-color:red" href="', '">', "</a>", "div", "span", "i", "strong", "em", "h1", "h2", "h3", "section", "td", "header", "footer", "li", "a", "hostname", "localhost", "fixed", "border-box", "30px", "red", "white", "999999", "20px", "40px", "eq", "[data-iguider]", "data-iguider", "run", "Interrupted tour detected.", "Recovery step title: ",
    "Recovery step loc: ", "?"];
var iGuider;
(function ($) {
    _0x4f9f[0];
    var methods = {
        init: function (o) {
            var options = {
                tourID: _0x4f9f[1],
                tourTitle: _0x4f9f[2],
                tourSubtitle: _0x4f9f[3],
                startStep: 1,
                overlayClickable: true,
                overlayColor: _0x4f9f[4],
                overlayOpacity: 0.5,
                pagination: true,
                registerMissingElements: true,
                textDirection: _0x4f9f[5],
                shape: 0,
                shapeBorderRadius: 5,
                width: 320,
                bgColor: false,
                titleColor: false,
                modalContentColor: false,
                modalTypeColor: false,
                paginationColor: false,
                timerColor: false,
                btnColor: false,
                btnHoverColor: false,
                spacing: 10,
                loc: false,
                timer: false,
                timerType: _0x4f9f[6],
                keyboard: true,
                keyboardEvent: false,
                intro: {
                    enable: true,
                    title: _0x4f9f[7],
                    content: _0x4f9f[8],
                    cover: _0x4f9f[9],
                    overlayColor: false,
                    overlayOpacity: false,
                    width: false,
                    bgColor: false,
                    titleColor: false,
                    modalContentColor: false,
                    modalTypeColor: false,
                    btnColor: false,
                    btnHoverColor: false
                },
                continue: {
                    enable: true,
                    title: _0x4f9f[10],
                    content: _0x4f9f[11],
                    cover: _0x4f9f[9],
                    overlayColor: false,
                    overlayOpacity: false,
                    width: false,
                    bgColor: false,
                    titleColor: false,
                    modalContentColor: false,
                    modalTypeColor: false,
                    btnColor: false,
                    btnHoverColor: false
                },
                tourMap: {
                    enable: true,
                    position: _0x4f9f[12],
                    clickable: true,
                    open: false,
                    bgColor: false,
                    titleColor: false,
                    btnColor: false,
                    btnHoverColor: false,
                    itemColor: false,
                    itemHoverColor: false,
                    itemActiveColor: false,
                    itemActiveBg: false,
                    itemNumColor: false,
                    checkColor: false,
                    checkReadyColor: false
                },
                steps: [{
                    cover: _0x4f9f[9],
                    title: _0x4f9f[13],
                    content: _0x4f9f[14],
                    position: _0x4f9f[15],
                    target: _0x4f9f[16],
                    disable: false,
                    overlayOpacity: 0.5,
                    overlayColor: _0x4f9f[4],
                    spacing: 10,
                    shape: 0,
                    shapeBorderRadius: 5,
                    timer: false,
                    event: _0x4f9f[17],
                    eventMessage: _0x4f9f[18],
                    skip: false,
                    nextText: _0x4f9f[19],
                    prevText: _0x4f9f[20],
                    trigger: false,
                    stepID: _0x4f9f[9],
                    waitElementTime: 0,
                    loc: false,
                    ready: false,
                    width: 320,
                    autofocus: true,
                    bgColor: false,
                    titleColor: false,
                    modalContentColor: false,
                    paginationColor: false,
                    timerColor: false,
                    btnColor: false,
                    btnHoverColor: false,
                    keyboardEvent: false,
                    checkNext: {
                        func: function () {
                            return true;
                        },
                        messageError: _0x4f9f[21]
                    },
                    checkPrev: {
                        func: function () {
                            return true;
                        },
                        messageError: _0x4f9f[21]
                    },
                    before: function (oriImage) {
                    },
                    during: function (fn) {
                    },
                    after: function (inRangeAlready) {
                    },
                    delayBefore: 0,
                    delayAfter: 0
                }],
                lang: {
                    cancelTitle: _0x4f9f[22],
                    cancelText: _0x4f9f[23],
                    hideText: _0x4f9f[24],
                    tourMapText: _0x4f9f[25],
                    tourMapTitle: _0x4f9f[26],
                    nextTextDefault: _0x4f9f[19],
                    prevTextDefault: _0x4f9f[20],
                    endText: _0x4f9f[27],
                    contDialogBtnBegin: _0x4f9f[28],
                    contDialogBtnContinue: _0x4f9f[29],
                    introDialogBtnStart: _0x4f9f[30],
                    introDialogBtnCancel: _0x4f9f[31],
                    modalIntroType: _0x4f9f[32],
                    modalContinueType: _0x4f9f[33]
                },
                create: function () {
                },
                start: function () {
                },
                progress: function (indexOfExecutingTask) {
                },
                end: function () {
                },
                abort: function () {
                },
                finish: function () {
                },
                play: function () {
                },
                pause: function () {
                },
                modalTemplate: _0x4f9f[34] + _0x4f9f[35] + _0x4f9f[36] + _0x4f9f[37] + _0x4f9f[38] + _0x4f9f[39] + _0x4f9f[40] + _0x4f9f[41] + _0x4f9f[42] + _0x4f9f[43] + _0x4f9f[44] + _0x4f9f[41] + _0x4f9f[45] + _0x4f9f[46] + _0x4f9f[47] + _0x4f9f[48] + _0x4f9f[49] + _0x4f9f[50] + _0x4f9f[51] + _0x4f9f[52] + _0x4f9f[53] + _0x4f9f[54] + _0x4f9f[55] + _0x4f9f[41] + _0x4f9f[41],
                mapTemplate: _0x4f9f[56] + _0x4f9f[57] + _0x4f9f[58] + _0x4f9f[59] + _0x4f9f[41] + _0x4f9f[60] + _0x4f9f[46] + _0x4f9f[47] + _0x4f9f[48] + _0x4f9f[49] + _0x4f9f[61] + _0x4f9f[62] + _0x4f9f[41],
                debug: false
            };
            if (!$[_0x4f9f[63]]) {
                $[_0x4f9f[63]] = {};
            }
            (function (_getModal) {
                /**
                 * @return {?}
                 */
                $[_0x4f9f[65]][_0x4f9f[64]] = function () {
                    if (arguments[_0x4f9f[66]] === 0) {
                        if (this[_0x4f9f[66]] === 0) {
                            return null;
                        }
                        var _0x63dcx9 = {};
                        $[_0x4f9f[71]](this[0][_0x4f9f[67]], function () {
                            if (this[_0x4f9f[68]]) {
                                _0x63dcx9[this[_0x4f9f[69]]] = this[_0x4f9f[70]];
                            }
                        });
                        return _0x63dcx9;
                    }
                    return _getModal[_0x4f9f[72]](this, arguments);
                };
            })($[_0x4f9f[65]][_0x4f9f[64]]);
            if (!$[_0x4f9f[63]][_0x4f9f[73]]) {
                var id;
                /** @type {boolean} */
                var _0x63dcxb = false;
                /** @type {!Array} */
                var args = [];
                /**
                 * @return {undefined}
                 */
                var _takingTooLongTimeout = function () {
                };
                /** @type {number} */
                var rumbleSpeed = 500;
                $[_0x4f9f[63]][_0x4f9f[73]] = {};
                if (o) {
                    $[_0x4f9f[75]](options[_0x4f9f[74]], o[_0x4f9f[74]]);
                    $[_0x4f9f[75]](options[_0x4f9f[76]], o[_0x4f9f[76]]);
                    $[_0x4f9f[75]](options[_0x4f9f[77]], o[_0x4f9f[77]]);
                    $[_0x4f9f[75]](options[_0x4f9f[78]], o[_0x4f9f[78]]);
                    $[_0x4f9f[75]](o[_0x4f9f[74]], options[_0x4f9f[74]]);
                    $[_0x4f9f[75]](o[_0x4f9f[76]], options[_0x4f9f[76]]);
                    $[_0x4f9f[75]](o[_0x4f9f[77]], options[_0x4f9f[77]]);
                    $[_0x4f9f[75]](o[_0x4f9f[78]], options[_0x4f9f[78]]);
                    options[_0x4f9f[79]] = options[_0x4f9f[80]];
                    if (o[_0x4f9f[80]] && o[_0x4f9f[80]][_0x4f9f[66]]) {
                        options[_0x4f9f[80]] = o[_0x4f9f[80]];
                    } else {
                        /** @type {boolean} */
                        options[_0x4f9f[80]] = false;
                    }
                    if (o[_0x4f9f[81]] && $[_0x4f9f[82]](o[_0x4f9f[81]]) != _0x4f9f[9]) {
                        options[_0x4f9f[81]] = o[_0x4f9f[81]];
                    } else {
                        /** @type {boolean} */
                        options[_0x4f9f[81]] = false;
                    }
                    if (o[_0x4f9f[83]] && $[_0x4f9f[82]](o[_0x4f9f[83]]) != _0x4f9f[9]) {
                        options[_0x4f9f[83]] = o[_0x4f9f[83]];
                    } else {
                        /** @type {boolean} */
                        options[_0x4f9f[83]] = false;
                    }
                    $[_0x4f9f[75]](options, o);
                }
                $[_0x4f9f[75]]($[_0x4f9f[63]][_0x4f9f[73]], options);
                /** @type {number} */
                $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]] = parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]]);
                /** @type {number} */
                $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[85]] = parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[85]]);
                /** @type {number} */
                $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[85]] = parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[85]]);
                /** @type {number} */
                $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[85]] = parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[85]]);
                /**
                 * @return {undefined}
                 */
                var setupAutosave = function () {
                    $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[86]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[86]];
                };
                /**
                 * @return {undefined}
                 */
                var accountHandler = function () {
                    $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[86]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[86]];
                };
                /**
                 * @return {undefined}
                 */
                var parseStoreDir = function () {
                    $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[85]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[85]];
                };
                /**
                 * @return {undefined}
                 */
                var getFixedElements = function () {
                    $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[85]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[85]];
                };
                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[86]]) {
                    if (o[_0x4f9f[76]]) {
                        if (!o[_0x4f9f[76]][_0x4f9f[86]]) {
                            setupAutosave();
                        }
                    } else {
                        setupAutosave();
                    }
                    if (o[_0x4f9f[77]]) {
                        if (!o[_0x4f9f[77]][_0x4f9f[86]]) {
                            accountHandler();
                        }
                    } else {
                        accountHandler();
                    }
                }
                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[85]] > -1) {
                    if (o[_0x4f9f[76]]) {
                        if (!o[_0x4f9f[76]][_0x4f9f[85]] && o[_0x4f9f[76]][_0x4f9f[85]] !== 0) {
                            parseStoreDir();
                        }
                    } else {
                        parseStoreDir();
                    }
                    if (o[_0x4f9f[77]]) {
                        if (!o[_0x4f9f[77]][_0x4f9f[85]] && o[_0x4f9f[77]][_0x4f9f[85]] !== 0) {
                            getFixedElements();
                        }
                    } else {
                        getFixedElements();
                    }
                }
                if ($[_0x4f9f[87]]) {
                    $[_0x4f9f[75]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]], $[_0x4f9f[87]]);
                }
                $[_0x4f9f[63]][_0x4f9f[88]] = {};
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[89]] = $(_0x4f9f[90]);
                var temp = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[83]] ? $($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[83]]) : $(mapTpl);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[91]] = temp[_0x4f9f[96]](_0x4f9f[94] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[95]])[_0x4f9f[93]](_0x4f9f[92]);
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[97]] = function () {
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[98]] = function () {
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[99]] = function () {
                };
                /** @type {number} */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[100]] = 300;
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[101]] = {};
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[102]] = {};
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[103]] = {};
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[104]] = {};
                window[_0x4f9f[105]] = function () {
                    return window[_0x4f9f[106]] || window[_0x4f9f[107]] || window[_0x4f9f[108]] || window[_0x4f9f[109]] || window[_0x4f9f[110]] || function (axsPath, canCreateDiscussions) {
                        window[_0x4f9f[111]](axsPath, 1000 / 60);
                    };
                }();
                /**
                 * @param {number} value
                 * @param {?} b
                 * @param {?} uploadFileTpl
                 * @param {number} barWidth
                 * @return {?}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[112]] = function (value, b, uploadFileTpl, barWidth) {
                    return parseFloat(-uploadFileTpl * (value = value / barWidth) * (value - 2)) + parseFloat(b);
                };
                /**
                 * @return {?}
                 */
                var getComputedStyle = function () {
                    var B2503 = window[_0x4f9f[114]][_0x4f9f[113]];
                    var cases__2759 = B2503[_0x4f9f[116]](_0x4f9f[115]);
                    if (cases__2759 > 0) {
                        return parseInt(B2503[_0x4f9f[118]](cases__2759 + 5, B2503[_0x4f9f[116]](_0x4f9f[117], cases__2759)));
                    } else {
                        if (!!navigator[_0x4f9f[113]][_0x4f9f[119]](/Trident\/7\./)) {
                            return 11;
                        } else {
                            return 0;
                        }
                    }
                };
                var firstListItemStyle = getComputedStyle();
                if (firstListItemStyle > 0) {
                    if (firstListItemStyle >= 11) {
                        if (window[_0x4f9f[121]][_0x4f9f[120]] == _0x4f9f[122]) {
                            console[_0x4f9f[124]](_0x4f9f[123]);
                            return false;
                        }
                    } else {
                        console[_0x4f9f[124]](_0x4f9f[125]);
                        return false;
                    }
                }
                /**
                 * @param {?} body
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]] = function (body) {
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[126]]) {
                        console[_0x4f9f[124]](body);
                    }
                };
                /**
                 * @return {undefined}
                 */
                var preview_tutorial = function () {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[127]] = $(_0x4f9f[128]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[127]][_0x4f9f[93]](_0x4f9f[92]);
                };
                /**
                 * @return {undefined}
                 */
                var enviewer_state = function () {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[129]]();
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[130]);
                };
                /**
                 * @return {undefined}
                 */
                var send_to_beta = function () {
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[130]);
                };
                preview_tutorial();
                /** @type {number} */
                var HeaderLevenshteinDistanceToLengthRatio = 21;
                /** @type {number} */
                var articleArea = 2 * Math[_0x4f9f[133]] * HeaderLevenshteinDistanceToLengthRatio;
                /**
                 * @param {number} selectionHeight
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[134]] = function (selectionHeight) {
                    /** @type {number} */
                    var pxAllowance = selectionHeight / 100;
                    /** @type {number} */
                    var maximumImageArea = articleArea * (1 - pxAllowance);
                    /** @type {number} */
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[137]][_0x4f9f[136]][_0x4f9f[135]] = maximumImageArea;
                };
                /**
                 * @param {?} signatureInfoEncoding
                 * @return {?}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[138]] = function (signatureInfoEncoding) {
                    /**
                     * @param {string} value
                     * @return {undefined}
                     */
                    function Blob(value) {
                        /** @type {boolean} */
                        this[_0x4f9f[139]] = false;
                        if (value[_0x4f9f[140]](0) == _0x4f9f[141]) {
                            value = value[_0x4f9f[142]](1, 6);
                        }
                        value = value[_0x4f9f[143]](/ /g, _0x4f9f[9]);
                        value = value[_0x4f9f[144]]();
                        var namedColors = {
                            aliceblue: _0x4f9f[145],
                            antiquewhite: _0x4f9f[146],
                            aqua: _0x4f9f[147],
                            aquamarine: _0x4f9f[148],
                            azure: _0x4f9f[149],
                            beige: _0x4f9f[150],
                            bisque: _0x4f9f[151],
                            black: _0x4f9f[152],
                            blanchedalmond: _0x4f9f[153],
                            blue: _0x4f9f[154],
                            blueviolet: _0x4f9f[155],
                            brown: _0x4f9f[156],
                            burlywood: _0x4f9f[157],
                            cadetblue: _0x4f9f[158],
                            chartreuse: _0x4f9f[159],
                            chocolate: _0x4f9f[160],
                            coral: _0x4f9f[161],
                            cornflowerblue: _0x4f9f[162],
                            cornsilk: _0x4f9f[163],
                            crimson: _0x4f9f[164],
                            cyan: _0x4f9f[147],
                            darkblue: _0x4f9f[165],
                            darkcyan: _0x4f9f[166],
                            darkgoldenrod: _0x4f9f[167],
                            darkgray: _0x4f9f[168],
                            darkgreen: _0x4f9f[169],
                            darkkhaki: _0x4f9f[170],
                            darkmagenta: _0x4f9f[171],
                            darkolivegreen: _0x4f9f[172],
                            darkorange: _0x4f9f[173],
                            darkorchid: _0x4f9f[174],
                            darkred: _0x4f9f[175],
                            darksalmon: _0x4f9f[176],
                            darkseagreen: _0x4f9f[177],
                            darkslateblue: _0x4f9f[178],
                            darkslategray: _0x4f9f[179],
                            darkturquoise: _0x4f9f[180],
                            darkviolet: _0x4f9f[181],
                            deeppink: _0x4f9f[182],
                            deepskyblue: _0x4f9f[183],
                            dimgray: _0x4f9f[184],
                            dodgerblue: _0x4f9f[185],
                            feldspar: _0x4f9f[186],
                            firebrick: _0x4f9f[187],
                            floralwhite: _0x4f9f[188],
                            forestgreen: _0x4f9f[189],
                            fuchsia: _0x4f9f[190],
                            gainsboro: _0x4f9f[191],
                            ghostwhite: _0x4f9f[192],
                            gold: _0x4f9f[193],
                            goldenrod: _0x4f9f[194],
                            gray: _0x4f9f[195],
                            green: _0x4f9f[196],
                            greenyellow: _0x4f9f[197],
                            honeydew: _0x4f9f[198],
                            hotpink: _0x4f9f[199],
                            indianred: _0x4f9f[200],
                            indigo: _0x4f9f[201],
                            ivory: _0x4f9f[202],
                            khaki: _0x4f9f[203],
                            lavender: _0x4f9f[204],
                            lavenderblush: _0x4f9f[205],
                            lawngreen: _0x4f9f[206],
                            lemonchiffon: _0x4f9f[207],
                            lightblue: _0x4f9f[208],
                            lightcoral: _0x4f9f[209],
                            lightcyan: _0x4f9f[210],
                            lightgoldenrodyellow: _0x4f9f[211],
                            lightgrey: _0x4f9f[212],
                            lightgreen: _0x4f9f[213],
                            lightpink: _0x4f9f[214],
                            lightsalmon: _0x4f9f[215],
                            lightseagreen: _0x4f9f[216],
                            lightskyblue: _0x4f9f[217],
                            lightslateblue: _0x4f9f[218],
                            lightslategray: _0x4f9f[219],
                            lightsteelblue: _0x4f9f[220],
                            lightyellow: _0x4f9f[221],
                            lime: _0x4f9f[222],
                            limegreen: _0x4f9f[223],
                            linen: _0x4f9f[224],
                            magenta: _0x4f9f[190],
                            maroon: _0x4f9f[225],
                            mediumaquamarine: _0x4f9f[226],
                            mediumblue: _0x4f9f[227],
                            mediumorchid: _0x4f9f[228],
                            mediumpurple: _0x4f9f[229],
                            mediumseagreen: _0x4f9f[230],
                            mediumslateblue: _0x4f9f[231],
                            mediumspringgreen: _0x4f9f[232],
                            mediumturquoise: _0x4f9f[233],
                            mediumvioletred: _0x4f9f[234],
                            midnightblue: _0x4f9f[235],
                            mintcream: _0x4f9f[236],
                            mistyrose: _0x4f9f[237],
                            moccasin: _0x4f9f[238],
                            navajowhite: _0x4f9f[239],
                            navy: _0x4f9f[240],
                            oldlace: _0x4f9f[241],
                            olive: _0x4f9f[242],
                            olivedrab: _0x4f9f[243],
                            orange: _0x4f9f[244],
                            orchid: _0x4f9f[245],
                            palegoldenrod: _0x4f9f[246],
                            palegreen: _0x4f9f[247],
                            paleturquoise: _0x4f9f[248],
                            palevioletred: _0x4f9f[249],
                            papayawhip: _0x4f9f[250],
                            peachpuff: _0x4f9f[251],
                            peru: _0x4f9f[252],
                            pink: _0x4f9f[253],
                            plum: _0x4f9f[254],
                            powderblue: _0x4f9f[255],
                            purple: _0x4f9f[256],
                            red: _0x4f9f[257],
                            rosybrown: _0x4f9f[258],
                            royalblue: _0x4f9f[259],
                            saddlebrown: _0x4f9f[260],
                            salmon: _0x4f9f[261],
                            sandybrown: _0x4f9f[262],
                            seagreen: _0x4f9f[263],
                            seashell: _0x4f9f[264],
                            sienna: _0x4f9f[265],
                            silver: _0x4f9f[266],
                            skyblue: _0x4f9f[267],
                            slateblue: _0x4f9f[268],
                            slategray: _0x4f9f[269],
                            snow: _0x4f9f[270],
                            springgreen: _0x4f9f[271],
                            steelblue: _0x4f9f[272],
                            tan: _0x4f9f[273],
                            teal: _0x4f9f[274],
                            thistle: _0x4f9f[275],
                            tomato: _0x4f9f[276],
                            turquoise: _0x4f9f[277],
                            violet: _0x4f9f[278],
                            violetred: _0x4f9f[279],
                            wheat: _0x4f9f[280],
                            white: _0x4f9f[281],
                            whitesmoke: _0x4f9f[282],
                            yellow: _0x4f9f[283],
                            yellowgreen: _0x4f9f[284]
                        };
                        var name;
                        for (name in namedColors) {
                            if (value == name) {
                                value = namedColors[name];
                            }
                        }
                        /** @type {!Array} */
                        var PL$13 = [{
                            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                            example: [_0x4f9f[285], _0x4f9f[286]],
                            process: function (compactProperties) {
                                return [parseInt(compactProperties[1]), parseInt(compactProperties[2]), parseInt(compactProperties[3])];
                            }
                        }, {
                            re: /^(\w{2})(\w{2})(\w{2})$/,
                            example: [_0x4f9f[287], _0x4f9f[288]],
                            process: function (compactProperties) {
                                return [parseInt(compactProperties[1], 16), parseInt(compactProperties[2], 16), parseInt(compactProperties[3], 16)];
                            }
                        }, {
                            re: /^(\w{1})(\w{1})(\w{1})$/,
                            example: [_0x4f9f[289], _0x4f9f[290]],
                            process: function (compactProperties) {
                                return [parseInt(compactProperties[1] + compactProperties[1], 16), parseInt(compactProperties[2] + compactProperties[2], 16), parseInt(compactProperties[3] + compactProperties[3], 16)];
                            }
                        }];
                        /** @type {number} */
                        var PL$17 = 0;
                        for (; PL$17 < PL$13[_0x4f9f[66]]; PL$17++) {
                            var writeScale = PL$13[PL$17][_0x4f9f[291]];
                            var extend = PL$13[PL$17][_0x4f9f[292]];
                            var model = writeScale[_0x4f9f[293]](value);
                            if (model) {
                                var res = extend(model);
                                this[_0x4f9f[294]] = res[0];
                                this[_0x4f9f[295]] = res[1];
                                this[_0x4f9f[296]] = res[2];
                                /** @type {boolean} */
                                this[_0x4f9f[139]] = true;
                            }
                        }
                        this[_0x4f9f[294]] = this[_0x4f9f[294]] < 0 || isNaN(this[_0x4f9f[294]]) ? 0 : this[_0x4f9f[294]] > 255 ? 255 : this[_0x4f9f[294]];
                        this[_0x4f9f[295]] = this[_0x4f9f[295]] < 0 || isNaN(this[_0x4f9f[295]]) ? 0 : this[_0x4f9f[295]] > 255 ? 255 : this[_0x4f9f[295]];
                        this[_0x4f9f[296]] = this[_0x4f9f[296]] < 0 || isNaN(this[_0x4f9f[296]]) ? 0 : this[_0x4f9f[296]] > 255 ? 255 : this[_0x4f9f[296]];
                        /**
                         * @return {?}
                         */
                        this[_0x4f9f[297]] = function () {
                            return _0x4f9f[298] + this[_0x4f9f[294]] + _0x4f9f[299] + this[_0x4f9f[295]] + _0x4f9f[299] + this[_0x4f9f[296]] + _0x4f9f[300];
                        };
                        /**
                         * @return {?}
                         */
                        this[_0x4f9f[301]] = function () {
                            var escapedEmail = this[_0x4f9f[294]].toString(16);
                            var sitesowners = this[_0x4f9f[295]].toString(16);
                            var siteName = this[_0x4f9f[296]].toString(16);
                            if (escapedEmail[_0x4f9f[66]] == 1) {
                                escapedEmail = _0x4f9f[302] + escapedEmail;
                            }
                            if (sitesowners[_0x4f9f[66]] == 1) {
                                sitesowners = _0x4f9f[302] + sitesowners;
                            }
                            if (siteName[_0x4f9f[66]] == 1) {
                                siteName = _0x4f9f[302] + siteName;
                            }
                            return _0x4f9f[141] + escapedEmail + sitesowners + siteName;
                        };
                    }

                    if (signatureInfoEncoding[_0x4f9f[304]](_0x4f9f[303]) !== -1 || signatureInfoEncoding[_0x4f9f[304]](_0x4f9f[305]) !== -1) {
                        return signatureInfoEncoding;
                    } else {
                        var blobmsg = new Blob(signatureInfoEncoding);
                        if (blobmsg[_0x4f9f[139]]) {
                            return blobmsg[_0x4f9f[301]]();
                        }
                    }
                };
                /**
                 * @param {?} mmCoreSplitViewBlock
                 * @param {?} canCreateDiscussions
                 * @return {?}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[306]] = function (mmCoreSplitViewBlock, canCreateDiscussions) {
                    var _0x63dcx38;
                    if (/^#([A-Fa-f0-9]{3}){1,2}$/[_0x4f9f[307]](mmCoreSplitViewBlock)) {
                        _0x63dcx38 = mmCoreSplitViewBlock[_0x4f9f[118]](1)[_0x4f9f[308]](_0x4f9f[9]);
                        if (_0x63dcx38[_0x4f9f[66]] == 3) {
                            /** @type {!Array} */
                            _0x63dcx38 = [_0x63dcx38[0], _0x63dcx38[0], _0x63dcx38[1], _0x63dcx38[1], _0x63dcx38[2], _0x63dcx38[2]];
                        }
                        _0x63dcx38 = _0x4f9f[309] + _0x63dcx38[_0x4f9f[310]](_0x4f9f[9]);
                        return _0x4f9f[311] + [_0x63dcx38 >> 16 & 255, _0x63dcx38 >> 8 & 255, _0x63dcx38 & 255][_0x4f9f[310]](_0x4f9f[312]) + _0x4f9f[312] + canCreateDiscussions + _0x4f9f[300];
                    }
                };
                /**
                 * @param {?} mmCoreSplitViewBlock
                 * @return {?}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[313]] = function (mmCoreSplitViewBlock) {
                    var _0x63dcx38;
                    if (/^#([A-Fa-f0-9]{3}){1,2}$/[_0x4f9f[307]](mmCoreSplitViewBlock)) {
                        _0x63dcx38 = mmCoreSplitViewBlock[_0x4f9f[118]](1)[_0x4f9f[308]](_0x4f9f[9]);
                        if (_0x63dcx38[_0x4f9f[66]] == 3) {
                            /** @type {!Array} */
                            _0x63dcx38 = [_0x63dcx38[0], _0x63dcx38[0], _0x63dcx38[1], _0x63dcx38[1], _0x63dcx38[2], _0x63dcx38[2]];
                        }
                        _0x63dcx38 = _0x4f9f[309] + _0x63dcx38[_0x4f9f[310]](_0x4f9f[9]);
                        return [_0x63dcx38 >> 16 & 255, _0x63dcx38 >> 8 & 255, _0x63dcx38 & 255];
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[314]] = function () {
                    /** @type {!Array} */
                    args = [];
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[129]] = function () {
                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[315]] && $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[317]] > -1) {
                        if (!_0x63dcxb) {
                            /** @type {boolean} */
                            _0x63dcxb = true;
                            $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[318]);
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[319]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[306]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[315]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[317]]);
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[323]](0, 0, $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[321]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[322]]);
                        } else {
                            var _0x63dcx39 = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[313]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[315]]);
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[324]](_0x63dcx39[0], _0x63dcx39[1], _0x63dcx39[2], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[317]]);
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[325]] = function () {
                    if (_0x63dcxb) {
                        $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[326]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[327]]();
                        $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[328]);
                        /** @type {boolean} */
                        _0x63dcxb = false;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[329]](0, 0, $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[321]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[322]]);
                        $(_0x4f9f[331])[_0x4f9f[132]](_0x4f9f[330]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[314]]();
                    }
                };
                /**
                 * @param {?} canCreateDiscussions
                 * @param {?} isSlidingUp
                 * @param {?} dontForceConstraints
                 * @param {?} forceExecution
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[324]] = function (canCreateDiscussions, isSlidingUp, dontForceConstraints, forceExecution) {
                    if (_0x63dcxb) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[329]](0, 0, $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[321]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[322]]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[319]] = _0x4f9f[311] + canCreateDiscussions + _0x4f9f[312] + isSlidingUp + _0x4f9f[312] + dontForceConstraints + _0x4f9f[312] + forceExecution + _0x4f9f[300];
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[323]](0, 0, $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[321]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[322]]);
                    }
                };
                /**
                 * @param {?} div
                 * @return {undefined}
                 */
                var callback = function (div) {
                    div[_0x4f9f[96]](_0x4f9f[332]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[333]] = function () {
                    if (!$(_0x4f9f[334])[_0x4f9f[66]]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]] = document[_0x4f9f[336]](_0x4f9f[335]);
                        $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]])[_0x4f9f[93]](_0x4f9f[92]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[337]] = _0x4f9f[338];
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]] = document[_0x4f9f[339]](_0x4f9f[338]);
                    }
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[341]](_0x4f9f[340]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[342]] = function () {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[321]] = $(window)[_0x4f9f[321]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[322]] = $(window)[_0x4f9f[322]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[129]]();
                };
                /**
                 * @param {number} max_lines
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[343]] = function (max_lines) {
                    if (_0x63dcxb) {
                        /** @type {number} */
                        var line_idx = 0;
                        for (; line_idx < max_lines; line_idx++) {
                            /** @type {number} */
                            var lastArgN = line_idx;
                            var artistTrack = args[lastArgN][_0x4f9f[344]];
                            var numKeysDeleted = args[lastArgN][_0x4f9f[345]];
                            var postDateGmt = args[lastArgN][_0x4f9f[346]];
                            var GET_AUTH_URL_TIMEOUT = args[lastArgN][_0x4f9f[347]];
                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[348]] === 0) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[329]](artistTrack, numKeysDeleted, postDateGmt, GET_AUTH_URL_TIMEOUT);
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[323]](artistTrack, numKeysDeleted, postDateGmt, GET_AUTH_URL_TIMEOUT);
                            }
                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[348]] == 1) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[324]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[349]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[350]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[351]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[352]]);
                            }
                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[348]] == 2) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[324]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[349]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[350]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[351]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[352]]);
                            }
                            if (line_idx == max_lines - 1) {
                                /** @type {!Array} */
                                args = [];
                            }
                        }
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[327]]();
                    }
                };
                /**
                 * @param {!NodeList} d
                 * @param {number} clientHeight
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[353]] = function (d, clientHeight) {
                    if (_0x63dcxb) {
                        cancelAnimationFrame(id);
                        /** @type {number} */
                        var span = 0;
                        /** @type {number} */
                        var timeframe = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[354]] / 16.666;
                        /** @type {number} */
                        var options = timeframe + 1;
                        /** @type {number} */
                        var artistTrack = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[352]] * 10;
                        /** @type {number} */
                        var GET_AUTH_URL_TIMEOUT = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[355]] * 10;
                        /**
                         * @return {undefined}
                         */
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[356]] = function () {
                            var result;
                            var settings;
                            var value;
                            var numKeysDeleted;
                            var s;
                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[357]]) {
                                if ($[_0x4f9f[63]]) {
                                    result = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[112]](span, $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[349]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[358]], options);
                                    settings = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[112]](span, $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[350]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[359]], options);
                                    value = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[112]](span, $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[351]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[360]], options);
                                    /** @type {number} */
                                    numKeysDeleted = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[112]](span, artistTrack, GET_AUTH_URL_TIMEOUT, options) / 10;
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[324]](result, settings, value, numKeysDeleted);
                                }
                            }
                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[361]] == 1) {
                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[357]]) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[324]](result, settings, value, numKeysDeleted);
                                } else {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[324]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[349]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[350]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[351]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[352]]);
                                }
                            }
                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[361]] == 2) {
                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[357]]) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[324]](result, settings, value, numKeysDeleted);
                                } else {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[324]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[349]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[350]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[351]], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[352]]);
                                }
                            }
                            /** @type {number} */
                            var mouseposition = 0;
                            for (; mouseposition < d[_0x4f9f[66]]; mouseposition++) {
                                /** @type {number} */
                                var lang = mouseposition;
                                if (!args[lang]) {
                                    args[_0x4f9f[362]]({});
                                }
                                var data = args[lang];
                                var value = d[lang];
                                var artistTrack = data[_0x4f9f[344]] || value[_0x4f9f[363]];
                                var numKeysDeleted = data[_0x4f9f[345]] || value[_0x4f9f[364]];
                                var postDateGmt = data[_0x4f9f[346]] || value[_0x4f9f[321]];
                                var GET_AUTH_URL_TIMEOUT = data[_0x4f9f[347]] || value[_0x4f9f[322]];
                                var _0x63dcx55 = data[_0x4f9f[365]] || value[_0x4f9f[366]];
                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[361]] === 0) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[329]](artistTrack, numKeysDeleted, postDateGmt, GET_AUTH_URL_TIMEOUT);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[323]](artistTrack, numKeysDeleted, postDateGmt, GET_AUTH_URL_TIMEOUT);
                                }
                                var i = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[112]](span, value[_0x4f9f[367]], value[_0x4f9f[368]], options);
                                var ret = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[112]](span, value[_0x4f9f[369]], value[_0x4f9f[370]], options);
                                var right = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[112]](span, value[_0x4f9f[371]], value[_0x4f9f[372]], options);
                                var bottom = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[112]](span, value[_0x4f9f[373]], value[_0x4f9f[374]], options);
                                s = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[112]](span, value[_0x4f9f[375]], value[_0x4f9f[376]], options);
                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[348]] === 0) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[329]](i, ret, right, bottom);
                                }
                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[348]] == 1) {
                                    var artistTrack = (i + right / 2)[_0x4f9f[377]](0);
                                    var GET_AUTH_URL_TIMEOUT = (ret + bottom / 2)[_0x4f9f[377]](0);
                                    var numKeysDeleted = (Math[_0x4f9f[378]](right * right + bottom * bottom) / 2)[_0x4f9f[377]](0);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[379]] = _0x4f9f[380];
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[381]]();
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[382]](artistTrack, GET_AUTH_URL_TIMEOUT, numKeysDeleted, 0, Math[_0x4f9f[133]] * 2);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[383]]();
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[319]] = _0x4f9f[384];
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[385]]();
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[379]] = _0x4f9f[386];
                                }
                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[348]] == 2) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[379]] = _0x4f9f[380];
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[319]] = _0x4f9f[384];
                                    if (typeof s === _0x4f9f[387]) {
                                        /** @type {number} */
                                        s = 5;
                                    }
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[381]]();
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[388]](i + s, ret);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[389]](i + right - s, ret);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[390]](i + right, ret, i + right, ret + s);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[389]](i + right, ret + bottom - s);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[390]](i + right, ret + bottom, i + right - s, ret + bottom);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[389]](i + s, ret + bottom);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[390]](i, ret + bottom, i, ret + bottom - s);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[389]](i, ret + s);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[390]](i, ret, i + s, ret);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[383]]();
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[385]]();
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[320]][_0x4f9f[379]] = _0x4f9f[386];
                                }
                                data[_0x4f9f[344]] = i;
                                data[_0x4f9f[345]] = ret;
                                data[_0x4f9f[346]] = right;
                                data[_0x4f9f[347]] = bottom;
                                data[_0x4f9f[367]] = value[_0x4f9f[363]];
                                data[_0x4f9f[369]] = value[_0x4f9f[364]];
                                data[_0x4f9f[371]] = value[_0x4f9f[321]];
                                data[_0x4f9f[373]] = value[_0x4f9f[322]];
                                data[_0x4f9f[375]] = value[_0x4f9f[366]];
                            }
                            if (span < timeframe) {
                                span++;
                                id = requestAnimFrame($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[356]]);
                            } else {
                                /** @type {number} */
                                span = 0;
                                cancelAnimationFrame(id);
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[391]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[392]];
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[349]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[393]];
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[350]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[394]];
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[351]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[395]];
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[352]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[396]];
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[361]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[348]];
                                if (clientHeight) {
                                    /** @type {number} */
                                    var targetOffsetHeight = 0;
                                    for (; targetOffsetHeight < clientHeight; targetOffsetHeight++) {
                                        args[_0x4f9f[397]]();
                                    }
                                }
                            }
                        };
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[356]]();
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[327]] = function () {
                    $(_0x4f9f[399])[_0x4f9f[398]]();
                };
                /**
                 * @param {?} canCreateDiscussions
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[400]] = function (canCreateDiscussions) {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[129]]();
                    if (_0x63dcxb) {
                        /** @type {!Array} */
                        var artistTrack = [];
                        var Response = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[315]];
                        var responses = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[313]](Response);
                        var zeroSizeMax = responses[0];
                        var headerCenterY = responses[1];
                        var headerCenterX = responses[2];
                        var regExBonusMultiplier = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[317]];
                        var _0x63dcx63 = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[348]];
                        var ResponseCtor = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[391]] || Response;
                        var pixelSizeTargetMax = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[349]] || zeroSizeMax;
                        var articleAdjustedTopY = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[350]] || headerCenterY;
                        var articleCenterX = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[351]] || headerCenterX;
                        var CommentMatchPenalty = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[352]] >= 0 ? $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[352]] : regExBonusMultiplier;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[393]] = zeroSizeMax;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[394]] = headerCenterY;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[395]] = headerCenterX;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[391]] = ResponseCtor;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[349]] = pixelSizeTargetMax;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[350]] = articleAdjustedTopY;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[351]] = articleCenterX;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[361]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[361]] || _0x63dcx63;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[352]] = CommentMatchPenalty;
                        /** @type {number} */
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[358]] = zeroSizeMax - pixelSizeTargetMax;
                        /** @type {number} */
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[359]] = headerCenterY - articleAdjustedTopY;
                        /** @type {number} */
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[360]] = headerCenterX - articleCenterX;
                        /** @type {number} */
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[355]] = regExBonusMultiplier - CommentMatchPenalty;
                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[391]] != $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[392]] || $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[352]] != $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[396]]) {
                            /** @type {boolean} */
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[357]] = true;
                        } else {
                            /** @type {boolean} */
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[357]] = false;
                        }
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[327]]();
                        canCreateDiscussions[_0x4f9f[71]](function (s) {
                            /** @type {number} */
                            var style = s;
                            var $realtime = $(this);
                            var Xorigin = $realtime[_0x4f9f[401]]();
                            var firstColLeft = $realtime[_0x4f9f[402]]();
                            var groupsize = ($realtime[_0x4f9f[404]]()[_0x4f9f[403]] - $(window)[_0x4f9f[405]]())[_0x4f9f[377]](0);
                            var headerCenterY = ($realtime[_0x4f9f[404]]()[_0x4f9f[406]] - $(window)[_0x4f9f[407]]())[_0x4f9f[377]](0);
                            var articleAdjustedTopY = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[408]];
                            var rx = Xorigin + articleAdjustedTopY * 2;
                            var ry = firstColLeft + articleAdjustedTopY * 2;
                            /** @type {number} */
                            var zeroSizeMax = groupsize - articleAdjustedTopY;
                            /** @type {number} */
                            var deltaY = headerCenterY - articleAdjustedTopY;
                            /** @type {number} */
                            var front_range = rx > ry ? ry / 2 : rx / 2;
                            var range_from = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[409]];
                            /** @type {number} */
                            var _axisMinX = $realtime[_0x4f9f[404]]()[_0x4f9f[403]] - articleAdjustedTopY;
                            /** @type {number} */
                            var last_update = $realtime[_0x4f9f[404]]()[_0x4f9f[406]] - articleAdjustedTopY;
                            var argR = rx;
                            var arg = ry;
                            /** @type {number} */
                            var br = 0;
                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[348]] == 2) {
                                br = range_from > front_range ? front_range : range_from;
                                range_from = br;
                            }
                            if ($realtime[_0x4f9f[410]](_0x4f9f[92])) {
                                /** @type {number} */
                                articleAdjustedTopY = 0;
                                /** @type {number} */
                                rx = 0;
                                /** @type {number} */
                                ry = 0;
                                /** @type {number} */
                                zeroSizeMax = $(window)[_0x4f9f[321]]() / 2;
                                /** @type {number} */
                                deltaY = $(window)[_0x4f9f[322]]() / 2;
                            }
                            if (!args[style]) {
                                args[_0x4f9f[362]]({});
                            }
                            var pixelSizeTargetMax = args[style][_0x4f9f[367]] || zeroSizeMax;
                            var radiusObj = args[style][_0x4f9f[369]] || deltaY;
                            var qw = args[style][_0x4f9f[371]] || rx;
                            var ly = args[style][_0x4f9f[373]] || ry;
                            var _0x63dcx7e = args[style][_0x4f9f[375]] || range_from;
                            artistTrack[_0x4f9f[362]]({
                                width: rx,
                                height: ry,
                                x: zeroSizeMax,
                                y: deltaY,
                                BR: range_from,
                                saveX: pixelSizeTargetMax,
                                saveY: radiusObj,
                                saveW: qw,
                                saveH: ly,
                                saveBR: _0x63dcx7e,
                                pathX: zeroSizeMax - pixelSizeTargetMax,
                                pathY: deltaY - radiusObj,
                                pathW: rx - qw,
                                pathH: ry - ly,
                                pathBR: range_from - _0x63dcx7e,
                                prevX: args[style][_0x4f9f[344]] || zeroSizeMax,
                                prevY: args[style][_0x4f9f[345]] || deltaY,
                                prevW: args[style][_0x4f9f[346]] || rx,
                                prevH: args[style][_0x4f9f[347]] || ry,
                                prevBR: args[style][_0x4f9f[365]] || range_from
                            });
                            if (s == canCreateDiscussions[_0x4f9f[66]] - 1) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[411]](args, artistTrack);
                            }
                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[348]] == 1) {
                                /** @type {number} */
                                var _axisMaxX = Math[_0x4f9f[378]](argR * argR + arg * arg) / 2;
                                /** @type {number} */
                                _axisMinX = _axisMinX - (_axisMaxX - argR / 2);
                                /** @type {number} */
                                last_update = last_update - (_axisMaxX - arg / 2);
                                /** @type {number} */
                                argR = _axisMaxX * 2;
                                /** @type {number} */
                                arg = _axisMaxX * 2;
                                br = _0x4f9f[412];
                            }
                            /** @type {number} */
                            var rra_end_time = last_update - $(window)[_0x4f9f[407]]();
                            /** @type {number} */
                            var minX = _axisMinX - $(window)[_0x4f9f[405]]();
                            $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[414])[_0x4f9f[413]]({
                                left: minX,
                                top: rra_end_time,
                                width: argR,
                                height: arg,
                                borderRadius: br
                            })[_0x4f9f[93]](_0x4f9f[92]);
                        });
                        if (!canCreateDiscussions[_0x4f9f[66]]) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[343]](args[_0x4f9f[66]]);
                        }
                    }
                };
                /**
                 * @param {?} object
                 * @return {?}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[416]] = function (object) {
                    if (object) {
                        if (object[_0x4f9f[85]] > -1) {
                            /** @type {number} */
                            object[_0x4f9f[85]] = parseFloat(object[_0x4f9f[85]]);
                        }
                        if (object[_0x4f9f[417]] > -1) {
                            /** @type {number} */
                            object[_0x4f9f[417]] = parseFloat(object[_0x4f9f[417]]);
                        }
                        if (object[_0x4f9f[348]] > -1) {
                            /** @type {number} */
                            object[_0x4f9f[348]] = parseFloat(object[_0x4f9f[348]]);
                        }
                        if (object[_0x4f9f[409]] > -1) {
                            /** @type {number} */
                            object[_0x4f9f[409]] = parseFloat(object[_0x4f9f[409]]);
                        }
                        if (object[_0x4f9f[418]] > -1) {
                            /** @type {number} */
                            object[_0x4f9f[418]] = parseFloat(object[_0x4f9f[418]]);
                        }
                    }
                    return object;
                };
                /**
                 * @param {!NodeList} element
                 * @param {!NodeList} xhr
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[411]] = function (element, xhr) {
                    var clientHeight = element[_0x4f9f[66]];
                    var listener = xhr[_0x4f9f[66]];
                    if (clientHeight > listener) {
                        /** @type {number} */
                        var responseText = listener - 1;
                        /** @type {number} */
                        var alwaysDownload = clientHeight - listener;
                        var data = JSON[_0x4f9f[419]](xhr[responseText]);
                        var type = JSON[_0x4f9f[420]](data);
                        /** @type {number} */
                        var targetOffsetHeight = 0;
                        for (; targetOffsetHeight < clientHeight; targetOffsetHeight++) {
                            /** @type {number} */
                            var name = targetOffsetHeight;
                            if (name > listener - 1) {
                                xhr[name] = type;
                                xhr[name][_0x4f9f[367]] = element[name][_0x4f9f[367]];
                                xhr[name][_0x4f9f[369]] = element[name][_0x4f9f[369]];
                                xhr[name][_0x4f9f[371]] = element[name][_0x4f9f[371]];
                                xhr[name][_0x4f9f[373]] = element[name][_0x4f9f[373]];
                                xhr[name][_0x4f9f[344]] = element[name][_0x4f9f[344]];
                                xhr[name][_0x4f9f[345]] = element[name][_0x4f9f[345]];
                                xhr[name][_0x4f9f[346]] = element[name][_0x4f9f[346]];
                                xhr[name][_0x4f9f[347]] = element[name][_0x4f9f[347]];
                                /** @type {number} */
                                xhr[name][_0x4f9f[368]] = xhr[name][_0x4f9f[363]] - element[name][_0x4f9f[367]];
                                /** @type {number} */
                                xhr[name][_0x4f9f[370]] = xhr[name][_0x4f9f[364]] - element[name][_0x4f9f[369]];
                                /** @type {number} */
                                xhr[name][_0x4f9f[372]] = xhr[name][_0x4f9f[321]] - element[name][_0x4f9f[371]];
                                /** @type {number} */
                                xhr[name][_0x4f9f[374]] = xhr[name][_0x4f9f[322]] - element[name][_0x4f9f[373]];
                                if (name == clientHeight - 1) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[353]](xhr, alwaysDownload);
                                }
                            }
                        }
                    } else {
                        if (listener) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[353]](xhr);
                        } else {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[343]](element[_0x4f9f[66]]);
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[421]] = function () {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[422]] = {
                        tOpacity: $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[85]] > -1 ? $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[85]] : 0.5,
                        tColor: $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[86]] || _0x4f9f[4],
                        tMargin: parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[417]]) > -1 ? parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[417]]) : 10,
                        tDuration: 300,
                        shape: parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[348]]) > -1 ? parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[348]]) : 0,
                        shapeBorderRadius: parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[409]]) > -1 ? parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[409]]) : 5
                    };
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[423]] = {
                        tOpacity: 1.1,
                        tColor: _0x4f9f[424],
                        tMargin: 10,
                        tDuration: 300,
                        shape: 0,
                        shapeBorderRadius: 4
                    };
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[317]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[422]][_0x4f9f[317]];
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[315]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[422]][_0x4f9f[315]];
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[408]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[422]][_0x4f9f[408]];
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[354]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[422]][_0x4f9f[354]];
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[348]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[422]][_0x4f9f[348]];
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[409]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[422]][_0x4f9f[409]];
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[425]] = function () {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[333]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[342]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[421]]();
                };
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[425]]();
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[426]] = _0x4f9f[9];
                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[427]]) {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[426]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[427]];
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[428]] = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[432])[_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[427]])[_0x4f9f[93]]($(_0x4f9f[431], temp)[_0x4f9f[430]]()[_0x4f9f[429]]());
                }
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[433]] = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[435])[_0x4f9f[93]]($(_0x4f9f[434], temp)[_0x4f9f[430]]()[_0x4f9f[429]]());
                /** @type {!Array} */
                var getComputeFrom = [];
                /** @type {number} */
                var _0x63dcx87 = 0;
                /** @type {number} */
                var _0x63dcx88 = 0;
                var prefixedVal = location[_0x4f9f[436]];
                /**
                 * @param {?} el
                 * @return {undefined}
                 */
                var annoBodyForSelector = function (el) {
                    if (!el[_0x4f9f[437]]) {
                        el[_0x4f9f[437]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[437]] || prefixedVal;
                    }
                    if (typeof el[_0x4f9f[438]] == _0x4f9f[387]) {
                        el[_0x4f9f[438]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[438]];
                    }
                    if (!parseFloat(el[_0x4f9f[439]])) {
                        if (el[_0x4f9f[439]] === false || el[_0x4f9f[439]] === 0 || el[_0x4f9f[439]] === _0x4f9f[302]) {
                            /** @type {boolean} */
                            el[_0x4f9f[439]] = false;
                        } else {
                            if (parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[439]]) > 0) {
                                el[_0x4f9f[439]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[439]];
                            } else {
                                /** @type {boolean} */
                                el[_0x4f9f[439]] = false;
                            }
                        }
                    }
                    getComputeFrom[_0x4f9f[362]](el);
                    var _0x63dcx8c = el[_0x4f9f[440]] ? el[_0x4f9f[440]] : _0x4f9f[441] + (_0x63dcx87 + 1);
                    var resultsContainer = $(_0x4f9f[442] + _0x63dcx87 + _0x4f9f[443] + _0x63dcx8c + _0x4f9f[444] + _0x63dcx8c + _0x4f9f[445])[_0x4f9f[93]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[433]]);
                    if (el[_0x4f9f[446]]) {
                        callback(resultsContainer);
                    }
                    _0x63dcx87++;
                };
                /**
                 * @param {!Object} str
                 * @return {?}
                 */
                var repeat = function (str) {
                    return str[_0x4f9f[143]](/[\-\[\]{}()*+?.,\\\^$|#\s]/g, _0x4f9f[447]);
                };
                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]] && $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]]) {
                    /** @type {number} */
                    var j = 0;
                    for (; j < $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]]; j++) {
                        var _0x63dcx8f = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][j][_0x4f9f[448]];
                        if (!_0x63dcx8f) {
                            var selector = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][j];
                            if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[449]] || selector[_0x4f9f[95]] == _0x4f9f[450]) {
                                annoBodyForSelector(selector);
                            } else {
                                var inputel;
                                if ($(selector[_0x4f9f[451]])[_0x4f9f[66]]) {
                                    inputel = $(selector[_0x4f9f[451]]);
                                } else {
                                    inputel = $(_0x4f9f[452] + selector[_0x4f9f[451]] + _0x4f9f[453]);
                                }
                                if (inputel[_0x4f9f[66]]) {
                                    annoBodyForSelector(selector);
                                }
                            }
                        }
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[426]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[426]] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][j][_0x4f9f[451]];
                    }
                    /** @type {!Array} */
                    $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]] = getComputeFrom;
                }
                var _0x63dcx91 = /iPad|iPhone|iPod/[_0x4f9f[307]](navigator[_0x4f9f[113]]) && !window[_0x4f9f[454]];
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[455]] = _0x63dcx91 ? _0x4f9f[456] : _0x4f9f[457];
                /** @type {boolean} */
                var _0x63dcx92 = false;
                if (_0x63dcx91) {
                    /**
                     * @param {?} canCreateDiscussions
                     * @return {undefined}
                     */
                    document[_0x4f9f[458]] = function (canCreateDiscussions) {
                        /** @type {boolean} */
                        _0x63dcx92 = true;
                    };
                    /**
                     * @param {?} canCreateDiscussions
                     * @return {undefined}
                     */
                    document[_0x4f9f[459]] = function (canCreateDiscussions) {
                        setTimeout(function () {
                            /** @type {boolean} */
                            _0x63dcx92 = false;
                        }, 100);
                    };
                }
                var _0x63dcx94 = _0x4f9f[460] + $[_0x4f9f[63]][_0x4f9f[461]];
                var _0x63dcx95 = _0x4f9f[462] + $[_0x4f9f[63]][_0x4f9f[461]];
                var _0x63dcx96 = _0x4f9f[463] + $[_0x4f9f[63]][_0x4f9f[461]];
                if (_0x4f9f[464] in window) {
                    _0x63dcx94 = _0x4f9f[465] + $[_0x4f9f[63]][_0x4f9f[461]];
                    _0x63dcx95 = _0x4f9f[466] + $[_0x4f9f[63]][_0x4f9f[461]];
                    _0x63dcx96 = _0x4f9f[467] + $[_0x4f9f[63]][_0x4f9f[461]];
                }
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[468]] = _0x63dcx94;
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[469]] = _0x63dcx96;
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[470]] = _0x63dcx95;
                var _0x63dcx97 = !!navigator[_0x4f9f[471]] && /iPad|iPhone|iPod/[_0x4f9f[307]](navigator[_0x4f9f[471]]);
                if (_0x63dcx97) {
                    try {
                        /** @type {number} */
                        localStorage[_0x4f9f[307]] = 2;
                    } catch (e) {
                        alert(_0x4f9f[472]);
                        $[_0x4f9f[65]][_0x4f9f[63]](_0x4f9f[473]);
                        return false;
                    }
                }
                /** @type {number} */
                var counter = 0;
                /**
                 * @param {?} data
                 * @return {?}
                 */
                var handleEvent = function (data) {
                    if (typeof data == _0x4f9f[474]) {
                        return typeof data;
                    }
                    if (typeof data == _0x4f9f[475]) {
                        return typeof data;
                    }
                    if (typeof data == _0x4f9f[476]) {
                        return typeof data;
                    }
                    if (typeof data == _0x4f9f[477]) {
                        return typeof data;
                    }
                    if (typeof data == _0x4f9f[478]) {
                        if (Array[_0x4f9f[479]](data)) {
                            return _0x4f9f[480];
                        } else {
                            return _0x4f9f[478];
                        }
                    }
                };
                /**
                 * @param {?} context
                 * @return {?}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[481]] = function (context) {
                    /** @type {number} */
                    var id = counter++;
                    var obj = context;
                    var sectionsContainer = {};
                    sectionsContainer[id] = {};
                    var prop;
                    for (prop in obj) {
                        if (obj[_0x4f9f[482]](prop)) {
                            /** @type {string} */
                            var name = prop;
                            var data = obj[name];
                            if (handleEvent(data) == _0x4f9f[474]) {
                                sectionsContainer[id][name] = data.toString();
                            }
                            if (handleEvent(data) == _0x4f9f[480]) {
                                var temp = data;
                                /** @type {number} */
                                var i = 0;
                                for (; i < temp[_0x4f9f[66]]; i++) {
                                    if (handleEvent(temp[i]) == _0x4f9f[478]) {
                                        var cur = temp[i];
                                        var link = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[481]](cur);
                                        temp[i] = link;
                                    }
                                }
                                sectionsContainer[id][name] = temp;
                            }
                            if (handleEvent(data) == _0x4f9f[478]) {
                                var vertexAttribute = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[481]](data);
                                sectionsContainer[id][name] = vertexAttribute;
                            }
                            if (handleEvent(data) == _0x4f9f[476] || handleEvent(data) == _0x4f9f[477] || handleEvent(data) == _0x4f9f[475]) {
                                sectionsContainer[id][name] = obj[name];
                            }
                        }
                    }
                    return sectionsContainer[id];
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]] = function () {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[96]](_0x4f9f[484]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[486]] = function () {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[132]](_0x4f9f[484]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[487]] = function () {
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[488]] !== false) {
                        $(_0x4f9f[491])[_0x4f9f[490]]();
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[492]]();
                    }
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[494]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[495]]();
                };
                /**
                 * @param {?} moduleAction
                 * @param {?} moduleName
                 * @param {?} directionOfRotation
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[496]] = function (moduleAction, moduleName, directionOfRotation) {
                    if (!moduleAction) {
                        moduleAction = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[64]](_0x4f9f[497]);
                    }
                    if (!moduleName) {
                        moduleName = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[64]](_0x4f9f[498]);
                    }
                    if (!directionOfRotation) {
                        directionOfRotation = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[64]](_0x4f9f[499]);
                    }
                    var width = $(window)[_0x4f9f[321]]();
                    var rightEdge = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[401]]();
                    if (rightEdge > width - 20) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                            minWidth: width - 20
                        });
                    }
                    /** @type {boolean} */
                    var decimalValue = false;
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                        marginTop: _0x4f9f[9],
                        marginLeft: _0x4f9f[9]
                    });
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[413]]({
                        marginLeft: _0x4f9f[9]
                    });
                    var x = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[404]]()[_0x4f9f[403]] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[321]]();
                    var BREAKING_NEWS_THRESHOLD = $(window)[_0x4f9f[322]]();
                    /** @type {number} */
                    var admincoursecontents = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[404]]()[_0x4f9f[406]] - $(window)[_0x4f9f[407]]();
                    var intervalsLength = admincoursecontents + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[322]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[486]]();
                    var value;
                    /**
                     * @param {number} angle
                     * @return {undefined}
                     */
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[501]] = function (angle) {
                        if (moduleAction == _0x4f9f[502] || moduleAction == _0x4f9f[294]) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                        }
                        if (moduleAction == _0x4f9f[503] || moduleAction == _0x4f9f[296]) {
                            if (directionOfRotation == _0x4f9f[294] && angle > 0) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                            }
                            if (directionOfRotation == _0x4f9f[502] && angle < 0) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                            }
                            if (moduleName == _0x4f9f[504]) {
                                if (directionOfRotation == _0x4f9f[504]) {
                                    if (angle < 0) {
                                        if (angle - 15 < -$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[401]]() / 2) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                    if (angle > 0) {
                                        if (angle + 15 > $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[401]]() / 2) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                }
                                if (directionOfRotation == _0x4f9f[294]) {
                                    if (angle < 0) {
                                        if (angle - 15 < -$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[401]]()) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                }
                                if (directionOfRotation == _0x4f9f[502]) {
                                    if (angle > 0) {
                                        if (angle + 15 > $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[401]]()) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                }
                            }
                            if (moduleName == _0x4f9f[294] || moduleName == _0x4f9f[502]) {
                                if (directionOfRotation == _0x4f9f[294]) {
                                    if (angle < 0) {
                                        if (angle - 15 < -$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[401]]()) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                }
                                if (directionOfRotation == _0x4f9f[502]) {
                                    if (angle > 0) {
                                        if (angle + 15 > $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[401]]()) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                }
                                if (directionOfRotation == _0x4f9f[504]) {
                                    if (angle < 0) {
                                        if (angle - 15 < -$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[401]]() / 2) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                    if (angle > 0) {
                                        if (angle + 15 > $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[401]]() / 2) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                }
                            }
                        }
                    };
                    /**
                     * @param {number} angle
                     * @return {undefined}
                     */
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[505]] = function (angle) {
                        if (moduleAction == _0x4f9f[503] || moduleAction == _0x4f9f[296]) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                        }
                        if (moduleAction == _0x4f9f[502] || moduleAction == _0x4f9f[294]) {
                            if (directionOfRotation == _0x4f9f[296] && angle > 0) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                            }
                            if (directionOfRotation == _0x4f9f[503] && angle < 0) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                            }
                            if (moduleName == _0x4f9f[504]) {
                                if (directionOfRotation == _0x4f9f[504]) {
                                    if (angle < 0) {
                                        if (angle - 15 < -$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[402]]() / 2) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                    if (angle > 0) {
                                        if (angle + 15 > $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[402]]() / 2) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                }
                                if (directionOfRotation == _0x4f9f[296]) {
                                    if (angle < 0) {
                                        if (angle - 15 < -$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[402]]()) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                }
                                if (directionOfRotation == _0x4f9f[503]) {
                                    if (angle > 0) {
                                        if (angle + 15 > $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[402]]()) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                }
                            }
                            if (moduleName == _0x4f9f[296] || moduleName == _0x4f9f[503]) {
                                if (directionOfRotation == _0x4f9f[296]) {
                                    if (angle < 0) {
                                        if (angle - 15 < -$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[402]]()) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                }
                                if (directionOfRotation == _0x4f9f[503]) {
                                    if (angle > 0) {
                                        if (angle + 15 > $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[402]]()) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                }
                                if (directionOfRotation == _0x4f9f[504]) {
                                    if (angle < 0) {
                                        if (angle - 15 < -$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[402]]() / 2) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                    if (angle > 0) {
                                        if (angle + 15 > $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[402]]() / 2) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                                        }
                                    }
                                }
                            }
                        }
                    };
                    if (x > width - 10) {
                        /** @type {boolean} */
                        decimalValue = true;
                        /** @type {number} */
                        value = -(x - width + 10);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                            marginLeft: value
                        });
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[501]](value);
                    }
                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[404]]()[_0x4f9f[403]] < 10) {
                        /** @type {boolean} */
                        decimalValue = true;
                        /** @type {number} */
                        value = -$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[404]]()[_0x4f9f[403]] + 10;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                            marginLeft: value
                        });
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[501]](value);
                    }
                    if (intervalsLength > BREAKING_NEWS_THRESHOLD - 10) {
                        /** @type {boolean} */
                        decimalValue = true;
                        /** @type {number} */
                        value = -(intervalsLength - BREAKING_NEWS_THRESHOLD + 10);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                            marginTop: value
                        });
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[505]](value);
                    }
                    if (admincoursecontents < 10) {
                        /** @type {boolean} */
                        decimalValue = true;
                        /** @type {number} */
                        value = admincoursecontents * -1 + 10;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                            marginTop: value
                        });
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[505]](value);
                    }
                    if (moduleAction == _0x4f9f[504] && moduleName == _0x4f9f[504] && directionOfRotation == _0x4f9f[504]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                            marginLeft: _0x4f9f[9]
                        });
                    }
                    if (directionOfRotation !== _0x4f9f[504] && decimalValue) {
                    }
                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[322]]() > BREAKING_NEWS_THRESHOLD - 20) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[483]]();
                    }
                    if (decimalValue) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[96]](_0x4f9f[506]);
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[132]](_0x4f9f[506]);
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[507]] = function () {
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[507]] !== undefined) {
                        try {
                            var gotoNewOfflinePage = (new Function(_0x4f9f[508] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[507]]))();
                            gotoNewOfflinePage();
                        } catch (e) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[510]);
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[511]] = function () {
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[511]] !== undefined) {
                        try {
                            var gotoNewOfflinePage = (new Function(_0x4f9f[508] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[511]]))();
                            gotoNewOfflinePage();
                        } catch (e) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[510]);
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[512]] = function () {
                    localStorage[_0x4f9f[514]](_0x4f9f[513], _0x4f9f[512]);
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[512]] !== undefined) {
                        try {
                            var gotoNewOfflinePage = (new Function(_0x4f9f[508] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[512]]))();
                            gotoNewOfflinePage();
                        } catch (e) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[510]);
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[515]] = function () {
                    localStorage[_0x4f9f[514]](_0x4f9f[513], _0x4f9f[515]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[516]](0);
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[515]] !== undefined) {
                        try {
                            var gotoNewOfflinePage = (new Function(_0x4f9f[508] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[515]]))();
                            gotoNewOfflinePage();
                        } catch (e) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[510]);
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[517]] = function () {
                    localStorage[_0x4f9f[514]](_0x4f9f[513], _0x4f9f[517]);
                    localStorage[_0x4f9f[514]](_0x4f9f[518], _0x4f9f[302]);
                    localStorage[_0x4f9f[520]](_0x4f9f[519]);
                    localStorage[_0x4f9f[520]](_0x4f9f[521]);
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[517]] !== undefined) {
                        try {
                            var gotoNewOfflinePage = (new Function(_0x4f9f[508] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[517]]))();
                            gotoNewOfflinePage();
                        } catch (e) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[510]);
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[522]] = function () {
                    localStorage[_0x4f9f[514]](_0x4f9f[513], _0x4f9f[522]);
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[522]] !== undefined) {
                        try {
                            var gotoNewOfflinePage = (new Function(_0x4f9f[508] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[522]]))();
                            gotoNewOfflinePage();
                        } catch (e) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[510]);
                        }
                    }
                    localStorage[_0x4f9f[520]](_0x4f9f[521]);
                    localStorage[_0x4f9f[520]](_0x4f9f[519]);
                    localStorage[_0x4f9f[520]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]]);
                    localStorage[_0x4f9f[520]](_0x4f9f[525]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[526]] = function () {
                    localStorage[_0x4f9f[514]](_0x4f9f[513], _0x4f9f[526]);
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[526]] !== undefined) {
                        try {
                            var gotoNewOfflinePage = (new Function(_0x4f9f[508] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[526]]))();
                            gotoNewOfflinePage();
                        } catch (e) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[510]);
                        }
                    }
                    if (!$[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]]) {
                        localStorage[_0x4f9f[514]](_0x4f9f[513], _0x4f9f[527]);
                    }
                };
                $(document)[_0x4f9f[545]](_0x4f9f[528], function (datapair) {
                    if ($[_0x4f9f[63]]) {
                        if (!$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[529]]) {
                            if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[530]]) {
                                if (parseFloat(datapair[_0x4f9f[531]]) == 27) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[532]);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[515]]();
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[517]]();
                                    $[_0x4f9f[65]][_0x4f9f[63]](_0x4f9f[473]);
                                }
                                if (parseFloat(datapair[_0x4f9f[531]]) == 39) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[533]);
                                    iGuider(_0x4f9f[17]);
                                }
                                if (parseFloat(datapair[_0x4f9f[531]]) == 37) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[534]);
                                    iGuider(_0x4f9f[535]);
                                }
                                if (parseFloat(datapair[_0x4f9f[531]]) == 13) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[536]);
                                    if ($(_0x4f9f[131])[_0x4f9f[410]](_0x4f9f[537])) {
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[538]);
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[540]][_0x4f9f[96]](_0x4f9f[539]);
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[540]][_0x4f9f[541]](_0x4f9f[457]);
                                    }
                                    if ($(_0x4f9f[131])[_0x4f9f[410]](_0x4f9f[542])) {
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[543]);
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[544]][_0x4f9f[96]](_0x4f9f[539]);
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[544]][_0x4f9f[541]](_0x4f9f[457]);
                                    }
                                }
                            }
                        }
                    }
                });
                /**
                 * @param {?} canCreateDiscussions
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[546]] = function (canCreateDiscussions) {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[547]);
                    if (canCreateDiscussions && canCreateDiscussions[_0x4f9f[66]]) {
                        /** @type {!Array} */
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[548]] = [];
                        var revealAmt = $(window)[_0x4f9f[321]]();
                        var surfaceHitPosY = $(window)[_0x4f9f[322]]();
                        var pixelSizeTargetMax = $(window)[_0x4f9f[407]]();
                        var articleAdjustedTopY = $(window)[_0x4f9f[405]]();
                        /** @type {number} */
                        var uml = 10;
                        canCreateDiscussions[_0x4f9f[71]](function (canCreateDiscussions) {
                            var $realtime = $(this);
                            var j = Math[_0x4f9f[549]]($realtime[_0x4f9f[401]]());
                            var Ymain = Math[_0x4f9f[549]]($realtime[_0x4f9f[402]]());
                            var Ytitle = Math[_0x4f9f[549]]($realtime[_0x4f9f[404]]()[_0x4f9f[406]]);
                            var map_i = Math[_0x4f9f[549]]($realtime[_0x4f9f[404]]()[_0x4f9f[403]]);
                            var $set = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]];
                            var _0x63dcxc3 = $[_0x4f9f[82]]($set[_0x4f9f[95]])[_0x4f9f[308]](_0x4f9f[9]);
                            var tabPadding;
                            var _ileft;
                            var _0x63dcxc6 = _0x4f9f[302];
                            var _0x63dcxc7 = _0x4f9f[302];
                            var _0x63dcxc8;
                            var _0x63dcxc9;
                            if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]]) {
                                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[550]]) {
                                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[551]);
                                } else {
                                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[551]);
                                }
                                var map_w = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[408]];
                                var width = _0x4f9f[9];
                                var expectedCellWidth = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[321]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[321]];
                                if (expectedCellWidth) {
                                    width = expectedCellWidth;
                                    width = width.toString();
                                    if (width[_0x4f9f[304]](_0x4f9f[552]) != -1 || width[_0x4f9f[304]](_0x4f9f[553]) != -1) {
                                        width = width[_0x4f9f[143]](_0x4f9f[552], _0x4f9f[553]);
                                    } else {
                                        /** @type {number} */
                                        width = parseFloat(width);
                                    }
                                }
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                                    minWidth: width
                                });
                                var randomColor = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[554]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[554]];
                                if (randomColor) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[555]][_0x4f9f[413]]({
                                        background: randomColor
                                    });
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                                        background: randomColor
                                    });
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[413]]({
                                        color: randomColor
                                    });
                                } else {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[555]][_0x4f9f[413]]({
                                        background: _0x4f9f[9]
                                    });
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                                        background: _0x4f9f[9]
                                    });
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[413]]({
                                        color: _0x4f9f[9]
                                    });
                                }
                                var HeadsetColor = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[556]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[556]];
                                if (HeadsetColor) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[557]][_0x4f9f[413]]({
                                        color: HeadsetColor
                                    });
                                } else {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[557]][_0x4f9f[413]]({
                                        color: _0x4f9f[9]
                                    });
                                }
                                var _titleBarColor = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[558]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[558]];
                                if (_titleBarColor) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[559]][_0x4f9f[413]]({
                                        color: _titleBarColor
                                    });
                                } else {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[559]][_0x4f9f[413]]({
                                        color: _0x4f9f[9]
                                    });
                                }
                                var _0x63dcxd0 = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[560]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[560]];
                                if (_0x63dcxd0) {
                                    $(_0x4f9f[561])[_0x4f9f[398]]();
                                    $(_0x4f9f[564])[_0x4f9f[131]](_0x4f9f[562] + _0x63dcxd0 + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                                } else {
                                    $(_0x4f9f[561])[_0x4f9f[398]]();
                                }
                                var _0x63dcxd1 = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[565]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[565]];
                                if (_0x63dcxd1) {
                                    $(_0x4f9f[566])[_0x4f9f[398]]();
                                    $(_0x4f9f[570])[_0x4f9f[131]](_0x4f9f[567] + _0x63dcxd1 + _0x4f9f[568] + _0x63dcxd1 + _0x4f9f[569])[_0x4f9f[93]](_0x4f9f[131]);
                                } else {
                                    $(_0x4f9f[566])[_0x4f9f[398]]();
                                }
                                var _0x63dcxd2 = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[571]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[571]];
                                if (_0x63dcxd2) {
                                    $(_0x4f9f[572])[_0x4f9f[398]]();
                                    $(_0x4f9f[574])[_0x4f9f[131]](_0x4f9f[573] + _0x63dcxd2 + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                                } else {
                                    $(_0x4f9f[572])[_0x4f9f[398]]();
                                }
                                var _0x63dcxd3 = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[575]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[575]];
                                if (_0x63dcxd3) {
                                    $(_0x4f9f[576])[_0x4f9f[398]]();
                                    $(_0x4f9f[578])[_0x4f9f[131]](_0x4f9f[577] + _0x63dcxd3 + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                                } else {
                                    $(_0x4f9f[576])[_0x4f9f[398]]();
                                }
                                var _0x63dcxd4 = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[571]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[571]];
                                if (_0x63dcxd4) {
                                    $(_0x4f9f[579])[_0x4f9f[398]]();
                                    $(_0x4f9f[581])[_0x4f9f[131]](_0x4f9f[580] + _0x63dcxd4 + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                                } else {
                                    $(_0x4f9f[579])[_0x4f9f[398]]();
                                }
                                var _0x63dcxd5 = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[575]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[575]];
                                if (_0x63dcxd5) {
                                    $(_0x4f9f[582])[_0x4f9f[398]]();
                                    $(_0x4f9f[584])[_0x4f9f[131]](_0x4f9f[583] + _0x63dcxd5 + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                                } else {
                                    $(_0x4f9f[582])[_0x4f9f[398]]();
                                }
                                var bgstyle = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[554]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[554]];
                                if (bgstyle) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[91]][_0x4f9f[413]]({
                                        background: bgstyle
                                    });
                                } else {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[91]][_0x4f9f[413]]({
                                        background: _0x4f9f[9]
                                    });
                                }
                                var lighterFillColor = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[556]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[556]];
                                if (lighterFillColor) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[428]][_0x4f9f[413]]({
                                        color: lighterFillColor
                                    });
                                } else {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[428]][_0x4f9f[413]]({
                                        color: _0x4f9f[9]
                                    });
                                }
                                var _0x63dcxd8 = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[585]];
                                if (_0x63dcxd8) {
                                    $(_0x4f9f[586])[_0x4f9f[398]]();
                                    $(_0x4f9f[588])[_0x4f9f[131]](_0x4f9f[587] + _0x63dcxd8 + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                                } else {
                                    $(_0x4f9f[586])[_0x4f9f[398]]();
                                }
                                var _0x63dcxd9 = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[589]];
                                if (_0x63dcxd9) {
                                    $(_0x4f9f[590])[_0x4f9f[398]]();
                                    $(_0x4f9f[592])[_0x4f9f[131]](_0x4f9f[591] + _0x63dcxd9 + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                                } else {
                                    $(_0x4f9f[590])[_0x4f9f[398]]();
                                }
                                var _0x63dcxda = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[593]];
                                if (_0x63dcxda) {
                                    $(_0x4f9f[594])[_0x4f9f[398]]();
                                    $(_0x4f9f[596])[_0x4f9f[131]](_0x4f9f[595] + _0x63dcxda + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                                } else {
                                    $(_0x4f9f[594])[_0x4f9f[398]]();
                                }
                                var _0x63dcxdb = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[597]];
                                if (_0x63dcxdb) {
                                    $(_0x4f9f[598])[_0x4f9f[398]]();
                                    $(_0x4f9f[600])[_0x4f9f[131]](_0x4f9f[599] + _0x63dcxdb + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                                } else {
                                    $(_0x4f9f[598])[_0x4f9f[398]]();
                                }
                                var _0x63dcxdc = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[601]];
                                if (_0x63dcxdc) {
                                    $(_0x4f9f[602])[_0x4f9f[398]]();
                                    $(_0x4f9f[604])[_0x4f9f[131]](_0x4f9f[603] + _0x63dcxdc + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                                } else {
                                    $(_0x4f9f[602])[_0x4f9f[398]]();
                                }
                                var _0x63dcxdd = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[605]];
                                if (_0x63dcxdd) {
                                    $(_0x4f9f[606])[_0x4f9f[398]]();
                                    $(_0x4f9f[608])[_0x4f9f[131]](_0x4f9f[607] + _0x63dcxdd + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                                } else {
                                    $(_0x4f9f[606])[_0x4f9f[398]]();
                                }
                                var _0x63dcxde = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[609]];
                                if (_0x63dcxde) {
                                    $(_0x4f9f[610])[_0x4f9f[398]]();
                                    $(_0x4f9f[612])[_0x4f9f[131]](_0x4f9f[611] + _0x63dcxde + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                                } else {
                                    $(_0x4f9f[610])[_0x4f9f[398]]();
                                }
                                var _0x63dcxdf = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[560]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[560]];
                                if (_0x63dcxdf) {
                                    $(_0x4f9f[613])[_0x4f9f[398]]();
                                    $(_0x4f9f[615])[_0x4f9f[131]](_0x4f9f[614] + _0x63dcxdf + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                                } else {
                                    $(_0x4f9f[613])[_0x4f9f[398]]();
                                }
                                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[95]] == _0x4f9f[450] || !$[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[451]]) {
                                    /** @type {!Array} */
                                    _0x63dcxc3 = [_0x4f9f[504], _0x4f9f[504], _0x4f9f[504]];
                                    _ileft = _0x4f9f[412];
                                    tabPadding = _0x4f9f[412];
                                } else {
                                    if (_0x63dcxc3[_0x4f9f[66]] != 3 || _0x63dcxc3[0] != _0x4f9f[503] && _0x63dcxc3[0] != _0x4f9f[294] && _0x63dcxc3[0] != _0x4f9f[296] && _0x63dcxc3[0] != _0x4f9f[502]) {
                                        $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[95]] = _0x4f9f[15];
                                    }
                                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[95]] == _0x4f9f[15]) {
                                        /** @type {!Array} */
                                        _0x63dcxc3 = [];
                                        /** @type {number} */
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[616]] = Ytitle - pixelSizeTargetMax;
                                        /** @type {number} */
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[617]] = map_i - articleAdjustedTopY;
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[618]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[401]]();
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[619]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[402]]();
                                        /** @type {number} */
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[101]][_0x4f9f[620]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[616]] - (uml + map_w);
                                        /** @type {number} */
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[102]][_0x4f9f[620]] = surfaceHitPosY - ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[616]] + Ymain) - (uml + map_w);
                                        /** @type {number} */
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[103]][_0x4f9f[621]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[617]] - (uml + map_w);
                                        /** @type {number} */
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[104]][_0x4f9f[621]] = revealAmt - ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[617]] + j) - (uml + map_w);
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[622]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[101]][_0x4f9f[620]];
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[623]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[103]][_0x4f9f[621]];
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[624]] = _0x4f9f[503];
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[625]] = _0x4f9f[502];
                                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[102]][_0x4f9f[620]] > $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[101]][_0x4f9f[620]]) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[622]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[102]][_0x4f9f[620]];
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[624]] = _0x4f9f[296];
                                        }
                                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[104]][_0x4f9f[621]] > $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[103]][_0x4f9f[621]]) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[623]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[104]][_0x4f9f[621]];
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[625]] = _0x4f9f[294];
                                        }
                                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[622]] > $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[619]]) {
                                            _0x63dcxc3[0] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[624]];
                                            _0x63dcxc3[1] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[625]];
                                            _0x63dcxc3[2] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[625]];
                                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[624]] == _0x4f9f[503]) {
                                                /** @type {number} */
                                                tabPadding = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[616]] - (map_w + 15);
                                            } else {
                                                tabPadding = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[616]] + Ymain + map_w + 15;
                                            }
                                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[625]] == _0x4f9f[502]) {
                                                /** @type {number} */
                                                _ileft = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[617]] - map_w;
                                            } else {
                                                _ileft = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[617]] + j + map_w;
                                            }
                                        } else {
                                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[623]] > $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[618]]) {
                                                _0x63dcxc3[0] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[625]];
                                                _0x63dcxc3[1] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[624]];
                                                _0x63dcxc3[2] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[624]];
                                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[625]] == _0x4f9f[502]) {
                                                    /** @type {number} */
                                                    _ileft = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[617]] - (map_w + 15);
                                                } else {
                                                    _ileft = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[617]] + j + map_w + 15;
                                                }
                                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[624]] == _0x4f9f[503]) {
                                                    /** @type {number} */
                                                    tabPadding = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[616]] - map_w;
                                                } else {
                                                    tabPadding = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[616]] + Ymain + map_w;
                                                }
                                            } else {
                                                _0x63dcxc3[0] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[624]];
                                                _0x63dcxc3[1] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[625]];
                                                _0x63dcxc3[2] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[625]];
                                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[624]] == _0x4f9f[503]) {
                                                    /** @type {number} */
                                                    tabPadding = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[616]] - (map_w + 15);
                                                } else {
                                                    tabPadding = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[616]] + Ymain + map_w + 15;
                                                }
                                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[625]] == _0x4f9f[502]) {
                                                    /** @type {number} */
                                                    _ileft = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[617]] - map_w;
                                                } else {
                                                    _ileft = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[617]] + j + map_w;
                                                }
                                            }
                                        }
                                    } else {
                                        if (_0x63dcxc3[0] == _0x4f9f[294]) {
                                            /** @type {number} */
                                            _ileft = map_i + map_w + j + 15 - $(window)[_0x4f9f[405]]();
                                            _0x63dcxc6 = _0x4f9f[302];
                                            _0x63dcxc8 = _0x4f9f[302];
                                        }
                                        if (_0x63dcxc3[0] == _0x4f9f[502]) {
                                            /** @type {number} */
                                            _ileft = map_i - (map_w + 15) - $(window)[_0x4f9f[405]]();
                                            _0x63dcxc6 = _0x4f9f[626];
                                            _0x63dcxc8 = _0x4f9f[302];
                                        }
                                        if (_0x63dcxc3[0] == _0x4f9f[296]) {
                                            /** @type {number} */
                                            tabPadding = Ytitle + map_w + Ymain - $(window)[_0x4f9f[407]]() + 15;
                                            _0x63dcxc7 = _0x4f9f[302];
                                            _0x63dcxc9 = _0x4f9f[302];
                                        }
                                        if (_0x63dcxc3[0] == _0x4f9f[503]) {
                                            /** @type {number} */
                                            tabPadding = Ytitle - (map_w + 15) - $(window)[_0x4f9f[407]]();
                                            _0x63dcxc7 = _0x4f9f[626];
                                            _0x63dcxc9 = _0x4f9f[302];
                                        }
                                        if (_0x63dcxc3[1] == _0x4f9f[504] && _0x63dcxc3[0] == _0x4f9f[294] || _0x63dcxc3[1] == _0x4f9f[504] && _0x63dcxc3[0] == _0x4f9f[502]) {
                                            /** @type {number} */
                                            tabPadding = Ytitle + Ymain / 2 - $(window)[_0x4f9f[407]]();
                                        }
                                        if (_0x63dcxc3[1] == _0x4f9f[296]) {
                                            /** @type {number} */
                                            tabPadding = Ytitle + Ymain + map_w - $(window)[_0x4f9f[407]]();
                                        }
                                        if (_0x63dcxc3[1] == _0x4f9f[503]) {
                                            /** @type {number} */
                                            tabPadding = Ytitle - map_w - $(window)[_0x4f9f[407]]();
                                        }
                                        if (_0x63dcxc3[1] == _0x4f9f[504] && _0x63dcxc3[0] == _0x4f9f[296] || _0x63dcxc3[1] == _0x4f9f[504] && _0x63dcxc3[0] == _0x4f9f[503]) {
                                            /** @type {number} */
                                            _ileft = map_i + j / 2 - $(window)[_0x4f9f[405]]();
                                        }
                                        if (_0x63dcxc3[1] == _0x4f9f[502]) {
                                            /** @type {number} */
                                            _ileft = map_i - map_w - $(window)[_0x4f9f[405]]();
                                        }
                                        if (_0x63dcxc3[1] == _0x4f9f[294]) {
                                            /** @type {number} */
                                            _ileft = map_i + j + map_w - $(window)[_0x4f9f[405]]();
                                        }
                                    }
                                }
                                if (canCreateDiscussions === 0) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[413]]({
                                        left: _ileft,
                                        top: tabPadding
                                    })[_0x4f9f[64]]({
                                        "data-pos": _0x63dcxc3[0],
                                        "data-cone": _0x63dcxc3[1],
                                        "data-cont": _0x63dcxc3[2]
                                    });
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[627]] = _0x63dcxc3;
                                }
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[628]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[354]]);
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[630]](true)[_0x4f9f[413]]({
                                    opacity: 0
                                })[_0x4f9f[629]]();
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[631]);
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[496]](_0x63dcxc3[0], _0x63dcxc3[1], _0x63dcxc3[2]);
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[548]][_0x4f9f[362]]({
                                    left: _ileft,
                                    top: tabPadding,
                                    "dataPos": _0x63dcxc3[0],
                                    "dataCone": _0x63dcxc3[1],
                                    "dataCont": _0x63dcxc3[2]
                                });
                            } else {
                                console[_0x4f9f[124]](_0x4f9f[632]);
                            }
                        });
                        /** @type {number} */
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[633]] = 0;
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[634]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[635]);
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[636]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[638]][_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[637]]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[639]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[636]);
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[635]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[640]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[641]);
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[642]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[644]][_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[643]]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[645]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[642]);
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[641]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[646]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[647]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[648]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[647]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[649]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[650]);
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[651]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[652]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[651]);
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[650]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[653]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[654]);
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[655]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[656]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[654]);
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[655]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[657]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[658]);
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[659]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[660]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[658]);
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[659]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[661]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[662]);
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[663]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[664]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[662]);
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[663]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[665]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[666]);
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[667]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[668]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[666]);
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[667]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[669]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[670]);
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[671]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[672]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[670]);
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[671]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[673]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[674]);
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[675]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[676]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[674]);
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[675]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[677]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[678]);
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[679]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[680]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[678]);
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[679]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[681]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[682]);
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[683]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[684]] = function () {
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[682]);
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[683]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[685]] = function () {
                };
                /**
                 * @param {?} timeToFadeIn
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[628]] = function (timeToFadeIn) {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[686]);
                    clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[685]]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[630]](true)[_0x4f9f[413]]({
                        opacity: 0
                    })[_0x4f9f[629]]();
                    /** @type {number} */
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[685]] = setTimeout(function () {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[630]](true)[_0x4f9f[687]]({
                            opacity: 1
                        }, 300, function () {
                            if ($[_0x4f9f[63]]) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[496]]();
                            }
                        });
                    }, timeToFadeIn);
                };
                /**
                 * @param {?} mmCoreSplitViewBlock
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[688]] = function (mmCoreSplitViewBlock) {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[689]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[630]](true)[_0x4f9f[687]]({
                        opacity: 0
                    }, mmCoreSplitViewBlock, function () {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[690]]();
                    });
                };
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]] = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[691])[_0x4f9f[93]](_0x4f9f[92]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]] = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[692])[_0x4f9f[93]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]]);
                var direction = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[81]] ? $($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[81]]) : $(modalTpl);
                direction[_0x4f9f[93]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[540]] = $(_0x4f9f[695], direction)[_0x4f9f[430]]()[_0x4f9f[429]]()[_0x4f9f[96]](_0x4f9f[694])[_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[693]]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[696]] = $(_0x4f9f[699], direction)[_0x4f9f[430]]()[_0x4f9f[429]]()[_0x4f9f[96]](_0x4f9f[698])[_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[697]]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[700]] = $(_0x4f9f[702], direction)[_0x4f9f[430]]()[_0x4f9f[429]]()[_0x4f9f[96]](_0x4f9f[701])[_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[693]]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[544]] = $(_0x4f9f[704], direction)[_0x4f9f[430]]()[_0x4f9f[429]]()[_0x4f9f[96]](_0x4f9f[703])[_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[697]]);
                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[705]] == _0x4f9f[6]) {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[706]] = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[708])[_0x4f9f[93]]($(_0x4f9f[707], direction)[_0x4f9f[430]]()[_0x4f9f[429]]());
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[709]);
                }
                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[705]] == _0x4f9f[710]) {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[706]] = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[708])[_0x4f9f[131]](_0x4f9f[711])[_0x4f9f[93]]($(_0x4f9f[707], direction)[_0x4f9f[430]]()[_0x4f9f[429]]());
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[712]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[137]] = document[_0x4f9f[714]](_0x4f9f[713]);
                    /** @type {number} */
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[137]][_0x4f9f[136]][_0x4f9f[715]] = articleArea;
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[134]](0);
                }
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[555]] = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[717])[_0x4f9f[716]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[706]]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[718]] = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[720])[_0x4f9f[93]]($(_0x4f9f[719], direction)[_0x4f9f[430]]()[_0x4f9f[429]]());
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[721]] = $(_0x4f9f[725], direction)[_0x4f9f[430]]()[_0x4f9f[429]]()[_0x4f9f[96]](_0x4f9f[724])[_0x4f9f[64]](_0x4f9f[440], $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[723]])[_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[722]]);
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[726]] = function () {
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[727]] === true || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[727]] === _0x4f9f[728]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[676]]();
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[673]]();
                    }
                };
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[726]]();
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[729]] = $(_0x4f9f[733], direction)[_0x4f9f[430]]()[_0x4f9f[429]]()[_0x4f9f[96]](_0x4f9f[732])[_0x4f9f[64]](_0x4f9f[440], $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[731]])[_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[730]]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[734]] = $(_0x4f9f[736], direction)[_0x4f9f[430]]()[_0x4f9f[429]]()[_0x4f9f[96]](_0x4f9f[735]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[672]]();
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[557]] = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[738])[_0x4f9f[93]]($(_0x4f9f[737], direction)[_0x4f9f[430]]()[_0x4f9f[429]]());
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[559]] = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[740])[_0x4f9f[93]]($(_0x4f9f[739], direction)[_0x4f9f[430]]()[_0x4f9f[429]]());
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[644]] = $(_0x4f9f[743], direction)[_0x4f9f[430]]()[_0x4f9f[429]]()[_0x4f9f[96]](_0x4f9f[742])[_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[741]]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[638]] = $(_0x4f9f[746], direction)[_0x4f9f[430]]()[_0x4f9f[429]]()[_0x4f9f[96]](_0x4f9f[745])[_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[744]]);
                /** @type {!Array} */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[747]] = [];
                /** @type {!Array} */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[748]] = [];
                /**
                 * @param {?} n
                 * @param {?} d
                 * @param {?} rounding
                 * @return {undefined}
                 */
                var scale = function (n, d, rounding) {
                    n[_0x4f9f[362]]($(_0x4f9f[751] + rounding + _0x4f9f[752], d)[_0x4f9f[750]](function () {
                        return $(this)[_0x4f9f[749]]() == rounding;
                    })[_0x4f9f[430]]()[_0x4f9f[429]]());
                };
                scale($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[747]], direction, _0x4f9f[753]);
                scale($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[747]], temp, _0x4f9f[753]);
                scale($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[748]], direction, _0x4f9f[754]);
                scale($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[748]], temp, _0x4f9f[754]);
                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[755]] == _0x4f9f[756]) {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[96]](_0x4f9f[756]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[91]][_0x4f9f[96]](_0x4f9f[756]);
                }
                $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[748]])[_0x4f9f[71]](function () {
                    $(this)[_0x4f9f[96]](_0x4f9f[757])[_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]]);
                });
                /**
                 * @param {?} text
                 * @return {undefined}
                 */
                var initialize = function (text) {
                    if (parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) + 1 < $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]]) {
                        if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[449]]) {
                            $(_0x4f9f[759] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]] + _0x4f9f[453])[_0x4f9f[96]](_0x4f9f[758]);
                        }
                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[760]] === _0x4f9f[17]) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]++;
                        } else {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]--;
                        }
                        if (!$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[760]]) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[760]] = _0x4f9f[17];
                        }
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[761]);
                        load();
                    } else {
                        console[_0x4f9f[124]](_0x4f9f[762] + text);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[763] + text + _0x4f9f[764]);
                        $[_0x4f9f[65]][_0x4f9f[63]](_0x4f9f[473]);
                    }
                };
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[765]] = $(_0x4f9f[767], temp)[_0x4f9f[430]]()[_0x4f9f[429]]()[_0x4f9f[96]](_0x4f9f[766])[_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[731]]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[768]] = $(_0x4f9f[771], temp)[_0x4f9f[430]]()[_0x4f9f[429]]()[_0x4f9f[96]](_0x4f9f[770])[_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[769]]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[772]] = $(_0x4f9f[774], temp)[_0x4f9f[430]]()[_0x4f9f[429]]()[_0x4f9f[96]](_0x4f9f[773]);
                /** @type {number} */
                $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]] = parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]]);
                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]] < 1) {
                    /** @type {number} */
                    $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]] = 1;
                }
                /**
                 * @param {number} reactionStep
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[516]] = function (reactionStep) {
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[775]] !== undefined) {
                        try {
                            var defaults = (new Function(_0x4f9f[508] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[775]]))();
                            defaults({
                                step: reactionStep,
                                steps: $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]]
                            });
                        } catch (e) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[510]);
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[776]] = function () {
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[777]] !== undefined) {
                        try {
                            var gotoNewOfflinePage = (new Function(_0x4f9f[508] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[777]]))();
                            gotoNewOfflinePage($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]]);
                        } catch (e) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[510]);
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[778]] = function () {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[96]](_0x4f9f[779]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[516]](iGuider(_0x4f9f[780]));
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[781]] = function () {
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[782]] !== undefined) {
                        try {
                            var gotoNewOfflinePage = (new Function(_0x4f9f[508] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[782]]))();
                            gotoNewOfflinePage($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]]);
                        } catch (e) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[510]);
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[783]] = function () {
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[784]] !== undefined) {
                        try {
                            var gotoNewOfflinePage = (new Function(_0x4f9f[508] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[784]]))();
                            gotoNewOfflinePage($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]]);
                        } catch (e) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[510]);
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[785]] = function () {
                    $(_0x4f9f[786])[_0x4f9f[132]](_0x4f9f[779]);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[787]] = function () {
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[788]] = function () {
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[494]] = function () {
                    var $area = $(_0x4f9f[789]);
                    $area[_0x4f9f[630]](true)[_0x4f9f[687]]({
                        opacity: 0
                    }, function () {
                        $area[_0x4f9f[687]]({
                            height: 0,
                            padding: 0
                        }, function () {
                            $area[_0x4f9f[398]]();
                        });
                    });
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[495]] = function () {
                    var $area = $(_0x4f9f[790]);
                    $area[_0x4f9f[630]](true)[_0x4f9f[687]]({
                        opacity: 0
                    }, function () {
                        $area[_0x4f9f[687]]({
                            height: 0,
                            padding: 0
                        }, function () {
                            $area[_0x4f9f[398]]();
                        });
                    });
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[791]] = function () {
                    clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[787]]);
                    /** @type {number} */
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[787]] = setTimeout(function () {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[494]]();
                    }, 3000);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[792]] = function () {
                    clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[788]]);
                    /** @type {number} */
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[788]] = setTimeout(function () {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[495]]();
                    }, 3000);
                };
                /**
                 * @return {undefined}
                 */
                var getRightNavbarSize = function () {
                    clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[787]]);
                    var button2 = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[79]][0][_0x4f9f[794]][_0x4f9f[793]];
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[794]][_0x4f9f[793]] && $[_0x4f9f[82]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[794]][_0x4f9f[793]]) !== _0x4f9f[9]) {
                        button2 = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[794]][_0x4f9f[793]];
                    }
                    var button2Component = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[795])[_0x4f9f[749]](button2);
                    $(_0x4f9f[789])[_0x4f9f[398]]();
                    $(_0x4f9f[796])[_0x4f9f[784]](button2Component);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[496]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[791]]();
                };
                /**
                 * @return {undefined}
                 */
                var sort_pipeline = function () {
                    var dialogopt = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[79]][0][_0x4f9f[797]][_0x4f9f[793]];
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[797]][_0x4f9f[793]] && $[_0x4f9f[82]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[797]][_0x4f9f[793]]) !== _0x4f9f[9]) {
                        dialogopt = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[797]][_0x4f9f[793]];
                    }
                    var dialog = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[795])[_0x4f9f[749]](dialogopt);
                    $(_0x4f9f[789])[_0x4f9f[398]]();
                    $(_0x4f9f[796])[_0x4f9f[784]](dialog);
                    setTimeout(function () {
                        dialog[_0x4f9f[630]](true)[_0x4f9f[687]]({
                            opacity: 0
                        }, function () {
                            dialog[_0x4f9f[687]]({
                                height: 0,
                                padding: 0
                            }, function () {
                                dialog[_0x4f9f[398]]();
                            });
                        });
                    }, 3000);
                };
                /**
                 * @param {?} text
                 * @return {?}
                 */
                var parse = function (text) {
                    /** @type {boolean} */
                    var pos = true;
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[794]]) {
                        if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[794]][_0x4f9f[798]] !== undefined) {
                            try {
                                var parseText = (new Function(_0x4f9f[508] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[794]][_0x4f9f[798]]))();
                                pos = parseText(text);
                            } catch (e) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[510]);
                            }
                        }
                    }
                    return pos;
                };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                var unserializeArgs = function (value) {
                    /** @type {boolean} */
                    var isArr = true;
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[797]]) {
                        if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[797]][_0x4f9f[798]] !== undefined) {
                            try {
                                var isArray = (new Function(_0x4f9f[508] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[797]][_0x4f9f[798]]))();
                                isArr = isArray(value);
                            } catch (e) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[510]);
                            }
                        }
                    }
                    return isArr;
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[799]] = function () {
                    clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[97]]);
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[705]] == _0x4f9f[6]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[706]][_0x4f9f[630]](true)[_0x4f9f[687]]({
                            width: 0
                        }, 300);
                    }
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[705]] == _0x4f9f[710]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[706]][_0x4f9f[630]](true)[_0x4f9f[687]]({
                            bottom: _0x4f9f[800]
                        }, {
                            duration: 300,
                            step: function (pointsToEvaluate, functionValuesX) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[134]](pointsToEvaluate);
                            }
                        });
                    }
                };
                /**
                 * @param {number} nDuration
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[801]] = function (nDuration) {
                    clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[97]]);
                    if (nDuration > 0) {
                        /** @type {number} */
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[802]] = nDuration;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[681]]();
                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[803]] == _0x4f9f[507]) {
                            /** @type {number} */
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[97]] = setTimeout(function () {
                                $[_0x4f9f[65]][_0x4f9f[63]](_0x4f9f[17], true);
                            }, nDuration);
                            if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[705]] == _0x4f9f[6]) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[706]][_0x4f9f[630]](true)[_0x4f9f[413]]({
                                    width: 0
                                })[_0x4f9f[629]]()[_0x4f9f[687]]({
                                    width: _0x4f9f[804]
                                }, nDuration);
                            }
                            if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[705]] == _0x4f9f[710]) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[134]](0);
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[706]][_0x4f9f[630]](true)[_0x4f9f[413]]({
                                    bottom: _0x4f9f[800]
                                })[_0x4f9f[629]]()[_0x4f9f[687]]({
                                    bottom: _0x4f9f[804]
                                }, {
                                    duration: nDuration,
                                    step: function (pointsToEvaluate, functionValuesX) {
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[134]](pointsToEvaluate);
                                    }
                                });
                            }
                        }
                    } else {
                        /** @type {boolean} */
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[802]] = false;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[684]]();
                    }
                };
                $(document)[_0x4f9f[545]](_0x4f9f[805], _0x4f9f[806], function () {
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[808])[_0x4f9f[96]](_0x4f9f[807]);
                });
                $(document)[_0x4f9f[545]](_0x4f9f[809], _0x4f9f[806], function () {
                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[807])[_0x4f9f[96]](_0x4f9f[808]);
                });
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[810]] = function () {
                };
                /**
                 * @return {undefined}
                 */
                var load = function () {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[726]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[668]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[680]]();
                    clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[97]]);
                    clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[810]]);
                    var artistTrack = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[354]];
                    if ($[_0x4f9f[63]][_0x4f9f[811]]) {
                        /** @type {number} */
                        artistTrack = 1;
                        localStorage[_0x4f9f[520]](_0x4f9f[812]);
                        /** @type {boolean} */
                        $[_0x4f9f[63]][_0x4f9f[811]] = false;
                    }
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[688]](0);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[557]][_0x4f9f[429]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[559]][_0x4f9f[429]]();
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]]) {
                        if (localStorage[_0x4f9f[813]](_0x4f9f[513]) != _0x4f9f[512]) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[512]]();
                        }
                        localStorage[_0x4f9f[514]](_0x4f9f[521], parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) + 1);
                        var options = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]];
                        options = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[416]](options);
                        if (options) {
                            var copy;
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[814] + options[_0x4f9f[451]]);
                            if (options[_0x4f9f[451]]) {
                                if (options[_0x4f9f[451]][_0x4f9f[304]](/<([^>]*)>/g) != -1) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[815]);
                                    var $realtime = $(options[_0x4f9f[451]]);
                                    var name = $realtime[0][_0x4f9f[816]];
                                    var bookIDs = $realtime[_0x4f9f[64]]();
                                    /** @type {!Array} */
                                    var _0x63dcx100 = [];
                                    var bookIdIndex;
                                    for (bookIdIndex in bookIDs) {
                                        if (bookIDs[bookIdIndex][_0x4f9f[304]](_0x4f9f[474]) == -1) {
                                            _0x63dcx100[_0x4f9f[362]](_0x4f9f[817] + bookIdIndex + _0x4f9f[818] + bookIDs[bookIdIndex] + _0x4f9f[453]);
                                        }
                                    }
                                    copy = name + _0x63dcx100[_0x4f9f[310]](_0x4f9f[9]);
                                } else {
                                    if ($(options[_0x4f9f[451]])[_0x4f9f[66]] || options[_0x4f9f[451]][_0x4f9f[304]](_0x4f9f[819]) != -1 || options[_0x4f9f[451]][_0x4f9f[304]](_0x4f9f[141]) != -1 || options[_0x4f9f[451]][_0x4f9f[304]](_0x4f9f[820]) != -1) {
                                        copy = options[_0x4f9f[451]];
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[821]);
                                    } else {
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[822]);
                                        copy = _0x4f9f[823] + options[_0x4f9f[451]] + _0x4f9f[453];
                                    }
                                }
                            }
                            if (options[_0x4f9f[95]] == _0x4f9f[450] || !options[_0x4f9f[451]]) {
                                copy = _0x4f9f[92];
                            }
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[824] + copy);
                            options[_0x4f9f[418]] = options[_0x4f9f[418]] || 0;
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[825]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]];
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]] = $(copy);
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[776]]();
                            options[_0x4f9f[826]] = options[_0x4f9f[826]] || 0;
                            clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[99]]);
                            /** @type {number} */
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[99]] = setTimeout(function () {
                                /**
                                 * @return {undefined}
                                 */
                                var handler = function () {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[778]]();
                                    var ngiScroll_timeout = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[100]];
                                    /** @type {number} */
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[810]] = setTimeout(function () {
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[487]]();
                                    }, ngiScroll_timeout);
                                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[66]]) {
                                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[410]](_0x4f9f[827])) {
                                            if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[828]] === true || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[828]] === _0x4f9f[728]) {
                                                $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[829]);
                                            }
                                            /**
                                             * @return {undefined}
                                             */
                                            var init = function () {
                                                $(_0x4f9f[759] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]] + _0x4f9f[453])[_0x4f9f[132]](_0x4f9f[758]);
                                                $(_0x4f9f[759] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]] + _0x4f9f[453])[_0x4f9f[132]](_0x4f9f[830]);
                                                $(_0x4f9f[131])[_0x4f9f[832]](_0x4f9f[831]);
                                                $(_0x4f9f[131])[_0x4f9f[832]](_0x4f9f[833]);
                                                /** @type {number} */
                                                var CLASS_PLACEHOLDER = parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) + 1;
                                                var SELECTOR_PLACEHOLDER = _0x4f9f[834] + CLASS_PLACEHOLDER;
                                                if (options[_0x4f9f[835]]) {
                                                    SELECTOR_PLACEHOLDER = options[_0x4f9f[835]];
                                                }
                                                $(_0x4f9f[131])[_0x4f9f[64]](_0x4f9f[831], SELECTOR_PLACEHOLDER);
                                                $(_0x4f9f[131])[_0x4f9f[64]](_0x4f9f[833], CLASS_PLACEHOLDER);
                                                if (options[_0x4f9f[348]] >= 0) {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[348]] = options[_0x4f9f[348]];
                                                } else {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[348]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[422]][_0x4f9f[348]];
                                                }
                                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[348]] == 2) {
                                                    if (options[_0x4f9f[409]] >= 0) {
                                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[409]] = options[_0x4f9f[409]];
                                                    } else {
                                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[409]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[422]][_0x4f9f[409]];
                                                    }
                                                }
                                                if (options[_0x4f9f[86]]) {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[315]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[138]](options[_0x4f9f[86]]);
                                                } else {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[315]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[138]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[422]][_0x4f9f[315]]);
                                                }
                                                if (parseFloat(options[_0x4f9f[85]]) >= 0) {
                                                    /** @type {number} */
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[317]] = parseFloat(options[_0x4f9f[85]]);
                                                } else {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[317]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[422]][_0x4f9f[317]];
                                                }
                                                if (parseFloat(options[_0x4f9f[417]]) >= 0) {
                                                    /** @type {number} */
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[408]] = parseFloat(options[_0x4f9f[417]]);
                                                } else {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[408]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[422]][_0x4f9f[408]];
                                                }
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[354]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[100]];
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[400]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]]);
                                                var GET_AUTH_URL_TIMEOUT = options[_0x4f9f[440]] ? options[_0x4f9f[440]] : _0x4f9f[441] + (parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) + 1);
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[718]][_0x4f9f[429]]();
                                                if (options[_0x4f9f[836]] && $[_0x4f9f[82]](options[_0x4f9f[836]]) !== _0x4f9f[9]) {
                                                    var _0x63dcx107 = $(_0x4f9f[839])[_0x4f9f[690]]()[_0x4f9f[64]](_0x4f9f[838], options[_0x4f9f[836]])[_0x4f9f[545]](_0x4f9f[837], function () {
                                                        _0x63dcx107[_0x4f9f[629]]();
                                                    });
                                                    _0x63dcx107[_0x4f9f[93]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[718]]);
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[649]]();
                                                } else {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[718]][_0x4f9f[429]]();
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[652]]();
                                                }
                                                if (options[_0x4f9f[440]]) {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[661]]();
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[557]][_0x4f9f[131]](GET_AUTH_URL_TIMEOUT);
                                                } else {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[557]][_0x4f9f[131]](_0x4f9f[9]);
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[664]]();
                                                }
                                                if ($[_0x4f9f[82]](options[_0x4f9f[840]]) != _0x4f9f[9]) {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[657]]();
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[559]][_0x4f9f[131]](options[_0x4f9f[840]]);
                                                } else {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[660]]();
                                                }
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[546]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]]);
                                                if (!$[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[643]]) {
                                                    $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[643]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[741]];
                                                }
                                                if (!$[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[637]]) {
                                                    $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[637]] = parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) + 1 == $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]] ? $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[841]] : $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[744]];
                                                }
                                                /** @type {number} */
                                                var datum = parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) + 1;
                                                $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[747]])[_0x4f9f[71]](function () {
                                                    $(this)[_0x4f9f[96]](_0x4f9f[842])[_0x4f9f[131]](datum);
                                                });
                                                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[843]]) {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[653]]();
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[668]]();
                                                    $(_0x4f9f[844])[_0x4f9f[690]]()[_0x4f9f[429]]();
                                                } else {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[656]]();
                                                }
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = {};
                                                if (datum > 1) {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = {
                                                        tourId: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[426]],
                                                        stepValue: datum,
                                                        page: location[_0x4f9f[436]]
                                                    };
                                                } else {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = {
                                                        tourId: false,
                                                        stepValue: datum,
                                                        page: location[_0x4f9f[436]]
                                                    };
                                                }
                                                localStorage[_0x4f9f[514]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]]));
                                                localStorage[_0x4f9f[514]](_0x4f9f[521], datum);
                                                /** @type {number} */
                                                var indexLookupKey = parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) - 1;
                                                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][indexLookupKey]) {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[640]]();
                                                } else {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[645]]();
                                                }
                                                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]]) {
                                                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[446]]) {
                                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[634]]();
                                                    }
                                                } else {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[639]]();
                                                }
                                                if (!$[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]]) {
                                                    $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]] = _0x4f9f[17];
                                                }
                                                /** @type {boolean} */
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[846]] = false;
                                                /** @type {boolean} */
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[847]] = false;
                                                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]] == _0x4f9f[17]) {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[634]]();
                                                } else {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[639]]();
                                                    if (typeof $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]] == _0x4f9f[478]) {
                                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[846]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]][0];
                                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[847]] = $($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]][1]);
                                                    }
                                                    if (typeof $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]] == _0x4f9f[476]) {
                                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[846]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]];
                                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[847]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]];
                                                    }
                                                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[846]]) {
                                                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[847]]) {
                                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[847]][_0x4f9f[64]](_0x4f9f[848], _0x4f9f[849] + _0x63dcx88++);
                                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[850]] = _0x4f9f[851] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[847]][_0x4f9f[64]](_0x4f9f[848]) + _0x4f9f[453];
                                                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[850]]) {
                                                                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[794]]) {
                                                                    if (parse($($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[850]])) === true) {
                                                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[634]]();
                                                                        callback($(_0x4f9f[759] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]] + _0x4f9f[453]));
                                                                        /** @type {boolean} */
                                                                        options[_0x4f9f[446]] = true;
                                                                        /** @type {boolean} */
                                                                        $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[446]] = true;
                                                                    }
                                                                }
                                                                /** @type {boolean} */
                                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[852]] = true;
                                                                $(document)[_0x4f9f[545]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[846]] + _0x4f9f[853], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[850]], function (mmCoreSplitViewBlock) {
                                                                    if (parse($($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[850]])) === true) {
                                                                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[852]] == true) {
                                                                            /** @type {boolean} */
                                                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[852]] = false;
                                                                            $(_0x4f9f[789])[_0x4f9f[398]]();
                                                                            $(this)[_0x4f9f[854]](mmCoreSplitViewBlock);
                                                                            /** @type {boolean} */
                                                                            options[_0x4f9f[446]] = true;
                                                                            /** @type {boolean} */
                                                                            $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[446]] = true;
                                                                            callback($(_0x4f9f[759] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]] + _0x4f9f[453]));
                                                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[783]]();
                                                                            options[_0x4f9f[855]] = options[_0x4f9f[855]] || 0;
                                                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] = location[_0x4f9f[436]];
                                                                            var value = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]];
                                                                            /** @type {number} */
                                                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[857]] = parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) + 1;
                                                                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[857]] < $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]]) {
                                                                                value = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[857]]][_0x4f9f[437]];
                                                                            }
                                                                            var data = {
                                                                                opt: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[481]]($[_0x4f9f[63]][_0x4f9f[73]])
                                                                            };
                                                                            localStorage[_0x4f9f[514]](_0x4f9f[519], JSON[_0x4f9f[419]](data));
                                                                            localStorage[_0x4f9f[514]](_0x4f9f[521], parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) + 2);
                                                                            clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[98]]);
                                                                            /** @type {number} */
                                                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[98]] = setTimeout(function () {
                                                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[785]]();
                                                                                /** @type {boolean} */
                                                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[852]] = true;
                                                                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]][_0x4f9f[304]](repeat(value)) === -1 && value[_0x4f9f[304]](repeat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]])) === -1 && $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] !== value) {
                                                                                    location[_0x4f9f[436]] = value;
                                                                                } else {
                                                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]++;
                                                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[858]);
                                                                                    load();
                                                                                }
                                                                            }, options[_0x4f9f[855]]);
                                                                        }
                                                                        return true;
                                                                    } else {
                                                                        getRightNavbarSize();
                                                                        return false;
                                                                    }
                                                                });
                                                            } else {
                                                                console[_0x4f9f[124]](_0x4f9f[859]);
                                                            }
                                                        } else {
                                                            console[_0x4f9f[124]](_0x4f9f[860]);
                                                        }
                                                    } else {
                                                        console[_0x4f9f[124]](_0x4f9f[861]);
                                                    }
                                                }
                                                var _0x63dcx3c = $(_0x4f9f[863])[_0x4f9f[132]](_0x4f9f[862])[_0x4f9f[750]](_0x4f9f[759] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]] + _0x4f9f[453])[_0x4f9f[96]](_0x4f9f[862]);
                                                /** @type {number} */
                                                var conWidth = parseFloat($(_0x4f9f[864])[_0x4f9f[322]]());
                                                /** @type {number} */
                                                var width = parseFloat(_0x63dcx3c[_0x4f9f[402]]());
                                                var element = Math[_0x4f9f[865]](conWidth / width / 2);
                                                $(_0x4f9f[864])[_0x4f9f[630]](true)[_0x4f9f[687]]({
                                                    scrollTop: _0x63dcx3c[_0x4f9f[95]]()[_0x4f9f[406]] + $(_0x4f9f[864])[_0x4f9f[407]]() - width * element
                                                });
                                                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[541]] && $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[541]] !== false && $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[541]] != _0x4f9f[866]) {
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[541]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[541]]);
                                                }
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[781]]();
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[801]](parseFloat(options[_0x4f9f[439]]));
                                                var data = {
                                                    opt: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[481]]($[_0x4f9f[63]][_0x4f9f[73]])
                                                };
                                                localStorage[_0x4f9f[514]](_0x4f9f[519], JSON[_0x4f9f[419]](data));
                                            };
                                            if (options[_0x4f9f[95]] == _0x4f9f[450] || !options[_0x4f9f[451]]) {
                                                init();
                                            } else {
                                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[404]]()[_0x4f9f[406]] < $(window)[_0x4f9f[407]]()) {
                                                    /** @type {boolean} */
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[867]] = true;
                                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[89]][_0x4f9f[687]]({
                                                        scrollTop: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[404]]()[_0x4f9f[406]] - $(window)[_0x4f9f[322]]() / 2
                                                    }, artistTrack)[_0x4f9f[869]]()[_0x4f9f[868]](function () {
                                                        /** @type {boolean} */
                                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[867]] = false;
                                                        init();
                                                    });
                                                } else {
                                                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[404]]()[_0x4f9f[406]] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[402]]() > $(window)[_0x4f9f[407]]() + $(window)[_0x4f9f[322]]()) {
                                                        /** @type {boolean} */
                                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[867]] = true;
                                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[89]][_0x4f9f[687]]({
                                                            scrollTop: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[404]]()[_0x4f9f[406]] - $(window)[_0x4f9f[322]]() / 2
                                                        }, artistTrack)[_0x4f9f[869]]()[_0x4f9f[868]](function () {
                                                            /** @type {boolean} */
                                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[867]] = false;
                                                            init();
                                                        });
                                                    } else {
                                                        init();
                                                    }
                                                }
                                            }
                                        } else {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[870]);
                                            initialize(_0x4f9f[871]);
                                        }
                                    } else {
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[872]);
                                        initialize(_0x4f9f[873]);
                                    }
                                };
                                /**
                                 * @return {undefined}
                                 */
                                var timer = function () {
                                };
                                /**
                                 * @return {undefined}
                                 */
                                var rumbleInterval = function () {
                                };
                                /**
                                 * @return {undefined}
                                 */
                                var remove = function () {
                                    if ($(copy)[_0x4f9f[66]]) {
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[874] + copy + _0x4f9f[875] + _0x4f9f[876]);
                                        /** @type {number} */
                                        var _0x63dcx112 = 0;
                                        $(copy)[_0x4f9f[71]](function () {
                                            if ($(this)[_0x4f9f[410]](_0x4f9f[827])) {
                                                _0x63dcx112++;
                                            }
                                        });
                                        if (_0x63dcx112 == $(copy)[_0x4f9f[66]]) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[874] + copy + _0x4f9f[875] + _0x4f9f[877]);
                                            clearInterval(rumbleInterval);
                                            clearTimeout(timer);
                                            send_to_beta();
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[878]);
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]] = $(copy);
                                            handler();
                                        } else {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[874] + copy + _0x4f9f[875] + _0x4f9f[879]);
                                        }
                                    } else {
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[874] + copy + _0x4f9f[875] + _0x4f9f[880]);
                                    }
                                };
                                if (options[_0x4f9f[418]] > 0) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[881] + options[_0x4f9f[418]] + _0x4f9f[882]);
                                    enviewer_state();
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[883]);
                                    /** @type {number} */
                                    timer = setTimeout(function () {
                                        clearInterval(rumbleInterval);
                                        clearTimeout(timer);
                                        send_to_beta();
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[884]);
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[885]);
                                        handler();
                                    }, options[_0x4f9f[418]]);
                                    /** @type {number} */
                                    rumbleInterval = setInterval(function () {
                                        remove();
                                    }, rumbleSpeed);
                                    remove();
                                } else {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[886]);
                                    handler();
                                }
                            }, options[_0x4f9f[826]]);
                        } else {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]--;
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[887]);
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[515]]();
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[522]]();
                            $[_0x4f9f[65]][_0x4f9f[63]](_0x4f9f[473]);
                        }
                    } else {
                        console[_0x4f9f[124]](_0x4f9f[888]);
                    }
                };
                /**
                 * @return {undefined}
                 */
                var save = function () {
                    /** @type {number} */
                    var ngiScroll_timeout = 0;
                    setTimeout(function () {
                        /** @type {number} */
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]] = parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]]) - 1 || 0;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[889]);
                        load();
                    }, ngiScroll_timeout);
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[890]] = function () {
                    clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[891]]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[718]][_0x4f9f[429]]();
                    if ($[_0x4f9f[82]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[836]])) {
                        var _0x63dcx107 = $(_0x4f9f[839])[_0x4f9f[690]]()[_0x4f9f[64]](_0x4f9f[838], $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[836]])[_0x4f9f[96]](_0x4f9f[892])[_0x4f9f[545]](_0x4f9f[837], function () {
                            _0x63dcx107[_0x4f9f[629]]();
                        });
                        _0x63dcx107[_0x4f9f[93]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[718]]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[649]]();
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[718]][_0x4f9f[429]]();
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[652]]();
                    }
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[440]] && $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[440]] != _0x4f9f[9]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[557]][_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[440]]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[661]]();
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[664]]();
                    }
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[840]] && $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[840]] != _0x4f9f[9]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[559]][_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[840]]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[657]]();
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[660]]();
                    }
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[700]][_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[893]]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[544]][_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[894]]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[413]]({
                        left: _0x4f9f[412],
                        top: _0x4f9f[412]
                    })[_0x4f9f[64]]({
                        "data-pos": _0x4f9f[504],
                        "data-cone": _0x4f9f[504],
                        "data-cont": _0x4f9f[504]
                    });
                    var width = _0x4f9f[9];
                    var expectedCellWidth = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[321]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[321]];
                    if (expectedCellWidth) {
                        width = expectedCellWidth;
                        width = width.toString();
                        if (width[_0x4f9f[304]](_0x4f9f[552]) != -1 || width[_0x4f9f[304]](_0x4f9f[553]) != -1) {
                            width = width[_0x4f9f[143]](_0x4f9f[552], _0x4f9f[553]);
                        } else {
                            /** @type {number} */
                            width = parseFloat(width);
                        }
                    }
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                        minWidth: width
                    });
                    var backgroundAttr = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[554]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[554]];
                    if (backgroundAttr) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                            background: backgroundAttr
                        });
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                            background: _0x4f9f[9]
                        });
                    }
                    var HeadsetColor = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[556]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[556]];
                    if (HeadsetColor) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[557]][_0x4f9f[413]]({
                            color: HeadsetColor
                        });
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[557]][_0x4f9f[413]]({
                            color: _0x4f9f[9]
                        });
                    }
                    var _titleBarColor = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[558]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[558]];
                    if (_titleBarColor) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[559]][_0x4f9f[413]]({
                            color: _titleBarColor
                        });
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[559]][_0x4f9f[413]]({
                            color: _0x4f9f[9]
                        });
                    }
                    var lighterFillColor = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[895]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[895]];
                    if (lighterFillColor) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[734]][_0x4f9f[413]]({
                            color: lighterFillColor
                        });
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[734]][_0x4f9f[413]]({
                            color: _0x4f9f[9]
                        });
                    }
                    var _0x63dcxd2 = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[571]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[571]];
                    if (_0x63dcxd2) {
                        $(_0x4f9f[572])[_0x4f9f[398]]();
                        $(_0x4f9f[574])[_0x4f9f[131]](_0x4f9f[573] + _0x63dcxd2 + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                    } else {
                        $(_0x4f9f[572])[_0x4f9f[398]]();
                    }
                    var _0x63dcxd3 = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[575]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[575]];
                    if (_0x63dcxd3) {
                        $(_0x4f9f[576])[_0x4f9f[398]]();
                        $(_0x4f9f[578])[_0x4f9f[131]](_0x4f9f[577] + _0x63dcxd3 + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                    } else {
                        $(_0x4f9f[576])[_0x4f9f[398]]();
                    }
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[896]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[496]](_0x4f9f[504], _0x4f9f[504], _0x4f9f[504]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[315]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[138]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[86]]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[317]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[85]];
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[391]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[315]];
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[352]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[317]];
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[129]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[645]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[639]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[656]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[673]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[628]](0);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[668]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[677]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[684]]();
                    $(_0x4f9f[844])[_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[897]])[_0x4f9f[629]]();
                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[898]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]][_0x4f9f[898]];
                        var value = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]][_0x4f9f[899]];
                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]][_0x4f9f[304]](repeat(value)) === -1 && value[_0x4f9f[304]](repeat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]])) === -1 && $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] !== value) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[900]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]][_0x4f9f[899]];
                        } else {
                            /** @type {boolean} */
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[900]] = false;
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[891]] = function () {
                };
                /**
                 * @return {undefined}
                 */
                var init = function () {
                    /** @type {number} */
                    var ngiScroll_timeout = 0;
                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[410]](_0x4f9f[827])) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[688]](300);
                        /** @type {number} */
                        ngiScroll_timeout = 300;
                    }
                    if ($[_0x4f9f[63]][_0x4f9f[811]]) {
                        /** @type {number} */
                        ngiScroll_timeout = 1;
                    }
                    /** @type {number} */
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[891]] = setTimeout(function () {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] = location[_0x4f9f[436]];
                        if (localStorage[_0x4f9f[813]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]])) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = $[_0x4f9f[901]](localStorage[_0x4f9f[813]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]]));
                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]][_0x4f9f[902]] == $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[426]]) {
                                if ($[_0x4f9f[63]][_0x4f9f[811]]) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[898]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]][_0x4f9f[898]];
                                    $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[898]];
                                    save();
                                } else {
                                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[727]] && localStorage[_0x4f9f[813]](_0x4f9f[518]) != _0x4f9f[903]) {
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[890]]();
                                    } else {
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[904] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[77]][_0x4f9f[727]]);
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[905] + localStorage[_0x4f9f[813]](_0x4f9f[518]));
                                        if (localStorage[_0x4f9f[813]](_0x4f9f[518]) != _0x4f9f[903]) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[906]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]];
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[907]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[906]] - 1];
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[908]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[907]][_0x4f9f[437]];
                                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]][_0x4f9f[304]](repeat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[908]])) === -1 && $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[908]][_0x4f9f[304]](repeat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]])) === -1 && $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] !== $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[908]]) {
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[909] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]]);
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[910] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[908]]);
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]] = {
                                                    opt: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[481]]($[_0x4f9f[63]][_0x4f9f[73]])
                                                };
                                                localStorage[_0x4f9f[514]](_0x4f9f[812], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]]));
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = {
                                                    tourId: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[426]],
                                                    stepValue: $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]]
                                                };
                                                localStorage[_0x4f9f[514]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]]));
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[911]);
                                                location[_0x4f9f[436]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[908]];
                                            } else {
                                                save();
                                            }
                                        } else {
                                            save();
                                        }
                                    }
                                }
                            } else {
                                var value;
                                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]]) {
                                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]]) {
                                        value = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]]) - 1][_0x4f9f[437]] || $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]];
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[912] + value);
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[909] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]]);
                                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]][_0x4f9f[304]](repeat(value)) === -1 && value[_0x4f9f[304]](repeat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]])) === -1 && $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] !== value) {
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]] = {
                                                opt: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[481]]($[_0x4f9f[63]][_0x4f9f[73]])
                                            };
                                            localStorage[_0x4f9f[514]](_0x4f9f[812], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]]));
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = {};
                                            if (localStorage[_0x4f9f[813]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]])) {
                                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = $[_0x4f9f[901]](localStorage[_0x4f9f[813]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]]));
                                            }
                                            $[_0x4f9f[75]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]], {
                                                tourId: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[426]],
                                                stepValue: $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]]
                                            });
                                            localStorage[_0x4f9f[514]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]]));
                                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[913]);
                                            location[_0x4f9f[436]] = value;
                                        } else {
                                            save();
                                        }
                                    } else {
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[914]);
                                    }
                                } else {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[915]);
                                }
                            }
                        } else {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[906]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]];
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[907]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[906]] - 1];
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[908]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[907]][_0x4f9f[437]];
                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]][_0x4f9f[304]](repeat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[908]])) === -1 && $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[908]][_0x4f9f[304]](repeat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]])) === -1 && $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] !== $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[908]]) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]] = {
                                    opt: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[481]]($[_0x4f9f[63]][_0x4f9f[73]])
                                };
                                localStorage[_0x4f9f[514]](_0x4f9f[812], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]]));
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = {
                                    tourId: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[426]],
                                    stepValue: $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]]
                                };
                                localStorage[_0x4f9f[514]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]]));
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[916]);
                                location[_0x4f9f[436]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[908]];
                            } else {
                                save();
                            }
                        }
                    }, ngiScroll_timeout);
                };
                $(document)[_0x4f9f[545]](_0x4f9f[457], _0x4f9f[917], function () {
                    if (!$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[529]]) {
                        init();
                    }
                });
                $(document)[_0x4f9f[545]](_0x4f9f[457], _0x4f9f[918], function () {
                    if (!$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[529]]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] = location[_0x4f9f[436]];
                        var value = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]];
                        /** @type {number} */
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[857]] = parseFloat($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]]) - 1;
                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[857]] < $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]] && $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[857]] >= 0) {
                            value = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[857]]][_0x4f9f[437]];
                        }
                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]][_0x4f9f[304]](repeat(value)) === -1 && value[_0x4f9f[304]](repeat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]])) === -1 && $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] !== value) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]] = {
                                opt: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[481]]($[_0x4f9f[63]][_0x4f9f[73]])
                            };
                            localStorage[_0x4f9f[514]](_0x4f9f[812], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]]));
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = {};
                            if (localStorage[_0x4f9f[813]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]])) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = $[_0x4f9f[901]](localStorage[_0x4f9f[813]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]]));
                            }
                            $[_0x4f9f[75]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]], {
                                tourId: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[426]],
                                stepValue: $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]]
                            });
                            localStorage[_0x4f9f[514]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]]));
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[919]);
                            location[_0x4f9f[436]] = value;
                        } else {
                            save();
                        }
                    }
                });
                $(document)[_0x4f9f[545]](_0x4f9f[457], _0x4f9f[920], function () {
                    if (!$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[529]]) {
                        $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[898]];
                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[900]]) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[847]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[900]];
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]] = {
                                opt: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[481]]($[_0x4f9f[63]][_0x4f9f[73]])
                            };
                            localStorage[_0x4f9f[514]](_0x4f9f[812], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]]));
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[921]);
                            location[_0x4f9f[436]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[847]];
                        } else {
                            /** @type {number} */
                            var addressCount = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[84]] - 1;
                            /** @type {number} */
                            var iAddressLoop = 0;
                            for (; iAddressLoop < $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]]; iAddressLoop++) {
                                if (iAddressLoop < addressCount) {
                                    /** @type {boolean} */
                                    $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][iAddressLoop][_0x4f9f[446]] = true;
                                    callback($(_0x4f9f[759] + iAddressLoop + _0x4f9f[453]));
                                } else {
                                    break;
                                }
                            }
                            save();
                        }
                    }
                });
                /**
                 * @return {undefined}
                 */
                var save_multiple = function () {
                    if (!$(_0x4f9f[131])[_0x4f9f[410]](_0x4f9f[922])) {
                        var artistTrack = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[825]];
                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]]) {
                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[66]] && $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[410]](_0x4f9f[827])) {
                                artistTrack = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]];
                            }
                            if (artistTrack) {
                                if (artistTrack[_0x4f9f[66]]) {
                                    var magnifier = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[315]];
                                    var $magnifier = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[313]](magnifier);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[324]]($magnifier[0], $magnifier[1], $magnifier[2], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[317]]);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[400]](artistTrack);
                                }
                            }
                        }
                    }
                };
                $(window)[_0x4f9f[545]](_0x4f9f[923], function () {
                    if ($[_0x4f9f[63]]) {
                        if (!$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[867]]) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[546]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]]);
                            if (_0x63dcxb) {
                                clearTimeout(_takingTooLongTimeout);
                                /** @type {number} */
                                _takingTooLongTimeout = setTimeout(function () {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[342]]();
                                    save_multiple();
                                }, 200);
                            }
                        }
                    }
                });
                $(window)[_0x4f9f[545]](_0x4f9f[924], function () {
                    if ($[_0x4f9f[63]]) {
                        if (!$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[867]]) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[546]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]]);
                            if (_0x63dcxb) {
                                save_multiple();
                            }
                        }
                    }
                });
                /**
                 * @return {undefined}
                 */
                var getMessageTs = function () {
                    console[_0x4f9f[124]](_0x4f9f[925]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[926]);
                    $[_0x4f9f[65]][_0x4f9f[63]](_0x4f9f[473]);
                };
                /** @type {boolean} */
                var _0x63dcx11c = false;
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[927]] = function () {
                    /** @type {number} */
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[857]] = parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) + 1;
                    if (_0x63dcx11c === false && $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]])[_0x4f9f[66]]) {
                        /** @type {boolean} */
                        _0x63dcx11c = true;
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] = location[_0x4f9f[436]];
                        var value = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]];
                        /** @type {number} */
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[857]] = parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) + 1;
                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[857]] < $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]]) {
                            value = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[857]]][_0x4f9f[437]];
                        }
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[854]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]] + _0x4f9f[853]);
                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[850]]) {
                            $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[850]])[_0x4f9f[854]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[846]] + _0x4f9f[853]);
                        }
                        if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]] == _0x4f9f[17]) {
                            /** @type {boolean} */
                            $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[446]] = true;
                            callback($(_0x4f9f[759] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]] + _0x4f9f[453]));
                        }
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[783]]();
                        $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[855]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[855]] || 0;
                        clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[98]]);
                        /** @type {number} */
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[98]] = setTimeout(function () {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[785]]();
                            setTimeout(function () {
                                /** @type {boolean} */
                                _0x63dcx11c = false;
                            }, 500);
                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]][_0x4f9f[304]](repeat(value)) === -1 && value[_0x4f9f[304]](repeat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]])) === -1 && $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] !== value) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]] = {
                                    opt: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[481]]($[_0x4f9f[63]][_0x4f9f[73]])
                                };
                                localStorage[_0x4f9f[514]](_0x4f9f[812], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]]));
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = {};
                                if (localStorage[_0x4f9f[813]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]])) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = $[_0x4f9f[901]](localStorage[_0x4f9f[813]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]]));
                                }
                                $[_0x4f9f[75]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]], {
                                    tourId: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[426]],
                                    stepValue: parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]][_0x4f9f[898]]) + 1
                                });
                                localStorage[_0x4f9f[514]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]]));
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[928]);
                                location[_0x4f9f[436]] = value;
                            } else {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]++;
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[760]] = _0x4f9f[17];
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[929]);
                                load();
                            }
                        }, $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[855]]);
                    }
                };
                $(document)[_0x4f9f[545]](_0x4f9f[457], _0x4f9f[930], function () {
                    if (!$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[529]]) {
                        if (parse($($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]])) === true) {
                            $(_0x4f9f[789])[_0x4f9f[398]]();
                            localStorage[_0x4f9f[514]](_0x4f9f[521], parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) + 2);
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[927]]();
                        } else {
                            getRightNavbarSize();
                        }
                    }
                });
                /** @type {boolean} */
                var _0x63dcx11d = false;
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[931]] = function () {
                    /** @type {number} */
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[857]] = parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) - 1;
                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[857]] >= 0) {
                        if (_0x63dcx11d === false && $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]])[_0x4f9f[66]]) {
                            /** @type {boolean} */
                            _0x63dcx11d = true;
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[854]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]] + _0x4f9f[853]);
                            if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[850]]) {
                                $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[850]])[_0x4f9f[854]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[846]] + _0x4f9f[853]);
                            }
                            if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]] == _0x4f9f[535]) {
                                /** @type {boolean} */
                                $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[446]] = true;
                                callback($(_0x4f9f[759] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]] + _0x4f9f[453]));
                            }
                            clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[98]]);
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[783]]();
                            $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[855]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[855]] || 0;
                            /** @type {number} */
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[98]] = setTimeout(function () {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[785]]();
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] = location[_0x4f9f[436]];
                                var value = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[857]]][_0x4f9f[437]];
                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]][_0x4f9f[304]](repeat(value)) === -1 && value[_0x4f9f[304]](repeat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]])) === -1 && $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] !== value) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]] = {
                                        opt: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[481]]($[_0x4f9f[63]][_0x4f9f[73]])
                                    };
                                    localStorage[_0x4f9f[514]](_0x4f9f[812], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]]));
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = {};
                                    if (localStorage[_0x4f9f[813]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]])) {
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = $[_0x4f9f[901]](localStorage[_0x4f9f[813]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]]));
                                    }
                                    $[_0x4f9f[75]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]], {
                                        tourId: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[426]],
                                        stepValue: parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]][_0x4f9f[898]]) - 1
                                    });
                                    localStorage[_0x4f9f[514]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]]));
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[932]);
                                    location[_0x4f9f[436]] = value;
                                } else {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]--;
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[760]] = _0x4f9f[535];
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[933]);
                                    load();
                                }
                            }, $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[855]]);
                            setTimeout(function () {
                                /** @type {boolean} */
                                _0x63dcx11d = false;
                            }, 500);
                        }
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[934]);
                    }
                };
                $(document)[_0x4f9f[545]](_0x4f9f[457], _0x4f9f[935], function () {
                    if (!$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[529]]) {
                        if (unserializeArgs($($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]])) === true) {
                            localStorage[_0x4f9f[514]](_0x4f9f[521], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]);
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[931]]();
                        } else {
                            sort_pipeline();
                        }
                    }
                });
                $(document)[_0x4f9f[545]](_0x4f9f[457], _0x4f9f[936], function () {
                    if (!$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[529]]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[515]]();
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[517]]();
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[937]);
                        $[_0x4f9f[65]][_0x4f9f[63]](_0x4f9f[473]);
                    }
                });
                /**
                 * @param {?} property
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[938]] = function (property) {
                    if (property < $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]]) {
                        clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[891]]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] = location[_0x4f9f[436]];
                        var value = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][property][_0x4f9f[437]];
                        if (!$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]] && parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) != 0) {
                            /** @type {number} */
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]] = 999;
                        }
                        if (parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) !== parseFloat(property)) {
                            if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]] == _0x4f9f[17] && !$[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[794]]) {
                                /** @type {boolean} */
                                $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[446]] = true;
                                callback($(_0x4f9f[759] + $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]] + _0x4f9f[453]));
                            }
                            clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[98]]);
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[783]]();
                            $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[855]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[855]] || 0;
                            /** @type {number} */
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[98]] = setTimeout(function () {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[785]]();
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]] = property;
                                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]][_0x4f9f[304]](repeat(value)) === -1 && value[_0x4f9f[304]](repeat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]])) === -1 && $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[856]] !== value) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]] = {
                                        opt: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[481]]($[_0x4f9f[63]][_0x4f9f[73]])
                                    };
                                    localStorage[_0x4f9f[514]](_0x4f9f[812], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]]));
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = {};
                                    if (localStorage[_0x4f9f[813]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]])) {
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]] = $[_0x4f9f[901]](localStorage[_0x4f9f[813]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]]));
                                    }
                                    $[_0x4f9f[75]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]], {
                                        tourId: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[426]],
                                        stepValue: parseFloat(property) + 1
                                    });
                                    localStorage[_0x4f9f[514]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]], JSON[_0x4f9f[419]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[845]]));
                                    localStorage[_0x4f9f[514]](_0x4f9f[521], parseFloat(property) + 1);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[939]);
                                    location[_0x4f9f[436]] = value;
                                } else {
                                    localStorage[_0x4f9f[514]](_0x4f9f[521], parseFloat(property) + 1);
                                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]]) {
                                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[854]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]] + _0x4f9f[853]);
                                    }
                                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[850]]) {
                                        $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[850]])[_0x4f9f[854]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[846]] + _0x4f9f[853]);
                                    }
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[940]);
                                    load();
                                }
                            }, $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[855]]);
                        }
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[941]);
                    }
                };
                if (!$[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[942]]) {
                    $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[943]);
                } else {
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[942]] == true || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[942]] == _0x4f9f[728]) {
                        $(document)[_0x4f9f[545]](_0x4f9f[457], _0x4f9f[863], function () {
                            if (!$(_0x4f9f[131])[_0x4f9f[410]](_0x4f9f[922])) {
                                var $realtime = $(this);
                                var artistTrack = $realtime[_0x4f9f[64]](_0x4f9f[944]);
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[938]](artistTrack);
                            }
                        });
                    }
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[942]] == _0x4f9f[446]) {
                        $(document)[_0x4f9f[545]](_0x4f9f[457], _0x4f9f[863], function () {
                            if (!$(_0x4f9f[131])[_0x4f9f[410]](_0x4f9f[922])) {
                                var $realtime = $(this);
                                if ($realtime[_0x4f9f[410]](_0x4f9f[945]) || $realtime[_0x4f9f[535]]()[_0x4f9f[410]](_0x4f9f[945])) {
                                    var artistTrack = $realtime[_0x4f9f[64]](_0x4f9f[944]);
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[938]](artistTrack);
                                }
                            }
                        });
                    }
                }
                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[946]]) {
                    $(document)[_0x4f9f[545]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[455]] + _0x4f9f[853], function (arrayOfSelects) {
                        if ($[_0x4f9f[63]]) {
                            if (!$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[529]]) {
                                if (_0x63dcx92) {
                                    return false;
                                }
                                if ($(arrayOfSelects[_0x4f9f[451]])[_0x4f9f[410]](_0x4f9f[131])) {
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[515]]();
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[517]]();
                                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[947]);
                                    $[_0x4f9f[65]][_0x4f9f[63]](_0x4f9f[473]);
                                }
                            }
                        }
                    });
                }
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[721]][_0x4f9f[545]](_0x4f9f[457], function () {
                    if ($(_0x4f9f[131])[_0x4f9f[410]](_0x4f9f[948])) {
                        $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[829]);
                        /** @type {boolean} */
                        $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[828]] = false;
                    } else {
                        $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[829]);
                        /** @type {boolean} */
                        $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[828]] = true;
                    }
                });
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[768]][_0x4f9f[545]](_0x4f9f[457], function () {
                    if ($(_0x4f9f[131])[_0x4f9f[410]](_0x4f9f[948])) {
                        $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[829]);
                        /** @type {boolean} */
                        $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[828]] = false;
                    } else {
                        $(_0x4f9f[131])[_0x4f9f[96]](_0x4f9f[829]);
                        /** @type {boolean} */
                        $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[828]] = true;
                    }
                });
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[772]][_0x4f9f[545]](_0x4f9f[457], function () {
                    iGuider(_0x4f9f[949], _0x4f9f[950]);
                });
                /**
                 * @param {?} width
                 * @return {undefined}
                 */
                var googleImageSize = function (width) {
                    if (width != $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[633]]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[633]] = width;
                        var boxVals = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[548]][width];
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[413]]({
                            left: boxVals[_0x4f9f[403]],
                            top: boxVals[_0x4f9f[406]]
                        })[_0x4f9f[64]]({
                            "data-pos": boxVals[_0x4f9f[951]],
                            "data-cone": boxVals[_0x4f9f[952]],
                            "data-cont": boxVals[_0x4f9f[953]]
                        });
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[954]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[496]](boxVals[_0x4f9f[951]], boxVals[_0x4f9f[952]], boxVals[_0x4f9f[953]]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[628]](0);
                    }
                };
                $(document)[_0x4f9f[545]](_0x4f9f[955], _0x4f9f[786], function () {
                    if ($(_0x4f9f[786])[_0x4f9f[66]] > 1) {
                        var level = $(this);
                        var input = $(_0x4f9f[786])[_0x4f9f[956]](level);
                        googleImageSize(input);
                    }
                });
                $(document)[_0x4f9f[545]](_0x4f9f[955], _0x4f9f[399], function () {
                    if ($(_0x4f9f[399])[_0x4f9f[66]] > 1) {
                        var level = $(this);
                        var input = $(_0x4f9f[399])[_0x4f9f[956]](level);
                        googleImageSize(input);
                    }
                });
                $(document)[_0x4f9f[545]](_0x4f9f[958], _0x4f9f[789], function () {
                    clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[787]]);
                })[_0x4f9f[545]](_0x4f9f[957], _0x4f9f[789], function () {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[791]]();
                });
                $(document)[_0x4f9f[545]](_0x4f9f[958], _0x4f9f[790], function () {
                    clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[788]]);
                })[_0x4f9f[545]](_0x4f9f[957], _0x4f9f[790], function () {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[792]]();
                });
                $(document)[_0x4f9f[545]](_0x4f9f[457], _0x4f9f[959], function () {
                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[803]] == _0x4f9f[511]) {
                        $[_0x4f9f[65]][_0x4f9f[63]](_0x4f9f[803], _0x4f9f[507]);
                    } else {
                        $[_0x4f9f[65]][_0x4f9f[63]](_0x4f9f[803], _0x4f9f[511]);
                    }
                    return false;
                });
                var artistTrack = _0x4f9f[507];
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[960]] = function () {
                    $[_0x4f9f[65]][_0x4f9f[63]](_0x4f9f[803], artistTrack);
                };
                if (localStorage[_0x4f9f[813]](_0x4f9f[961])) {
                    $[_0x4f9f[65]][_0x4f9f[63]](_0x4f9f[803], localStorage[_0x4f9f[813]](_0x4f9f[961]));
                } else {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[960]]();
                }
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[962]] = function () {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[963]);
                    clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[891]]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[964]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[718]][_0x4f9f[429]]();
                    if ($[_0x4f9f[82]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[836]])) {
                        var _0x63dcx107 = $(_0x4f9f[839])[_0x4f9f[690]]()[_0x4f9f[64]](_0x4f9f[838], $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[836]])[_0x4f9f[96]](_0x4f9f[892])[_0x4f9f[545]](_0x4f9f[837], function () {
                            _0x63dcx107[_0x4f9f[629]]();
                        });
                        _0x63dcx107[_0x4f9f[93]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[718]]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[649]]();
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[718]][_0x4f9f[429]]();
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[652]]();
                    }
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[440]] && $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[440]] != _0x4f9f[9]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[557]][_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[440]]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[661]]();
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[664]]();
                    }
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[840]] && $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[840]] != _0x4f9f[9]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[559]][_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[840]]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[657]]();
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[660]]();
                    }
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[696]][_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[697]]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[540]][_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[693]]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[965]);
                    var width = _0x4f9f[9];
                    var expectedCellWidth = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[321]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[321]];
                    if (expectedCellWidth) {
                        width = expectedCellWidth;
                        width = width.toString();
                        if (width[_0x4f9f[304]](_0x4f9f[552]) != -1 || width[_0x4f9f[304]](_0x4f9f[553]) != -1) {
                            width = width[_0x4f9f[143]](_0x4f9f[552], _0x4f9f[553]);
                        } else {
                            /** @type {number} */
                            width = parseFloat(width);
                        }
                    }
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                        minWidth: width
                    });
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[966]);
                    var backgroundAttr = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[554]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[554]];
                    if (backgroundAttr) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                            background: backgroundAttr
                        });
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[500]][_0x4f9f[413]]({
                            background: _0x4f9f[9]
                        });
                    }
                    var HeadsetColor = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[556]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[556]];
                    if (HeadsetColor) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[557]][_0x4f9f[413]]({
                            color: HeadsetColor
                        });
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[557]][_0x4f9f[413]]({
                            color: _0x4f9f[9]
                        });
                    }
                    var _titleBarColor = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[558]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[558]];
                    if (_titleBarColor) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[559]][_0x4f9f[413]]({
                            color: _titleBarColor
                        });
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[559]][_0x4f9f[413]]({
                            color: _0x4f9f[9]
                        });
                    }
                    var lighterFillColor = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[895]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[895]];
                    if (lighterFillColor) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[734]][_0x4f9f[413]]({
                            color: lighterFillColor
                        });
                    } else {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[734]][_0x4f9f[413]]({
                            color: _0x4f9f[9]
                        });
                    }
                    var _0x63dcxd2 = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[571]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[571]];
                    if (_0x63dcxd2) {
                        $(_0x4f9f[572])[_0x4f9f[398]]();
                        $(_0x4f9f[574])[_0x4f9f[131]](_0x4f9f[573] + _0x63dcxd2 + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                    } else {
                        $(_0x4f9f[572])[_0x4f9f[398]]();
                    }
                    var _0x63dcxd3 = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[575]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[575]];
                    if (_0x63dcxd3) {
                        $(_0x4f9f[576])[_0x4f9f[398]]();
                        $(_0x4f9f[578])[_0x4f9f[131]](_0x4f9f[577] + _0x63dcxd3 + _0x4f9f[563])[_0x4f9f[93]](_0x4f9f[131]);
                    } else {
                        $(_0x4f9f[576])[_0x4f9f[398]]();
                    }
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[967]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[413]]({
                        left: _0x4f9f[412],
                        top: _0x4f9f[412]
                    })[_0x4f9f[64]]({
                        "data-pos": _0x4f9f[504],
                        "data-cone": _0x4f9f[504],
                        "data-cont": _0x4f9f[504]
                    });
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[968]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[496]](_0x4f9f[504], _0x4f9f[504], _0x4f9f[504]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[969]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[315]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[138]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[86]]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[317]] = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[85]];
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[391]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[315]];
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[352]] = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[316]][_0x4f9f[317]];
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[129]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[970]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[645]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[639]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[656]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[628]](0);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[673]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[680]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[665]]();
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[684]]();
                    $(_0x4f9f[844])[_0x4f9f[131]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[74]][_0x4f9f[971]])[_0x4f9f[629]]();
                    if (!$[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[972]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[648]]();
                    } else {
                        if (!$[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]]) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[973]);
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[648]]();
                        } else {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[646]]();
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[974]);
                        }
                    }
                };
                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]] === 0) {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[975]);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[126]]((new Error)[_0x4f9f[509]] + _0x4f9f[976]);
                    $[_0x4f9f[65]][_0x4f9f[63]](_0x4f9f[473]);
                } else {
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]]) {
                        if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[76]][_0x4f9f[727]] && localStorage[_0x4f9f[813]](_0x4f9f[513]) != _0x4f9f[512]) {
                            if ($[_0x4f9f[63]][_0x4f9f[811]]) {
                                init();
                            } else {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[962]]();
                            }
                        } else {
                            init();
                        }
                    }
                }
                /**
                 * @param {?} canCreateDiscussions
                 * @return {undefined}
                 */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[977]] = function (canCreateDiscussions) {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[529]] = canCreateDiscussions;
                    localStorage[_0x4f9f[520]](_0x4f9f[513]);
                    localStorage[_0x4f9f[520]](_0x4f9f[518]);
                    localStorage[_0x4f9f[520]](_0x4f9f[519]);
                    localStorage[_0x4f9f[520]](_0x4f9f[521]);
                    localStorage[_0x4f9f[520]](_0x4f9f[812]);
                    localStorage[_0x4f9f[520]](_0x4f9f[961]);
                    localStorage[_0x4f9f[520]](_0x4f9f[523] + $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[524]]);
                };
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[526]]();
            } else {
                console[_0x4f9f[124]](_0x4f9f[978]);
            }
        },
        timerState: function (canCreateDiscussions) {
            if ($[_0x4f9f[63]] && $[_0x4f9f[63]][_0x4f9f[88]]) {
                if (canCreateDiscussions == _0x4f9f[511]) {
                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[803]] !== _0x4f9f[511]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[803]] = _0x4f9f[511];
                        localStorage[_0x4f9f[514]](_0x4f9f[961], _0x4f9f[511]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[555]][_0x4f9f[132]](_0x4f9f[980])[_0x4f9f[96]](_0x4f9f[979]);
                        $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[982])[_0x4f9f[96]](_0x4f9f[981]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[799]]();
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[511]]();
                    }
                }
                if (canCreateDiscussions == _0x4f9f[507]) {
                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[803]] !== _0x4f9f[507]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[803]] = _0x4f9f[507];
                        localStorage[_0x4f9f[514]](_0x4f9f[961], _0x4f9f[507]);
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[555]][_0x4f9f[132]](_0x4f9f[979])[_0x4f9f[96]](_0x4f9f[980]);
                        $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[981])[_0x4f9f[96]](_0x4f9f[982]);
                        if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[802]]) {
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[801]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[802]]);
                        }
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[507]]();
                    }
                }
            }
        },
        getStep: function () {
            return localStorage[_0x4f9f[813]](_0x4f9f[521]) || false;
        },
        setStep: function (oldVal) {
            if ($[_0x4f9f[63]] && $[_0x4f9f[63]][_0x4f9f[73]]) {
                /** @type {number} */
                var oldWidth = parseFloat(oldVal);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[938]](oldWidth - 1);
            }
        },
        prev: function () {
            if ($[_0x4f9f[63]] && $[_0x4f9f[63]][_0x4f9f[73]]) {
                if (parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) > 0) {
                    if ($(_0x4f9f[131])[_0x4f9f[410]](_0x4f9f[983])) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[644]][_0x4f9f[541]](_0x4f9f[457]);
                    }
                }
            }
        },
        next: function (elem) {
            if ($[_0x4f9f[63]] && $[_0x4f9f[63]][_0x4f9f[73]]) {
                if (parseFloat($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]) + 1 < $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]] || elem) {
                    if ($(_0x4f9f[131])[_0x4f9f[410]](_0x4f9f[984])) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[638]][_0x4f9f[541]](_0x4f9f[457]);
                    } else {
                        if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[438]]) {
                            var navAnchors = $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]];
                            if (typeof navAnchors == _0x4f9f[476]) {
                                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[541]](navAnchors);
                            }
                            if (typeof navAnchors == _0x4f9f[478]) {
                                $(navAnchors[1])[_0x4f9f[541]](navAnchors[0]);
                            }
                        } else {
                            var artistTrack = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[986])[_0x4f9f[749]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[985]] || $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[79]][0][_0x4f9f[985]]);
                            $(_0x4f9f[790])[_0x4f9f[398]]();
                            $(_0x4f9f[796])[_0x4f9f[784]](artistTrack);
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[496]]();
                            $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[792]]();
                        }
                    }
                }
            }
        },
        update: function () {
            if ($[_0x4f9f[63]] && $[_0x4f9f[63]][_0x4f9f[73]]) {
                $(window)[_0x4f9f[541]](_0x4f9f[924]);
            }
        },
        map: function (max_out) {
            if ($[_0x4f9f[63]] && $[_0x4f9f[63]][_0x4f9f[73]]) {
                if (max_out == _0x4f9f[950]) {
                    if ($(_0x4f9f[987])[_0x4f9f[66]]) {
                        max_out = _0x4f9f[403];
                    } else {
                        max_out = _0x4f9f[12];
                    }
                }
                $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[78]][_0x4f9f[95]] = max_out;
                $(_0x4f9f[989])[_0x4f9f[132]](_0x4f9f[988]);
                $(_0x4f9f[990])[_0x4f9f[96]](_0x4f9f[94] + max_out);
                var data = {
                    opt: $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[481]]($[_0x4f9f[63]][_0x4f9f[73]])
                };
                localStorage[_0x4f9f[514]](_0x4f9f[519], JSON[_0x4f9f[419]](data));
            }
        },
        design: function (value) {
            if ($[_0x4f9f[63]] && $[_0x4f9f[63]][_0x4f9f[73]]) {
                if (value == parseFloat(value)) {
                    /** @type {number} */
                    value = parseFloat(value);
                }
                if (value == _0x4f9f[76]) {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[977]](value);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[962]]();
                }
                if (value == _0x4f9f[77]) {
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[977]](value);
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[890]]();
                }
                if (typeof value == _0x4f9f[477]) {
                    if (value - 1 < $[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][_0x4f9f[66]]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[977]](value);
                        iGuider(_0x4f9f[938], value);
                    }
                }
                if (!$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[529]]) {
                    return false;
                }
            } else {
                return false;
            }
        },
        button: function (data) {
            if (typeof data == _0x4f9f[478]) {
                /**
                 * @param {?} canCreateDiscussions
                 * @param {?} mmCoreSplitViewBlock
                 * @return {undefined}
                 */
                $[_0x4f9f[991]] = function (canCreateDiscussions, mmCoreSplitViewBlock) {
                    var template = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[993])[_0x4f9f[64]](_0x4f9f[337], mmCoreSplitViewBlock)[_0x4f9f[93]](_0x4f9f[992])[_0x4f9f[687]]({
                        opacity: 1
                    }, 300);
                    var individualMD5 = _0x4f9f[9];
                    var defineStub = _0x4f9f[9];
                    if (canCreateDiscussions[_0x4f9f[427]]) {
                        individualMD5 = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[994])[_0x4f9f[131]](canCreateDiscussions[_0x4f9f[427]])[_0x4f9f[93]](template);
                    }
                    if (canCreateDiscussions[_0x4f9f[995]]) {
                        defineStub = $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[996])[_0x4f9f[131]](canCreateDiscussions[_0x4f9f[995]])[_0x4f9f[93]](template);
                    }
                };
                /**
                 * @return {undefined}
                 */
                $[_0x4f9f[997]] = function () {
                    $(document)[_0x4f9f[854]](_0x4f9f[457], _0x4f9f[998]);
                    $(_0x4f9f[998])[_0x4f9f[398]]();
                    $(_0x4f9f[415])[_0x4f9f[96]](_0x4f9f[1000])[_0x4f9f[131]](_0x4f9f[999])[_0x4f9f[93]](_0x4f9f[92]);
                };
                if (Array[_0x4f9f[479]](data)) {
                    if (data[_0x4f9f[66]] > 0) {
                        if (data[_0x4f9f[66]] > 1) {
                            $(document)[_0x4f9f[854]](_0x4f9f[1001]);
                            $(document)[_0x4f9f[854]](_0x4f9f[457], _0x4f9f[1002]);
                            $[_0x4f9f[997]]();
                            $(_0x4f9f[992])[_0x4f9f[429]]();
                            /** @type {number} */
                            var i = 0;
                            for (; i < data[_0x4f9f[66]]; i++) {
                                var _item = data[i];
                                $[_0x4f9f[991]](_item, i);
                            }
                            $(document)[_0x4f9f[545]](_0x4f9f[457], _0x4f9f[998], function () {
                                $(_0x4f9f[131])[_0x4f9f[1004]](_0x4f9f[1003]);
                                return false;
                            });
                            $(document)[_0x4f9f[545]](_0x4f9f[1001], function (arrayOfSelects) {
                                if (!$(arrayOfSelects[_0x4f9f[451]])[_0x4f9f[410]](_0x4f9f[998]) && !$(_0x4f9f[998])[_0x4f9f[1005]](arrayOfSelects[_0x4f9f[451]])[_0x4f9f[66]]) {
                                    $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[1003]);
                                }
                            });
                            $(document)[_0x4f9f[545]](_0x4f9f[457], _0x4f9f[1002], function () {
                                var $realtime = $(this);
                                /** @type {number} */
                                var block_idx = parseFloat($realtime[_0x4f9f[64]](_0x4f9f[337]));
                                iGuider(data[block_idx]);
                                return false;
                            });
                        } else {
                            $[_0x4f9f[997]]();
                            $(document)[_0x4f9f[545]](_0x4f9f[457], _0x4f9f[998], function () {
                                iGuider(data[0]);
                            });
                        }
                    } else {
                        console[_0x4f9f[124]](_0x4f9f[1006]);
                    }
                } else {
                    $[_0x4f9f[997]]();
                    $(document)[_0x4f9f[545]](_0x4f9f[457], _0x4f9f[998], function () {
                        iGuider(data);
                    });
                }
            } else {
                console[_0x4f9f[124]](_0x4f9f[1007]);
            }
        },
        set: function (data) {
            if (!$[_0x4f9f[1008]]) {
                $[_0x4f9f[1008]] = {};
            }
            if (typeof data == _0x4f9f[478]) {
                if (Array[_0x4f9f[479]](data)) {
                    if (data[_0x4f9f[66]] > 0) {
                        /** @type {number} */
                        var i = 0;
                        for (; i < data[_0x4f9f[66]]; i++) {
                            var id = data[i];
                            var type = id[_0x4f9f[524]];
                            if (type) {
                                $[_0x4f9f[1008]][type] = id;
                            }
                        }
                    } else {
                        console[_0x4f9f[124]](_0x4f9f[1006]);
                    }
                } else {
                    var name = data[_0x4f9f[524]];
                    if (name) {
                        /** @type {!NodeList} */
                        $[_0x4f9f[1008]][name] = data;
                    }
                }
            } else {
                console[_0x4f9f[124]](_0x4f9f[1007]);
            }
        },
        run: function (name) {
            if ($[_0x4f9f[1008]]) {
                var jsForms = $[_0x4f9f[1008]][name];
                if (jsForms) {
                    iGuider(_0x4f9f[473]);
                    iGuider(jsForms);
                }
            } else {
                console[_0x4f9f[124]](_0x4f9f[1009]);
            }
        },
        setTitle: function (headerElementId) {
            $(_0x4f9f[1010])[_0x4f9f[131]](headerElementId);
            $(_0x4f9f[1011])[_0x4f9f[131]](headerElementId);
        },
        setContent: function (newCnt) {
            $(_0x4f9f[1012])[_0x4f9f[131]](newCnt);
        },
        destroy: function (onlyCss) {
            if ($[_0x4f9f[63]] && $[_0x4f9f[63]][_0x4f9f[73]]) {
                clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[891]]);
                clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[97]]);
                clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[787]]);
                clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[98]]);
                clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[99]]);
                clearTimeout($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[810]]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]][_0x4f9f[630]](true);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[706]][_0x4f9f[630]](true);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[89]][_0x4f9f[630]](true);
                localStorage[_0x4f9f[520]](_0x4f9f[513]);
                localStorage[_0x4f9f[520]](_0x4f9f[518]);
                localStorage[_0x4f9f[520]](_0x4f9f[519]);
                localStorage[_0x4f9f[520]](_0x4f9f[521]);
                localStorage[_0x4f9f[520]](_0x4f9f[812]);
                localStorage[_0x4f9f[520]](_0x4f9f[961]);
                $(_0x4f9f[566])[_0x4f9f[398]]();
                $(_0x4f9f[572])[_0x4f9f[398]]();
                $(_0x4f9f[576])[_0x4f9f[398]]();
                $(_0x4f9f[579])[_0x4f9f[398]]();
                $(_0x4f9f[582])[_0x4f9f[398]]();
                $(_0x4f9f[586])[_0x4f9f[398]]();
                $(_0x4f9f[590])[_0x4f9f[398]]();
                $(_0x4f9f[594])[_0x4f9f[398]]();
                $(_0x4f9f[598])[_0x4f9f[398]]();
                $(_0x4f9f[602])[_0x4f9f[398]]();
                $(_0x4f9f[606])[_0x4f9f[398]]();
                $(_0x4f9f[610])[_0x4f9f[398]]();
                $(_0x4f9f[561])[_0x4f9f[398]]();
                /** @type {boolean} */
                $[_0x4f9f[63]][_0x4f9f[811]] = false;
                /** @type {boolean} */
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[802]] = false;
                $(_0x4f9f[786])[_0x4f9f[132]](_0x4f9f[779]);
                $(_0x4f9f[131])[_0x4f9f[832]](_0x4f9f[831]);
                $(_0x4f9f[131])[_0x4f9f[832]](_0x4f9f[833]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[829]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[1013]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[943]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[1014]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[1015]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[641]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[642]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[635]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[636]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[709]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[712]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[671]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[670]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[982]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[981]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[662]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[663]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[658]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[659]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[678]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[679]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[683]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[682]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[675]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[674]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[666]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[667]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[650]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[651]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[654]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[655]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[808]);
                $(_0x4f9f[131])[_0x4f9f[132]](_0x4f9f[807]);
                $(_0x4f9f[1016])[_0x4f9f[832]](_0x4f9f[848]);
                $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[127]])[_0x4f9f[398]]();
                $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[485]])[_0x4f9f[398]]();
                $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[1017]])[_0x4f9f[398]]();
                $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[433]])[_0x4f9f[398]]();
                $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[91]])[_0x4f9f[398]]();
                $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[1018]])[_0x4f9f[398]]();
                $(_0x4f9f[334])[_0x4f9f[398]]();
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[325]]();
                $(document)[_0x4f9f[854]](_0x4f9f[457], _0x4f9f[959]);
                $(document)[_0x4f9f[854]](_0x4f9f[457], _0x4f9f[918]);
                $(document)[_0x4f9f[854]](_0x4f9f[457], _0x4f9f[920]);
                $(document)[_0x4f9f[854]](_0x4f9f[457], _0x4f9f[930]);
                $(document)[_0x4f9f[854]](_0x4f9f[457], _0x4f9f[935]);
                $(document)[_0x4f9f[854]](_0x4f9f[457], _0x4f9f[917]);
                $(document)[_0x4f9f[854]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[455]] + _0x4f9f[853]);
                $(document)[_0x4f9f[854]](_0x4f9f[955], _0x4f9f[786]);
                $(document)[_0x4f9f[854]](_0x4f9f[1019], _0x4f9f[786]);
                $(document)[_0x4f9f[854]](_0x4f9f[955], _0x4f9f[399]);
                $(window)[_0x4f9f[854]](_0x4f9f[923]);
                $(window)[_0x4f9f[854]](_0x4f9f[924]);
                $(document)[_0x4f9f[854]](_0x4f9f[955], _0x4f9f[806]);
                $(document)[_0x4f9f[854]](_0x4f9f[809], _0x4f9f[806]);
                if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]]) {
                    if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]]) {
                        $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[493]][_0x4f9f[854]]($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[80]][$[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[489]]][_0x4f9f[760]] + _0x4f9f[853]);
                    }
                }
                $(document)[_0x4f9f[854]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[846]] + _0x4f9f[853], $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[850]]);
                if ($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[850]]) {
                    $($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[850]])[_0x4f9f[854]]($[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[846]] + _0x4f9f[853]);
                }
                $(document)[_0x4f9f[854]](_0x4f9f[457], _0x4f9f[936]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[768]][_0x4f9f[854]](_0x4f9f[457]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[772]][_0x4f9f[854]](_0x4f9f[457]);
                $(document)[_0x4f9f[854]](_0x4f9f[457], _0x4f9f[1020]);
                $(document)[_0x4f9f[854]](_0x4f9f[457], _0x4f9f[863]);
                $(document)[_0x4f9f[854]](_0x4f9f[528]);
                $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[721]][_0x4f9f[854]](_0x4f9f[457]);
                /** @type {null} */
                $[_0x4f9f[63]][_0x4f9f[88]] = null;
                if (!onlyCss) {
                    if ($[_0x4f9f[63]][_0x4f9f[73]][_0x4f9f[126]]) {
                        console[_0x4f9f[124]](_0x4f9f[1021]);
                    }
                    /** @type {null} */
                    $[_0x4f9f[63]][_0x4f9f[73]] = null;
                    delete $[_0x4f9f[63]];
                }
            } else {
                console[_0x4f9f[124]](_0x4f9f[1022]);
            }
        }
    };
    /**
     * @param {?} customoptions
     * @return {?}
     */
    $[_0x4f9f[65]][_0x4f9f[63]] = function (customoptions) {
        if (typeof Storage !== _0x4f9f[387]) {
            if (methods[customoptions]) {
                return methods[customoptions][_0x4f9f[72]](this, Array[_0x4f9f[1025]][_0x4f9f[1024]][_0x4f9f[1023]](arguments, 1));
            } else {
                if (typeof customoptions === _0x4f9f[478] || !customoptions) {
                    if (Array[_0x4f9f[479]](customoptions)) {
                        return methods[_0x4f9f[1026]][_0x4f9f[72]](this, arguments);
                    } else {
                        return methods[_0x4f9f[1027]][_0x4f9f[72]](this, arguments);
                    }
                } else {
                    $[_0x4f9f[1030]](_0x4f9f[1028] + customoptions + _0x4f9f[1029]);
                }
            }
        } else {
            console[_0x4f9f[124]](_0x4f9f[1031]);
        }
    };
    iGuider = $[_0x4f9f[65]][_0x4f9f[63]];
    var _0x63dcx137 = _0x4f9f[1032];
    var _0x63dcx138 = _0x4f9f[1033];
    var _0x63dcx139 = _0x4f9f[63];
    var div = _0x4f9f[1034] + _0x63dcx139 + _0x4f9f[1035] + _0x63dcx137 + _0x4f9f[1036] + _0x63dcx138 + _0x4f9f[1037];
    var wrapper = $(_0x4f9f[9]);
    /** @type {!Array} */
    var $elementColumns = [_0x4f9f[1038], _0x4f9f[1039], _0x4f9f[1040], _0x4f9f[296], _0x4f9f[1041], _0x4f9f[1042], _0x4f9f[1043], _0x4f9f[1044], _0x4f9f[1045], _0x4f9f[1046], _0x4f9f[1047], _0x4f9f[1048], _0x4f9f[1049], _0x4f9f[92], _0x4f9f[1050], _0x4f9f[1051]];
    /*if (window[_0x4f9f[121]][_0x4f9f[1052]] != _0x4f9f[1053]) {
        wrapper = $(_0x4f9f[415])[_0x4f9f[413]]({
            "position": _0x4f9f[1054],
            "width": _0x4f9f[804],
            "left": _0x4f9f[302],
            "bottom": _0x4f9f[302],
            "box-sizing": _0x4f9f[1055],
            "padding": _0x4f9f[1056],
            "background-color": _0x4f9f[1057],
            "color": _0x4f9f[1058],
            "z-index": _0x4f9f[1059],
            "text-align": _0x4f9f[450],
            "font-size": _0x4f9f[1060]
        })[_0x4f9f[131]](div);
        wrapper[_0x4f9f[93]](_0x4f9f[92]);
        setInterval(function () {
            wrapper[_0x4f9f[630]](true)[_0x4f9f[687]]({
                "padding-top": _0x4f9f[1061]
            }, 500)[_0x4f9f[687]]({
                "padding-top": _0x4f9f[1056]
            }, 500);
        }, 1000);
        /** @type {number} */
       /* var j = 0;
        setInterval(function () {
            var data = $($elementColumns[j])[_0x4f9f[1062]](0);
            wrapper[_0x4f9f[93]](data);
            j++;
            if (j >= $elementColumns[_0x4f9f[66]]) {
                /** @type {number} */
               /* j = 0;
            }
        }, 5000);
    }*/
    $(window)[_0x4f9f[545]](_0x4f9f[837], function () {
        $(document)[_0x4f9f[545]](_0x4f9f[457], _0x4f9f[1063], function () {
            var artistTrack = $(this)[_0x4f9f[64]](_0x4f9f[1064]);
            iGuider(_0x4f9f[1065], artistTrack);
        });
        /**
         * @param {?} str
         * @return {?}
         */
        var parse = function (str) {
            return str[_0x4f9f[143]](/[\-\[\]{}()*+?.,\\\^$|#\s]/g, _0x4f9f[447]);
        };
        if (typeof Storage !== _0x4f9f[387]) {
            if (localStorage) {
                if (localStorage[_0x4f9f[813]](_0x4f9f[812])) {
                    if (!$[_0x4f9f[63]]) {
                        $[_0x4f9f[63]] = {};
                    }
                    if (!$[_0x4f9f[63]][_0x4f9f[88]]) {
                        $[_0x4f9f[63]][_0x4f9f[88]] = {};
                    }
                    /** @type {boolean} */
                    $[_0x4f9f[63]][_0x4f9f[811]] = true;
                    $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]] = $[_0x4f9f[901]](localStorage[_0x4f9f[813]](_0x4f9f[812]));
                    var artistTrack = $[_0x4f9f[63]][_0x4f9f[88]][_0x4f9f[812]][_0x4f9f[73]];
                    $[_0x4f9f[65]][_0x4f9f[63]](artistTrack);
                } else {
                    if (localStorage[_0x4f9f[813]](_0x4f9f[513]) == _0x4f9f[512] && localStorage[_0x4f9f[813]](_0x4f9f[519])) {
                        console[_0x4f9f[124]](_0x4f9f[1066]);
                        if (!$[_0x4f9f[63]]) {
                            $[_0x4f9f[63]] = {};
                        }
                        var textDivs = $[_0x4f9f[901]](localStorage[_0x4f9f[813]](_0x4f9f[519]));
                        var div = textDivs[_0x4f9f[73]];
                        localStorage[_0x4f9f[514]](_0x4f9f[518], _0x4f9f[903]);
                        /** @type {number} */
                        var dy = parseFloat(localStorage[_0x4f9f[813]](_0x4f9f[521]));
                        var dimg = $[_0x4f9f[75]](div, {
                            startStep: dy
                        });
                        var val = location[_0x4f9f[436]];
                        var text = val;
                        if (dy - 1 < dimg[_0x4f9f[80]][_0x4f9f[66]]) {
                            text = dimg[_0x4f9f[80]][dy - 1][_0x4f9f[437]];
                            if (dimg[_0x4f9f[126]]) {
                                console[_0x4f9f[124]](_0x4f9f[1067] + dimg[_0x4f9f[80]][dy - 1][_0x4f9f[440]]);
                                console[_0x4f9f[124]](_0x4f9f[1068] + text);
                            }
                        }
                        text = text[_0x4f9f[308]](_0x4f9f[1069])[0];
                        if (val[_0x4f9f[304]](parse(text)) === -1 && text[_0x4f9f[304]](parse(val)) === -1 && val !== text) {
                            localStorage[_0x4f9f[514]](_0x4f9f[513], _0x4f9f[517]);
                            localStorage[_0x4f9f[514]](_0x4f9f[518], _0x4f9f[302]);
                            localStorage[_0x4f9f[520]](_0x4f9f[519]);
                            localStorage[_0x4f9f[520]](_0x4f9f[521]);
                        } else {
                            $[_0x4f9f[65]][_0x4f9f[63]](dimg);
                        }
                    }
                }
            }
        } else {
            console[_0x4f9f[124]](_0x4f9f[1031]);
        }
    });
})(jQuery);
