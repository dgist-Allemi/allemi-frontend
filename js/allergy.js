// script.js
document.addEventListener('DOMContentLoaded', () => {
    const submitTagsButton = document.getElementById('submit-tags');
    const categoryButtons = document.querySelectorAll('.category-btn');

    let selectedTags = new Set(); // Set to store the selected categories

    // Event listener for category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            if (selectedTags.has(category)) {
                // 이미 선택된 경우: Set에서 제거하고, 버튼의 스타일을 원래대로 변경
                selectedTags.delete(category);
                button.classList.remove('selected');
            } else {
                // 선택되지 않은 경우: Set에 추가하고, 버튼의 스타일을 진하게 변경
                selectedTags.add(category);
                button.classList.add('selected');
            }
        });
    });

    // Submit selected tags
    submitTagsButton.addEventListener('click', () => {
        if (selectedTags.size > 0) {
            // Send selected tags to the server
            const tagsArray = Array.from(selectedTags); // Convert Set to Array
            fetch('/submit-tags', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tags: tagsArray }),
            })
            .then(response => response.json())
            .then(data => {
                alert('Tags successfully submitted!');
                console.log(data);
                // Redirect to home
                window.location.href = '/home'; // Replace '/home' with your actual home page URL
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else {
            alert('Please select at least one category.');
        }
    });
});
