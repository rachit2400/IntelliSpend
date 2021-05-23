var text = document.querySelector('#text');
var nameText = document.querySelector('#name');

var projButton = document.querySelector('#img1');
projButton.addEventListener('click', function() {
    // Fade out
    text.style.opacity = 0;
    nameText.style.opacity = 0;
  
    // Wait for the transition 
    setTimeout(function(){ 
        // Load new content
        text.innerHTML = 'Perfect app. My husband and I use it to track all our expenses and income. We generate our household accounts and budget using this fab app. Furthermore, the developers are hands-on and extremely helpful. Do not look any further. Get this app now!.';
        nameText.innerHTML = 'John Doe';
        // Fade in
        text.style.opacity = 1;
        nameText.style.opacity = 1;
    },1000);
});

var projButton = document.querySelector('#img2');
projButton.addEventListener('click', function() {
    // Fade out
    text.style.opacity = 0;
    nameText.style.opacity = 0;
    
    // Wait for the transition 
    setTimeout(function(){ 
        // Load new content
        text.innerHTML = 'This will keep you organized and in control, of money you do have and money you will have. This application is easy to use and will help you keep track of every dollar.';
        nameText.innerHTML = 'Meena Bazar';
        // Fade in
        text.style.opacity = 1;
        nameText.style.opacity = 1;
    },1000);
});

var projButton = document.querySelector('#img3');
projButton.addEventListener('click', function() {
    // Fade out
    text.style.opacity = 0;
    nameText.style.opacity = 0;
  
    // Wait for the transition 
    setTimeout(function(){ 
        // Load new content
        text.innerHTML = ' A simple, accessible app that allows you to budget across weeks, months and years. The neat financial calendar lets you set up alerts and keep tabs on all transactions. Plus, it works with all currencies.';
        nameText.innerHTML = 'Independent Person';
        // Fade in
        text.style.opacity = 1;
        nameText.style.opacity = 1;
    },1000);
});
