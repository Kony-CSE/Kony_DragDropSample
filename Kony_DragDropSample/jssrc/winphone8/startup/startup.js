//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "DragDrop",
    appName: "DragDrop",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "127.0.0.1",
    serverPort: "8080",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    url: "http://127.0.0.1:8080/middleware/MWServlet",
    secureurl: "http://127.0.0.1:8080/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmMainGlobals();
    frmMain2Globals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 6000
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmMain.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();