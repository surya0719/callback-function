let newElement=document.createElement("div");
newElement.innerText="THE CALLBACK FUNCTION";
newElement.style.fontSize="70px";
newElement.style.backgroundColor="yellow";
newElement.style.textAlign="center";

let call=document.createElement("h1");
call.style.fontSize="50px"
setTimeout(()=>{
    call.innerHTML="10"
    setTimeout(()=>{
        call.innerhtml="9"
        setTimeout(()=>{
            call.innerHTML="8"
            setTimeout(()=>{
                call.innerHTML="7"
                setTimeout(()=>{
                    call.innerHTML="6"
                    setTimeout(()=>{
                        call.innerHTML="5"
                        setInterval(()=>{
                            call.innerHTML="4"
                            setTimeout(()=>{
                                call.innerHTML="3"
                                setTimeout(()=>{
                                    call.innerHTML="2"
                                    setTimeout(()=>{
                                        call.innerHTML="1"
                                        setTimeout(()=>{
                                            call.innerHTML="0"
                                            setTimeout(()=>{
                                                call.innerHTML="HAPPY INDEPENDENCE DAY";
                                                call.style.fontSize="100px";
                                                call.style.fontStyle="italic";
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
newElement.appendChild(call);
document.body.append(newElement);