document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("productModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const span = document.getElementsByClassName("close")[0];

    const productDescriptions = {
        "Product 1": "Description for Product 1.",
        "Product 2": "Description for Product 2.",
        "Product 3": "Description for Product 3.",
        "Product 4": "Description for Product 4."
    };

    document.querySelectorAll('.show-button').forEach(button => {
        button.addEventListener('click', function() {
            const productBox = this.parentElement;
            const productName = productBox.getAttribute('data-product');
            
            modalTitle.textContent = productName;
            modalDescription.textContent = productDescriptions[productName];
            
            modal.style.display = "block";
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


document.getElementById('search-icon').addEventListener('click', function() {
    var searchBar = document.getElementById('search-bar');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
      searchBar.style.display = 'block';
    } else {
      searchBar.style.display = 'none';
    }
  });

  document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('register-username').value;
    var password = document.getElementById('register-password').value;
    var url = 'YOUR_WEB_APP_URL';

    fetch(url, {
        method: 'POST',
        body: new URLSearchParams({
            action: 'register',
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert('Registration successful!');
        } else {
            alert('Error: ' + data.message);
        }
    });
});
//login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    var url = 'https://script.google.com/macros/s/AKfycbwL01E1MFQ3tWLshVdaCN7n-4bRn1XZy7WfS9Z1Rz3TWYTWc2UnAuVRHATkPWxR-ys_/exec';

    fetch(url, {
        method: 'POST',
        body: new URLSearchParams({
            action: 'login',
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert('Login successful!');
        } else {
            alert('Error: ' + data.message);
        }
    });
});
//searchbar script
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('#search-input');

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchProducts(searchInput.value);
        }
    });

    function searchProducts(query) {
        if (query) {
            // Redirect to search results page
            window.location.href = `/search?query=${encodeURIComponent(query)}`;
        }
    }
});


// script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('searchIcon');
    const searchBar = document.querySelector('.search-bar');

    searchIcon.addEventListener('mouseover', () => {
        searchBar.style.width = '200px';
        searchBar.style.opacity = '1';
    });

    searchIcon.addEventListener('mouseout', () => {
        setTimeout(() => {
            if (!searchBar.matches(':hover')) {
                searchBar.style.width = '0';
                searchBar.style.opacity = '0';
            }
        }, 200);
    });

    searchBar.addEventListener('mouseout', () => {
        setTimeout(() => {
            if (!searchIcon.matches(':hover')) {
                searchBar.style.width = '0';
                searchBar.style.opacity = '0';
            }
        }, 200);
    });
});

    searchBar.addEventListener('mouseout', () => {
        setTimeout(() => {
            if (!searchIcon.matches(':hover')) {
                searchBar.style.width = '0';
                searchBar.style.opacity = '0';
            }
        }, 200);
    });







function changeLanguage() {
    const language = document.getElementById('language-selector').value;
    // Add your translation logic here
    alert('Language changed to ' + language);
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});


document.getElementById('german-tab').addEventListener('click', function() {
    switchTab('german');
});

document.getElementById('english-tab').addEventListener('click', function() {
    switchTab('english');
});

function switchTab(language) {
    document.getElementById('german-tab').classList.remove('active');
    document.getElementById('english-tab').classList.remove('active');

    if (language === 'german') {
        document.getElementById('german-tab').classList.add('active');
        // Implement German translation logic here
        console.log('Switched to German');
    } else {
        document.getElementById('english-tab').classList.add('active');
        // Implement English translation logic here
        console.log('Switched to English');
    }
}
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyArLyv7cF9jwCyOTakrz2fvvL9ITQhvpZw",
    authDomain: "upheld-magpie-427515-r5.firebaseapp.com",
    projectId: "upheld-magpie-427515-r5",
    storageBucket: "upheld-magpie-427515-r5.appspot.com",
    messagingSenderId: "1023046309507",
    appId: "1:1023046309507:web:cb96f6b3b2a782e4126db6",
    measurementId: "G-DMTE8RZMXQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

  