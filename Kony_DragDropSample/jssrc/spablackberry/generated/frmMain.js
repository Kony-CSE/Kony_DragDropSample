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

function addWidgetsfrmMain() {
    frmMain.add();
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