<!DOCTYPE html>
<html>
    <head>
        <title>Apa Gadgets | Store</title>
        <meta name="description" content="This is the description">
        <link rel="stylesheet" href="styles.css" />
        <script src="store.js" async></script>
    </head>
    <body>
        <header class="main-header">
            <nav class="main-nav nav">
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="store.html">STORE</a></li>

                </ul>
            </nav>
<marquee behavior="scroll" direction="down" scrollamount="4">
            <h1 class="band-name band-name-large">Apa Gadgets</h1>
</marquee>
        </header>
        <section class="container content-section">
            <h2 class="section-header">GADGETS</h2>
            <div class="shop-items">
                <div class="shop-item">
                    <span class="shop-item-title">Brand: HP Laptop</span>
                    <img class="shop-item-image" src="Images/lp1.jpg">
                    <div class="shop-item-details">
                        <span class="shop-item-price">$230</span>
                        <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                    </div>
                </div>
                <div class="shop-item">
                    <span class="shop-item-title">Acer Laptop</span>
                    <img class="shop-item-image" src="Images/lp2.jpg">
                    <div class="shop-item-details">
                        <span class="shop-item-price">$270</span>
                        <button class="btn btn-primary shop-item-button"type="button">ADD TO CART</button>
                    </div>
                </div>
                <div class="shop-item">
                    <span class="shop-item-title">Cherry Mobile Aqua s10 pro</span>
                    <img class="shop-item-image" src="Images/cp1.jpg">
                    <div class="shop-item-details">
                        <span class="shop-item-price">$150</span>
                        <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                    </div>
                </div>
                <div class="shop-item">
                    <span class="shop-item-title">CloudFone Thrill 430x</span>
                    <img class="shop-item-image" src="Images/cp2.webp">
                    <div class="shop-item-details">
                        <span class="shop-item-price">$140</span>
                        <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="container content-section">
            <h2 class="section-header">CART</h2>
            <div class="cart-row">
                <span class="cart-item cart-header cart-column">ITEM</span>
                <span class="cart-price cart-header cart-column">PRICE</span>
                <span class="cart-quantity cart-header cart-column">QUANTITY</span>
            </div>
            <div class="cart-items">
            </div>
            <div class="cart-total">
                <strong class="cart-total-title">Total</strong>
                <span class="cart-total-price">$0</span>
            </div>
            <center><a href="payment.html" style="vertical-align: middle;padding: .67em .67em;cursor: pointer;color: white;background-color: #56CCF2;border: none;border-radius: .3em;font-weight: bold;margin: 40px auto 80px auto;font-size: 1.50em;">PURCHASE</a> 
        </section>
        <footer class="main-footer">
            <div class="container main-footer-container">
                <h3 class="band-name">The Generics</h3>
                <ul class="nav footer-nav">
                    <li>
                        <a href="https://www.youtube.com" target="_blank">
                            <img src="Images/Youtube Logo.png">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.spotify.com" target="_blank">
                            <img src="Images/Spotify Logo.png">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com" target="_blank">
                            <img src="Images/Facebook Logo.png">
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    </body>
</html>
