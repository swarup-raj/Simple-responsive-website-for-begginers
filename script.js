window.addEventListener('load', function () {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const content = document.querySelector('.content');

    setTimeout(function () {
        loaderWrapper.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // 2000 milliseconds (2 seconds) for the loading screen
});
