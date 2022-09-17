let clicks = 0
let timeout = 5000


let $button = document.querySelector("#button")
let $display = document.querySelector("#display")
let $counter = document.querySelector("#counter")
$button.onclick = start
    function start(){
        let startTime = Date.now()
        $display.textContent = timeout
       $button.onclick = () => $counter.textContent = clicks++
   let interval = setInterval(() => {
    let delta = Date.now() - startTime
   $display.textContent = forTime(timeout - delta)
}, 100)
        setTimeout(() =>    {
            $button.onclick = null
            $display.textContent = "Game over"
            clearInterval(interval)
            clearTimeout(timeout)
        }, timeout)
    }

    function forTime(ms){
        return Number.parseFloat(ms / 1000).toFixed(2)
    }