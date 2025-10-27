
        function agecal() {
             var a = parseInt(document.getElementById("a").value);
             var b = parseInt(document.getElementById("b").value);
            if (a == b) {
                document.getElementById("vote").innerHTML = a+" " + b + " Equal";
            }
            else if (b < a) {
                document.getElementById("vote").innerHTML = a+" value greater than " + b + " value";
            }
            else if (a < b) {
                document.getElementById("vote").innerHTML = b+" value greater than " + a + " value";
            }
            else {
                document.getElementById("vote").innerHTML = a+" " + b + " wrong enter";
            }
        }