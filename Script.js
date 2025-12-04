let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

document.getElementById("next").onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

document.getElementById("prev").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
};

showSlide(index);



// SHOW QUIZ WHEN BUTTON CLICKED
document.getElementById('startQuizBtn').addEventListener('click', function() {
    document.getElementById('quizSection').style.display = 'block';
    this.style.display = 'none'; // hide start button after clicked
});

// QUIZ CHECK FUNCTION
function checkQuiz() {
    const quiz = document.getElementById('geneQuiz');
    const totalQuestions = 5;
    let score = 0;

    for (let i = 1; i <= totalQuestions; i++) {
        const options = quiz['q' + i];
        for (let opt of options) {
            if (opt.checked && opt.value === 'correct') {
                score++;
            }
        }
    }

    document.getElementById('quizResult').innerText = 
        `You scored ${score} out of ${totalQuestions}`;
}

<script>
    const contactForm = document.getElementById('contactForm');
    const formResult = document.getElementById('formResult');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent page reload

        // Simple validation
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!firstName || !lastName || !email || !phone || !message) {
            formResult.innerText = "Please fill in all fields!";
            formResult.style.color = "red";
            return;
        }

        // If all fields are filled, show success message
        formResult.innerText = "Thank you! Your message has been sent.";
        formResult.style.color = "#7dd3fc";

        // Reset form after 1 second
        setTimeout(() => {
            contactForm.reset();
            formResult.innerText = '';
        }, 1000);
    });
</script>

