document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const skillLevel = bar.getAttribute('data-skill');
        bar.style.width = skillLevel;
    });
});