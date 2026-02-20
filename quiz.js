const buttons = document.querySelectorAll(".option");
const contents = document.querySelectorAll(".content");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // 1️⃣ Turn OFF all buttons
        console.log("button clicked");
        buttons.forEach(b => b.classList.remove("active"));

        // 2️⃣ Hide all content
        contents.forEach(c => c.classList.remove("active"));

        // 3️⃣ Turn ON clicked button
        button.classList.add("active");

        // 4️⃣ Show corresponding content
        const target = button.dataset.target;
        document.getElementById(target).classList.add("active");
    });
});
