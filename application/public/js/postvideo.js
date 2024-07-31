function subAllow(){
    if(titleAllow === true && descriptionAllow === true && videoAllow === true && tosAllow === true){
        document.getElementById('accept-check').removeAttribute('disabled');
        }
        if(titleAllow === false || descriptionAllow === false || videoAllow === false || tosAllow === false){
            document.getElementById('accept-check').setAttribute("disabled","disabled")
        }
}

var titleAllow;
document.getElementById("title").addEventListener("input", function(ev){
    let titleInput = ev.currentTarget;
    let title = titleInput.value;
    if(title.length === 0 || title === null){
        titleAllow = false;
        document.getElementById("titleEmpty").style.display = "inline";
        let titleNone = "There must be a title"
        document.getElementById("titleEmpty").innerHTML = titleNone;
    }
    else{
        document.getElementById("titleEmpty").style.display = "none";
        titleAllow = true;
    }
    subAllow();
});

var descriptionAllow;
document.getElementById("description").addEventListener("input", function(ev){
    let descriptionInput = ev.currentTarget;
    let description = descriptionInput.value;
    if(description.length === 0 || description === null){
        descriptionAllow = false;
        document.getElementById("descriptionEmpty").style.display = "inline";
        let descriptionNone = "There must be a description"
        document.getElementById("descriptionEmpty").innerHTML = descriptionNone;
    }
    else{
        document.getElementById("descriptionEmpty").style.display = "none";
        descriptionAllow = true;
    }
    subAllow();
});

var videoAllow;
document.getElementById("video-file").addEventListener("input", function(ev){
    let videoInput = ev.currentTarget;
    if(videoInput.files.length == 0){
        videoAllow = false;
        document.getElementById("videoEmpty").style.display = "inline";
        let videoNone = "You must add a video";
        document.getElementById("videoEmpty").innerHTML = videoNone;
    }
    else{
        document.getElementById("videoEmpty").style.display = "none";
        videoAllow = true;
    }
    subAllow();
});

var tosAllow
document.getElementById("tos").onclick = function(ev){
    tosAllow =true;
    subAllow();
}