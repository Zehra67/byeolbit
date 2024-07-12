<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">

    <link rel="icon" type="image/png" href="logo.png">
</head>
<body>
<header>
        <div class="logo">
            <img src="logo.png" alt="Korean Delight Skincare">
        </div>
        <nav>
            <ul class="menu">
                <li class="hover-underline-animation"><a href="/Byeolbit2024/index.php">HOME</a></li>
                <li class="hover-underline-animation"><a href="Products/products.html">PRODUCTS</a></li>
                <li class="hover-underline-animation"><a href="#">ABOUT</a></li>
                <li class="hover-underline-animation"><a href="#">CONTACT US</a></li>
            </ul>
        </nav>
        <div class="actions">
          
            <a class="user-icon" href="/Byeolbit2024/Byeolbit/login.php"> <img src="user.png"></a>
            <a class="user-icon" href="#"> <img src="shopping-bag.png"></a>
            <select id="language-selector" onchange="changeLanguage()" image src="world.png">
                <option value="en">EN</option>
                <option value="de">DE</option>
                <!-- Add more languages as needed -->
            </select>
        </div>
        <div class="menu-toggle">
            <span>Home</span>
            <span>About</span>
            <span>Products</span>
            <span></span>
            <span>
                <img src="user.png" class="user-icon"><a href="#"></a>
        </span>
        <span>
            <img src="shopping-bag.png" class="cart-icon"><a href="#"></a></span>
            <span>
            <select id="language-selector" onchange="changeLanguage()">
                <option value="en">EN</option>
                <option value="de">DE</option>
                <!-- Add more languages as needed -->
            </select>
        </div>
    </span>
    </span>

        </div>
    </header>
       
    
    
       
    <div class="container">
        <div class="left-section">
            <img src="logo3.png" alt="Cosmetic products illustration">
        </div>
        <div class="right-section" data-translate="login">
            <form action="/Byeolbit2024/index.php" method="post">
                <h2>Login</h2>
                <label for="email">Email*</label>
                <input type="email" id="email" name="email" required>
                
                <label for="password">Password*</label>
                <input type="password" id="password" name="password" required>
                
                <div class="terms">
                    <input type="checkbox" id="terms" name="terms" required>
                    <label for="terms">Accept our Terms and Conditions</label>
                </div>
                
                <button type="submit">Login</button>
                <button type="button" onclick="loginWithGoogle()">Login with Google</button>
            </form>
            <p>Don’t have an account? <a href="signup.html">Sign Up</a></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
