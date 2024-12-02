// Lấy các phần tử
const vocabForm = document.getElementById('vocab-form');
const wordInput = document.getElementById('word');
const meaningInput = document.getElementById('meaning');
const flashcardsContainer = document.querySelector('.flashcards');

// Mảng lưu trữ các từ vựng
let vocabList = [];

// Hàm để tạo flashcard từ từ vựng
function createFlashcard(word, meaning, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="front">
            <h3>${word}</h3>
        </div>
        <div class="back">
            <p>${meaning}</p>
            <button class="delete-btn">Xóa</button>
        </div>
    `;

    // Lắng nghe sự kiện xóa flashcard
    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        // Xóa từ vựng khỏi mảng
        vocabList.splice(index, 1);
        // Cập nhật lại giao diện
        displayFlashcards();
    });

    return card;
}

// Xử lý sự kiện khi người dùng thêm từ vựng
vocabForm.addEventListener('submit', function (e) {
    e.preventDefault();  // Ngừng gửi form để tránh làm mới trang

    // Lấy giá trị từ input
    const word = wordInput.value;
    const meaning = meaningInput.value;

    // Thêm từ vào danh sách
    vocabList.push({ word, meaning });

    // Hiển thị flashcards
    displayFlashcards();

    // Reset form
    wordInput.value = '';
    meaningInput.value = '';
});

// Hàm hiển thị các flashcards
function displayFlashcards() {
    // Xóa tất cả các flashcards hiện tại
    flashcardsContainer.innerHTML = '';

    // Tạo flashcards mới từ danh sách từ vựng
    vocabList.forEach((item, index) => {
        const flashcard = createFlashcard(item.word, item.meaning, index);
        flashcardsContainer.appendChild(flashcard);
    });
}

