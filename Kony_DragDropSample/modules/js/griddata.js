
function createLable(labelId,lableSkin,labeltext,left,top,high,wid)
{
  
  kony.print("inside createLabel fun");
  kony.print("left>>>>>"+labelId);
  kony.print(left);  
  kony.print(top);
  left = left+"%";
  top =top+"%";
  var dispTxt;
  if(isNaN(labeltext)){
	    dispTxt =labeltext;
	}else{
	    dispTxt = parseInt(labeltext).toString();
	}
  kony.print("dispTxt");
  kony.print(dispTxt);
  var basicConf = 
  		{"id": labelId,
        "top": top,
        "left": left,
        "width": wid,
        "height": high,
        "zIndex": 1,
        "isVisible": true,
        "text": dispTxt,
        "skin": lableSkin }
  var layoutConf ={contentAlignment:constants.CONTENT_ALIGN_CENTER,containerWeight:100, padding:[0,0,0,0], hExpand:true, vExpand:false};
  var pspConf ={};
  lbl1 = new kony.ui.Label(basicConf, layoutConf, pspConf)
  
  frmMain.flxCont1.add(lbl1);
  //frmGriddisplay.flxCont1.setDefaultUnit(kony.flex.PERCENTAGE)
  kony.print("completion of createLabel function"+labelId);
  //flxCont1.add(lbl1);
}

// 16 grids added to from
function addLabletoGrid(){

   var lt = 0;
   var tp =0;
   var dVal;
   var k =1;
   var high = "25%";
   var wid = "25%";
   var j =13;
   for(var i=1;i<=16;i++){
      
      if(i > 1 && i<=4 ){
          lt = lt+25;
          j++;
      }else if(i > 4 && i<=8){ 
       	lt = lt+25; 
        if(i == 5){ 
          lt =0;
          j=8; 
        }
        j++;
        tp =25; 
      }else if(i>8 && i<=12){ 
         lt = lt+25; 
        if(i == 9){ 
           lt =0;
           j =4; 
         } 
         tp =50;
         j++; 
         
      }else if(i>12 && i<=16){ 
          lt = lt+25; 
          if(i == 13){ 
            lt =0;
            j=0; 
          }
          tp =75; 
          j++;
      } 
      kony.print("lt value before calling:"); 
      kony.print(lt);
      var lableId = "lbl"+i;
      kony.print("lableId");
      kony.print(lableId);
      var skn;
      dVal = i;
      skn = "LabelSkin";
      
      kony.print("dVal");
      kony.print(dVal);
      createLable(lableId,skn,dVal,lt,tp,high,wid);
   }
}






