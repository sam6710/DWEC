window.onload = () => {
    document.onmousedown = arrastrar;
    document.onmouseup = pararArrastre;
};

function arrastrar(e){
    if(e.target){
      objective = e.target;
    }
    else{
      objective = e.srcElement;
    }
  
    offsetX = e.clientX;
    offsetY = e.clientY;
  
    if(!objective.style.left){
      objective.style.left = "0px";
    }
    
    if(!objective.style.top){
      objective.style.top = "0px";
    }
  
    Xcord = parseInt(objective.style.left);
    Ycord = parseInt(objective.style.top);
    arrastre = true;
  
    document.onmousemove = arrastrarImg;
    return false;
}

function pararArrastre(){
    arrastre = false;
}
  
function arrastrarImg(e){
    if(!arrastre){
        return false;
    }
    objective.style.left = Xcord + e.clientX - offsetX + "px";
    objective.style.top = Ycord + e.clientY - offsetY + "px";
    return false;
}