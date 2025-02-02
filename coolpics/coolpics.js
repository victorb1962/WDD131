document.addEventListener("DOMContentLoaded", function () {
    // Get the menu elements
    const menuButton = document.getElementById("menuButton");
    const menuItems = document.querySelector("nav ul");

    if (menuButton && menuItems) {
        // Initialize aria-expanded attribute
        menuButton.setAttribute("aria-expanded", "false");

        // Toggle menu visibility on click
        menuButton.addEventListener("click", function () {
            const isShown = menuItems.classList.toggle("show");
            menuButton.setAttribute("aria-expanded", isShown.toString()); // Corrected toggle logic
            console.log("Menu toggled!");
        });

        // Enable keyboard accessibility
        menuButton.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                menuButton.click();
            }
        });
    } else {
        console.warn("Menu button or menu items not found.");
    }

    // Image Viewer Logic
    const gallerySection = document.querySelector(".gallery");

    function viewHandler(event) {
        const clickedElement = event.target;

        // Ensure an image was clicked
        if (clickedElement.tagName === "IMG") {
            const newImageSrc = clickedElement.src.replace("-sm.jpeg", "-full.jpeg");

            const template = viewerTemplate(newImageSrc, clickedElement.alt);
            document.body.insertAdjacentHTML("beforeend", template); // Use "beforeend" instead of "afterbegin"

            const viewer = document.querySelector(".viewer");
            if (viewer) {
                viewer.classList.remove("hide");
                viewer.style.opacity = "1";

                // Attach event listener for close button
                const closeButton = viewer.querySelector(".close-viewer");
                closeButton.addEventListener("click", closeViewer);
            }
        }
    }

    function closeViewer() {
        const viewer = document.querySelector(".viewer");
        if (viewer) {
            viewer.style.opacity = "0";
            setTimeout(() => viewer.remove(), 300); // Remove element after fade out
        }
    }

    function viewerTemplate(pic, alt) {
        return `<div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${pic}" alt="${alt}">
        </div>`;
    }

    if (gallerySection) {
        gallerySection.addEventListener("click", viewHandler);
    } else {
        console.warn("Gallery section not found.");
    }
});