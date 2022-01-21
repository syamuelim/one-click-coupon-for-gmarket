const processEl = document.getElementById("process-el")
const idBtn = document.getElementById("id-btn")
const couponBtn = document.getElementById("coupon-btn")


idBtn.addEventListener("click", function() {
    console.log("id setted")
    for (let i = 0; i < document.getElementsByClassName("btn_download").length; i++) {
        document.getElementsByClassName("btn_download")[i].id = "id" + i
    }
    navigator.clipboard.writeText(`for (let i = 0; i < document.getElementsByClassName("btn_download").length; i++) {
        document.getElementsByClassName("btn_download")[i].id = "id" + i
    }`);
})

couponBtn.addEventListener("click", function() {
    console.log("start")
    for (let i = 0; i < document.getElementsByClassName("btn_download").length; i++) {
        let clicker = document.getElementById(document.getElementsByClassName("btn_download")[i].id)
        let timesRun = 0
        let int = setInterval(function() {
            clicker.click()
            timesRun += 1
            if(timesRun == 5) {
                clearInterval(int)
            }
            let timePassed = new Date().getTime()
            while(new Date().getTime() - timePassed < 1000) {
                continue
            }
        },1)
        
        processEl.innerHTML = `done ${document.getElementsByClassName("btn_download")[i].id}`
    }
    navigator.clipboard.writeText(`
    for (let i = 0; i < document.getElementsByClassName("btn_download").length; i++) {
        let clicker = document.getElementById(document.getElementsByClassName("btn_download")[i].id)
        let timesRun = 0
        let int = setInterval(function() {
            clicker.click()
            timesRun += 1
            if(timesRun == 5) {
                clearInterval(int)
            }
            let timePassed = new Date().getTime()
            while(new Date().getTime() - timePassed < 1000) {
                continue
            }
        },1)
        
    
    }`)
})