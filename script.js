function mangaSearch() {
    const inputElement = document.getElementById("inputBox");
    var inputBox = inputElement.value.trim();
    const aot = "https://mangareader.to/read/attack-on-titan-36/en/chapter-";
    const tgr = "https://mangareader.to/read/tokyo-ghoulre-361/en/chapter-";
    const jjk = "https://mangareader.to/read/jujutsu-kaisen-167/en/chapter-";
    const csm = "https://mangareader.to/read/chainsaw-man-95/en/chapter-";
    
    splitInput = inputBox.split(" ");

    if (splitInput[1] == "tgr") {
        window.location.href = tgr + splitInput[2];
    }

    else if (splitInput[1] == "jjk") {
        window.location.href = jjk + splitInput[2];
    }

    else if (splitInput[1] == "csm") {
        window.location.href = csm + splitInput[2];
    }

    else if (splitInput[1] == "aot") {
        window.location.href = aot + splitInput[2];
    }

    else {
        inputElement.focus();
        inputElement.select();
    }
}

document.getElementById('inputBox').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        mangaSearch();
    }
});
