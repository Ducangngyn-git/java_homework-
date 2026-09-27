function upDate(previewPic) {
  let mainDisplay = document.getElementById("image-container");
  mainDisplay.innerHTML = previewPic.alt;
  mainDisplay.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  let mainDisplay = document.getElementById("image-container");
  mainDisplay.innerHTML =
    "Di chuột qua hoặc dùng phím Tab vào ảnh bên dưới để xem chi tiết bộ truyện.";
  mainDisplay.style.backgroundImage = "url('')";
}

function setTabFocus() {
  console.log("Sự kiện onload đã kích hoạt: Đang khởi tạo thư viện ảnh...");
  console.log("Bắt đầu tự động thêm thuộc tính tabindex...");

  let images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }

  console.log(
    "Hoàn thành: Đã gán tabindex cho " + images.length + " hình ảnh.",
  );
}

window.onload = setTabFocus;
