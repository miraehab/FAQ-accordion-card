document.getElementById('right').addEventListener('click', (e)=> {
    if(e.target.classList.contains('rotate')&&e.target.classList.contains('img')){
        e.target.style.cssText="width:12px;height: 10px; float: right;margin-right: inherit;padding-left: inherit;"
        e.target.classList.remove('rotate');
        e.target.classList.add('check1');
        console.log("1");
    }
    else if (e.target.classList.contains('bold')&&e.target.classList.contains('q')){
        e.target.style.cssText='font-weight: normal;'
        e.target.classList.remove('bold');
        e.target.classList.add('check2');
        console.log("2");
    }
   else if(e.target.classList.contains('q')){
        e.target.setAttribute('style','font-weight: bold;')
        e.target.classList.add('bold')
        console.log("3");
    }
    else if (e.target.classList.contains('img')){
        e.target.style.cssText="width:12px;height: 10px; float: right;margin-right: inherit;padding-left: inherit;transform:rotate(180deg);"
        e.target.classList.add('rotate');
        console.log("4");
    }
    
    
    for(i=1;i<=5;i++){
            
        if(e.target.classList.contains(`img${i}`)&&e.target.classList.contains('bold')){
            document.querySelector(`.q${i}`).style.cssText='font-weight: normal;';
            document.querySelector(`.q${i}`).classList.remove('bold')
            e.target.classList.remove('bold')
            e.target.classList.remove('check1')
            console.log("5");
        }
        else if(e.target.classList.contains(`q${i}`)&&e.target.classList.contains('rotate')){
            document.querySelector(`.img${i}`).style.cssText="width:12px;height: 10px; float: right;margin-right: inherit;padding-left: inherit;"
            document.querySelector(`.img${i}`).classList.remove('rotate');
            e.target.classList.remove('rotate');
            e.target.classList.remove('check2');
            console.log("6");
        }
        else if(e.target.classList.contains(`img${i}`)&&e.target.classList.contains('check1')){
            document.querySelector(`.q${i}`).style.cssText='font-weight: normal;';
            document.querySelector(`.q${i}`).classList.remove('bold');
            document.querySelector(`.q${i}`).classList.remove('rotate');
            document.querySelector(`.img${i}`).style.cssText="width:12px;height: 10px; float: right;margin-right: inherit;padding-left: inherit;"
            document.querySelector(`.img${i}`).classList.remove('rotate');
            e.target.classList.remove('check1');
            console.log("7");
        }
        else if(e.target.classList.contains(`q${i}`)&&e.target.classList.contains('check2')){
            document.querySelector(`.img${i}`).style.cssText="width:12px;height: 10px; float: right;margin-right: inherit;padding-left: inherit;"
            document.querySelector(`.img${i}`).classList.remove('bold');
            document.querySelector(`.img${i}`).classList.remove('rotate');
            e.target.classList.remove('check2');
            console.log("8")
        }
        else if(e.target.classList.contains(`img${i}`)){
            document.querySelector(`.q${i}`).style.cssText='font-weight: bold;';
            document.querySelector(`.q${i}`).classList.add('bold');
            document.querySelector(`.img${i}`).classList.add('bold');
            console.log("9");
        }
        else if (e.target.classList.contains(`q${i}`)){
            document.querySelector(`.img${i}`).style.cssText="width:12px;height: 10px; float: right;margin-right: inherit;padding-left: inherit;transform:rotate(180deg);";
            document.querySelector(`.img${i}`).classList.add('rotate');
            document.querySelector(`.q${i}`).classList.add('rotate');
            console.log("10");
        }
            
    }
    
})
