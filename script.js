
document.addEventListener("DOMContentLoaded", function() {

    // Get the single modal elements
  
    var modal = document.querySelector(".modal");
  
    var modalImage = document.querySelector(".modal-content");
  
    var captionText = document.querySelector(".caption");
  
    var closeButton = document.querySelector(".close");
  
   
  
    // Get all images
  
    var images = document.querySelectorAll("img");
  
   
  
    // Set up event listeners for each image
  
    for (let i = 0; i < images.length; i++) {
  
      images[i].style.cursor = "pointer";
  
      images[i].onclick = function() {
  
        modal.style.display = "block";
  
        modalImage.src = images[i].src;
  
        captionText.innerHTML = images[i].alt;
  
        captionText.style.color = "yellow";
  
        captionText.style.fontSize = "xx-large";
  
        captionText.style.letterSpacing = "0.3em";
  
      };
  
    }
  
   
  
    // Set up event listener for the close button
  
    closeButton.onclick = function() {
  
      modal.style.display = "none";
  
    };
  
  });
  
  const keywordToLocation = {
    'aloe': 'skin.html#aloe',
    'birch': 'coughs.html#birch',
    'blackcurrant': 'fever.html#blackcurrant',
    'camomile': 'better-sleep.html#camomile',
    'clover': 'better-sleep.html#clover',
    'dandelion': 'stomach.html#dandelion',
    'elderflower': 'fever.html#elderflower',
    'ginger': 'fever.html#ginger',
    'icelandic moss': 'coughs.html#icelandic-moss',
    'lavander': 'better-sleep.html#lavander',
    'linden flower': 'colds.html#linden-flower',
    'meadowsweet': 'colds.html#meadowsweet',
    'nettle': 'skin.html#nettle',
    'passionflower': 'better-sleep.html#bpassionflower',
    'peppermint': 'better-sleep.html#peppermint',
    'raspberry': 'colds.html#raspberry',
    'rosehip': 'colds.html#rosehip',
    'rosemary': 'focus.html#rosemary',
    'sage': 'focus.html#sage',
    'turmeric': 'focus.html#turmeric',
    'yarrow': 'coughs.html#yarrow',
    'horehound': 'coughs.html#horehound',
    'cinnamon': 'focus.html#cinnamon',
    'valerian': 'headaches.html#valerian',
    'feverfew': 'headaches.html#feverfew',
    'fireweed': 'headaches.html#fireweed',
    'veronica officialis': 'headaches.html#veronica-officialis',
    'ladys mantle': 'stomach.html#mantle',
    'cumin': 'stomach.html#cumin',
    'garlic': 'stomach.html#garlic',
    'rose': 'skin.html#rose',
    'cornflower': 'skin.html#cornflower',
    'tyme': 'fever.html#tyme',
    // Add more keywords and corresponding URLs
  };
  
  // Function to handle search
  
  function search() {
  
    const query = document.getElementById('search').value.toLowerCase();
  
    const location = keywordToLocation[query];
  
   
  
    if (location) {
  
      window.location.href = location;
  
    } else {
  
      alert('No matching section found');
  
    }
  
  }
  
  // Add event listener for search input to handle the Enter key
  
  document.getElementById('search').addEventListener('keypress', function(e) {
  
    if (e.key === 'Enter') {
  
      search();
  
    }
  
  });
  

  


