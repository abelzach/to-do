$(document).ready(() => {
    chrome.storage.local.get(["name"], (data) => {
        //changename only if name is there.. becos we hv to input it otherwise
        if (data.name)
            changeName(data.name);
    })

    $("#name input").keypress((event) => {
        //13 means enter
        if (event.which == 13) {
            const name = event.currentTarget.value;
            changeName(name);
            console.log(name)
            chrome.storage.local.set({ name: name })
        }
    })
    function changeName(name) {
        $("#name div.control").remove();
        $("#name").append(`<h1 class="title">Welcome ${name}!</h1>`);
    }
})