var url = "https://jsonplaceholder.typicode.com/albums/2/photos";

async function fetchWithString(){
    try {
        var response = await fetch(url);
        var data = await response.json();
        var htmlString = data.reduce(function(prev, color){
            return(prev + `<div class="color-card">
            <img class="color-image" src="${color.thumbnailUrl}">
            <p class="color-title">${color.title}</p>
          </div>`);
        }, "");
        document.getElementById('color-list').innerHTML = htmlString;

        var counted = document.getElementById('color-list');
        var number = counted.getElementsByTagName('div').length;
        document.getElementById('color-number').innerHTML = '50';

        
        let cards = document.getElementsByClassName('color-card');
        
        [...cards].forEach(function(ele){
        ele.addEventListener('click',function(ev){
                var focus = ele;
                var effect = setInterval(function(){
                    if(!focus.style.opacity){
                        focus.style.opacity = 1;
                    }
                    if(focus.style.opacity>0){
                        focus.style.opacity -= 0.5;
                    }
                    else{
                        clearInterval(effect);
                    }
                }, 100)
            })
            ele.addEventListener('click',function(ev){
                var now = ev.currentTarget;
                setInterval(function(){setTimeout(now.remove(),400)},400);
            })
            ele.addEventListener('click',function(ev){
                var counted = document.getElementById('color-list');
                var number = counted.getElementsByTagName('div').length;
                document.getElementById('color-number').innerHTML = number-1;
            })

        })
    } catch (error) {
        console.log(error)
    }
}
fetchWithString();