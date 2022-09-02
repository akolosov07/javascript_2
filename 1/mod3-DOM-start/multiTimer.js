

function my(i = 0, step = 5, tick = 1000) {
    function a() {
        if(i < step){
            i++;
            setTimeout(a, tick)
        }
    }

    a()
}

my();