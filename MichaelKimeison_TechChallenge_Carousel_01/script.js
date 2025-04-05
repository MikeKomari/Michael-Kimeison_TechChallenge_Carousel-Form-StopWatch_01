const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const caption = document.querySelector(".imageCaptionP");

const imageCaption = [
  "Benz Couper",
  "Ferrari 458",
  "Gold Couper",
  "Lamborghini Aventador",
];

let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");

  caption.textContent = imageCaption[currentIndex];
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    currentIndex = parseInt(e.target.dataset.index);
    updateCarousel();
  });
});

// auto slide setiap 3 detik agar keren
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}, 3000);

//logic
//1. buat carousel container dan append gambarnya secara flex
//2. buat overflow hidden agar dapat menampung banyak gambar tanpa terlihat overflow dari
//max widthnya
//3. buat tombol next dan prev untuk mengubah gambar yang ditampilkan (translateX 100% jadi gambarnya gerak berdasasrkan widthnya)
//4. buat dot untuk menandakan gambar yang ditampilkan
//5. buat caption untuk menampilkan nama gambar yang ditampilkan
//6. buat event listener untuk tombol next, prev, dan dot
//7. buat interval untuk auto slide setiap 3 detik (optional)
