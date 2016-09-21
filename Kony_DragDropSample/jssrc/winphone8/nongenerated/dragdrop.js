isfirst = true;
curDest = null;
curFrom = null;

function callOnMove(x, y) {
    kony.print("x and y values are ");
    kony.print(x);
    kony.print(y);

    function getPosition(option, a) {
        kony.print("inside getposition");
        kony.print(a);
        var dimensions = frmMain.flxCont1.frame;
        if (option == "width") {
            var w = dimensions.width;
            if (a <= w * 0.25) {
                return 1;
            } else if (a <= w * 0.50) {
                return 2;
            } else if (a <= w * 0.75) {
                return 3;
            } else {
                return 4;
            }
        } else if (option == "height") {
            var h = dimensions.height;
            if (a <= h * 0.25) {
                return 1;
            } else if (a <= h * 0.50) {
                return 2;
            } else if (a <= h * 0.75) {
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
        var desX = getPosition("width", x);
        var desY = getPosition("height", y);
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
    var dimensions = frmMain.flxCont1.frame;
    var w = dimensions.width;
    var h = dimensions.height;
    if (mod == 0) {
        //	frmMain["lbl"+curFrom].centerX = 280;
        frmMain["lbl" + curFrom].centerX = (w * 0.75) + (w * 0.25 / 2);
    } else {
        //	frmMain["lbl"+curFrom].centerX = (mod*80)-40;
        frmMain["lbl" + curFrom].centerX = (mod * w * 0.25) - (w * 0.25 / 2);
    }
    if (mod == 0) {
        //	frmMain["lbl"+curFrom].centerY = (div*80)-40;
        frmMain["lbl" + curFrom].centerY = (div * h * 0.25) - (h * 0.25 / 2);
    } else {
        //	frmMain["lbl"+curFrom].centerY = (div*80)+40;
        frmMain["lbl" + curFrom].centerY = (div * h * 0.25) + (h * 0.25 / 2);
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