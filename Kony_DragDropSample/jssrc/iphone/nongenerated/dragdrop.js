isfirst = true;
curDest = null;
curFrom = null;

function callOnMove(x, y) {
    kony.print("x and y values are ::");
    kony.print(x);
    kony.print(y);

    function getPosition(option, a) {
        kony.print("inside getposition");
        kony.print(a);
        //	 var dimensions = frmMain.flxCont1.frame;
        //	 var containerWidth = dimensions.width;
        //	 var containerHeight = dimensions.height;
        if (option == "width") {
            kony.print("width ::" + containerWidth);
            kony.print(" a ::" + a);
            if (a <= containerWidth * 0.25) {
                return 1;
            } else if (a <= containerWidth * 0.50) {
                return 2;
            } else if (a <= containerWidth * 0.75) {
                return 3;
            } else {
                return 4;
            }
        } else if (option == "height") {
            kony.print("height ::" + containerHeight);
            kony.print(" a ::" + a);
            if (a <= containerHeight * 0.25) {
                return 1;
            } else if (a <= containerHeight * 0.50) {
                return 2;
            } else if (a <= containerHeight * 0.75) {
                return 3;
            } else {
                return 4;
            }
        }
    }
    if (isfirst) {
        kony.print("started layout at " + x + ":" + y);
        curX = getPosition("width", x);
        kony.print("curX");
        kony.print(curX);
        curY = getPosition("height", y);
        kony.print("curY");
        kony.print(curY);
        curFrom = ((curY - 1) * 4) + curX;
        kony.print("label picked :" + curFrom);
        kony.print("curFrom");
        kony.print(curFrom);
        isfirst = false;
        curDest = curFrom;
    }
    kony.print("loc:" + x + ":" + y);
    kony.print("loc after chamges :" + x + ":" + y);
    frmMain["lbl" + curFrom].centerX = x;
    frmMain["lbl" + curFrom].centerY = y;
    frmMain["lbl" + curFrom].zIndex = 2;
    calDestination();
    frmMain.flxCont1.forceLayout();

    function calDestination() {
        kony.print("Position x ::" + x);
        kony.print("position Y ::" + y);
        var desX = getPosition("width", x);
        var desY = getPosition("height", y);
        kony.print("Destination desX ::" + desX);
        kony.print("Destination desY ::" + desY);
        temp = ((desY - 1) * 4) + desX;
        kony.print("temp Varalble >>>>>>>");
        kony.print(temp);
        kony.print("label test :" + temp + ":" + curDest + ":" + curFrom);
        if (temp != curDest) {
            if (curDest != null) {
                kony.print("currDest and temp in not null");
                kony.print(curDest + "::" + temp);
                curDest = temp;
            }
        }
        isfirst = false;
    }
}

function callOnMoveEnd() {
    if (curFrom == null) {
        isfirst = true;
        return;
    }
    kony.print("curFrom in call end");
    kony.print(curFrom);
    kony.print(curDest);
    var mod = curFrom % 4;
    var div = parseInt(curFrom / 4);
    kony.print("mode ended" + mod + ":" + div);
    //	var dimensions = frmMain.flxCont1.frame;
    //	var containerWidth = dimensions.width;
    //	var containerHeight = dimensions.height;
    frmMain.flxCont1.setDefaultUnit("dp");
    if (mod == 0) {
        //	frmMain["lbl"+curFrom].centerX = 280;
        frmMain["lbl" + curFrom].centerX = (containerWidth * 0.75) + (containerWidth * 0.25 / 2)
    } else {
        //	frmMain["lbl"+curFrom].centerX = (mod*80)-40;
        frmMain["lbl" + curFrom].centerX = (mod * containerWidth * 0.25) - (containerWidth * 0.25 / 2);
    }
    if (mod == 0) {
        //	frmMain["lbl"+curFrom].centerY = (div*80)-40;
        frmMain["lbl" + curFrom].centerY = (div * containerHeight * 0.25) - (containerHeight * 0.25 / 2);
    } else {
        //	frmMain["lbl"+curFrom].centerY = (div*80)+40;
        frmMain["lbl" + curFrom].centerY = (div * containerHeight * 0.25) + (containerHeight * 0.25 / 2);
    }
    frmMain["lbl" + curFrom].zIndex = 1;
    isfirst = true;
    frmMain.flxCont1.forceLayout();
    if (curDest != "" && curDest != null && curFrom != curDest) {
        if (curDest != null) {
            frmMain2.lbl.text = curFrom + " to " + curDest;
            frmMain.destroy();
            frmMain2.show();
        }
    } else {
        frmMain["lbl" + curFrom].centerX = "";
        frmMain["lbl" + curFrom].centerY = "";
        frmMain["lbl" + curFrom].zIndex = "";
    }
}