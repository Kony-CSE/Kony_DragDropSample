//Form JS File
function frmMain2_button6850802752060_onClick_seq0(eventobject) {
    frmMain.show();
};

function addWidgetsfrmMain2() {
    var lbl = new kony.ui.Label({
        "id": "lbl",
        "isVisible": true,
        "text": "Label",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button6850802752060 = new kony.ui.Button({
        "id": "button6850802752060",
        "isVisible": true,
        "text": "Back",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmMain2_button6850802752060_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmMain2.add(
    lbl, button6850802752060);
};

function frmMain2Globals() {
    var MenuId = [];
    frmMain2 = new kony.ui.Form2({
        "id": "frmMain2",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmMain2
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "maxAppMenuButtons": 4,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["button6850802752060", "lbl"]
    });
};