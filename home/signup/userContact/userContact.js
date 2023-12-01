

const checkCustom = () => {
    const dropDown = document.getElementById('questions');
    const customQuestion = document.querySelector('.custom-question');

    if ( dropDown.value === 'custom') {
        customQuestion.style.display = 'inline-block';
    } else {
        customQuestion.style.display = 'none';
    };
}