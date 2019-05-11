var L06_SendData;
(function (L06_SendData) {
    window.addEventListener("load", init);
    let address = "http://localhost:8100";
    function init(_event) {
        document.getElementById("test").addEventListener("click", buttonEvent);
    }
    function buttonEvent(_event) {
        let inputs = document.getElementsByTagName("input");
        let urlgenerieren = "?";
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value != "0" && inputs[i].value != "" && inputs[i].checked == true) {
                urlgenerieren = urlgenerieren + inputs[i].name + "=" + inputs[i].value + "&";
            }
        }
        sendRequestWithCustomData(urlgenerieren);
    }
    function sendRequestWithCustomData(_url) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + _url, true);
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