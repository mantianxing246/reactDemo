function getCookie(type) {
    var cookie=document.cookie.split(";");
    for(var i=0;i<cookie.length;i++){
        if(cookie[i].split("=")[0].trim()===type){
            var a=cookie[i].split("=")[1]
            break;
        }
    }
    if(i>=cookie.length){
        var use=[]
    }else{
        var use=JSON.parse(a);
    }
    return use
}
export default getCookie;