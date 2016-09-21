//Form JS File
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
        "width": "100.0%",
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
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmMain_frmMain_preshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmMain
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
    frmMain.setDefaultUnit(kony.flex.DP);
};