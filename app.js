(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.getElementById("refreshButton").addEventListener("click", function() {
    // Xóa nội dung trong body
    document.body.innerHTML = "";

    // Tạo một thẻ div mới để giữ nguyên các thuộc tính khác
    var newDiv = document.createElement("div");
    newDiv.className = "content";

    // Tạo một h1 và một đoạn p mới
    var newH1 = document.createElement("h1");
    newH1.textContent = "Welcome to My Website";

    var newP = document.createElement("p");
    newP.textContent = "This is some content on the page.";

    // Thêm h1 và p vào div mới
    newDiv.appendChild(newH1);
    newDiv.appendChild(newP);

    // Thêm div mới vào body
    document.body.appendChild(newDiv);
});
