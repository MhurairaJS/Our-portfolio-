
// // Call function to test
// showAnimatedAlert("WELCOME");
function showAnimatedAlert(message) {
    let alertBox = document.createElement("div");
    alertBox.innerText = message;

    // Apply basic styles
    Object.assign(alertBox.style, {
        position: "fixed",
        top: "-100px",
        left: "50%",
        transform: "translateX(-50%) scale(0.8)",
        background: "hsl(147.09deg 92.79% 43.53%)",
        color: "white",
        padding: "15px 25px",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "bold",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        opacity: "0",
        transition: "top 0.5s ease-out, opacity 0.5s ease-out, transform 0.3s ease-out",
        zIndex: "1000"
    });

    document.body.appendChild(alertBox);

    // Bounce-in Effect
    setTimeout(() => {
        alertBox.style.top = "20px";
        alertBox.style.opacity = "1";
        alertBox.style.transform = "translateX(-50%) scale(1.1)";
    }, 100);

    // Shake Effect after appearing
    setTimeout(() => {
        alertBox.style.transform = "translateX(-48%) scale(1)";
        setTimeout(() => {
            alertBox.style.transform = "translateX(-52%) scale(1)";
            setTimeout(() => {
                alertBox.style.transform = "translateX(-50%) scale(1)";
            }, 100);
        }, 100);
    }, 600);

    // Fade-out and remove alert after 3 seconds
    setTimeout(() => {
        alertBox.style.top = "-100px";
        alertBox.style.opacity = "0";
        setTimeout(() => alertBox.remove(), 500);
    }, 3000);
}
showAnimatedAlert("WELCOME TO OUR WEBSITE ");



function toggleSearch() {
    var searchBar = document.getElementById("searchBar");
    if (searchBar.style.display === "block") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "block";
        searchBar.focus(); // Automatically focus on the search bar
    }
}

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );


  