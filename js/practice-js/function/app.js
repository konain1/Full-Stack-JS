function fun() {

    console.log("this is fun first console")

    function inner() {
        var c = 10
        console.log("this is inner console")
        console.log(c)
    }
    inner();
}
fun();