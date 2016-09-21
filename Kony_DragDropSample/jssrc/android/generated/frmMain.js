//Form JS File
function frmMain_frmMain_init_seq0(eventobject) {
    frmMain.flxCont1.doLayout = function() {
        var dimensions = frmMain.flxCont1.frame;
        containerWidth = dimensions.width;
        containerHeight = dimensions.height;
    }
};

function frmMain_frmMain_preshow_seq0(eventobject) {
    addLabletoGrid.call(this);
};

function frmMain_flxCont1_onTouchStart_seq0(eventobject, x, y) {
    kony.print("STARTED TOUCH");
};

function frmMain_flxCont1_onTouchEnd_seq0(eventobject, x, y) {
    callOnMoveEnd();
};

function frmMain_flxCont1_onTouchMove_seq0(eventobject, x, y) {
    callOnMove(x, y);
};

function addWidgetsfrmMain() {
    var flxCont1 = new kony.ui.FlexContainer({
        "id": "flxCont1",
        "top": "0.0%",
        "left": "0.0%",
        "width": "100%",
        "height": "65.0%",
        "minWidth": "100.0%",
        "maxWidth": "100.0%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "onTouchStart": frmMain_flxCont1_onTouchStart_seq0,
        "onTouchEnd": frmMain_flxCont1_onTouchEnd_seq0,
        "onTouchMove": frmMain_flxCont1_onTouchMove_seq0,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxCont1.setDefaultUnit(kony.flex.DP)
    flxCont1.add();
    frmMain.add(
    flxCont1);
};

function frmMainGlobals() {
    var MenuId = [];
    frmMain = new kony.ui.Form2({
        "id": "frmMain",
        "enableScrolling": false,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": frmMain_frmMain_init_seq0,
        "preShow": frmMain_frmMain_preshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmMain
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
    frmMain.setDefaultUnit(kony.flex.DP);
};