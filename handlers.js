var remote = require("electron").remote;
var prompt = require("electron-prompt");

handleCloseOperation = (event) => {
    let window = remote.getCurrentWindow();
    window.close();
}

handleMinimizeOperation = (event) => {
    let window = remote.getCurrentWindow();
    window.minimize();
}

handleSetVideoOperation = (event) => {
    let window = remote.getCurrentWindow();
    prompt({
        title: 'Prompt example',
        label: 'URL:',
        value: videoURL,
        inputAttrs: {
            type: 'url'
        }
    }, window)
    .then((r) => {
        if(r === null) {
            console.log('user cancelled');
        } else {
            console.log('result', r);
            // https://www.youtube.com/embed/69edOm889V4 = sample URL
            // https://www.youtube.com/watch?v=xcpSLRpOMJM = sample pasting URL
            r = r.replace("watch?v=", "embed/");
            let videoIframe = document.getElementById("video-iframe");
            videoIframe.src = r;
        }
    })
    .catch(console.error);
}

document.getElementById("close-button").addEventListener("click", handleCloseOperation);
document.getElementById("minimize-button").addEventListener("click", handleMinimizeOperation);
document.getElementById("set-video-button").addEventListener("click", handleSetVideoOperation);