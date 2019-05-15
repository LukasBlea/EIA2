var L06_SendData;
(function (L06_SendData) {
    window.addEventListener("load", asynchronerButton);
    let address = "http://localhost:8100";
    function asynchronerButton(_event) {
        let asynchronButton = document.getElementById("button");
        asynchronButton.addEventListener("click", asynchronerAblauf);
    }
    function asynchronerAblauf(_event) {
        let input = document.getElementsByTagName("input");
        let vorwahl = "?";
        for (let i = 0; i < input.length; i++) {
            if (input[i].value != "" && input[i].value != "0") {
                vorwahl = vorwahl + input[i].name + " = " + input[i].value + "&";
            }
            switch (input[i].value) {
                case ("Selbstabholung"):
                    if (input[i].checked == true) {
                        vorwahl = vorwahl + input[i].name + " = " + input[i].value + "&";
                    }
                    break;
                case ("DHL"):
                    if (input[i].checked == true) {
                        vorwahl = vorwahl + input[i].name + " = " + input[i].value + "&";
                    }
                    break;
            }
        }
        sendRequestWithCustomData(vorwahl);
    }
    function sendRequestWithCustomData(_vorwahl) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + _vorwahl, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("overview").innerHTML = xhr.response;
        }
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=SendData.js.map