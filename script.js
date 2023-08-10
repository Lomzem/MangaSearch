document.getElementById("inputBox").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        mangaSearch();
    }
});

function mangaSearch() {
    const inputElement = document.getElementById("inputBox");
    var inputBox = inputElement.value.trim();
    const aot = "https://allmanga.to/read/Cib2WLnvrN46JD9As/shingeki-no-kyojin/chapter-";
    const tgr = "https://allmanga.to/read/TAehkr5q98ZHZous2/tokyo-ghoul-re/chapter-";
    const jjk = "https://allmanga.to/read/jMiizAXy49bQ4vpYi/jujutsu-kaisen/chapter-";
    const csm = "https://allmanga.to/read/boMxbrZ8AB8H7qMvv/chainsaw-man/chapter-";
    
    splitInput = inputBox.split(" ");

    if (splitInput[0] == "tgr") {
        window.location.href = tgr + splitInput[1] + "-sub";
    }

    else if (splitInput[0] == "jjk") {
        window.location.href = jjk + splitInput[1] + "-sub";
    }

    else if (splitInput[0] == "csm") {
        window.location.href = csm + splitInput[1] + "-sub";
    }

    else if (splitInput[0] == "aot") {
        window.location.href = aot + splitInput[1] + "-sub";;
    }

    else {
        inputElement.focus();
        inputElement.select();
    }
}
