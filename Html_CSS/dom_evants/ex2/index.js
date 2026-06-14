const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
};

const btn = document.getElementById("button");

btn.onclick = function() {
    const input = document.getElementById("input");
    const name = input.value;
    const message = document.getElementById("user-messages");
    
    if (name in reservations) {
        
        if (reservations[name].claimed === false) {
            message.innerHTML = `Welcome, ${name}`;
        } else {
            message.innerHTML = "Hmm, someone already claimed this reservation";
        }

    } else {
        message.innerHTML = "You have no reservation";
    }
};