
document.querySelectorAll('.btn-link').forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(`Navigating to: ${e.target.innerText}`);
    });
});