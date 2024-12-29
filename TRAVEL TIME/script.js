document.getElementById('exploreButton').addEventListener('click', function() {
    // Open a new tab
    const newTab = window.open('', '_blank');

    // Create the content for the new tab
    newTab.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Island Options</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    text-align: center;
                    padding: 20px;
                }
                h1 {
                    color: #333;
                }
                .island-container {
                    display: flex; 
                    justify-content: center; 
                    flex-wrap: wrap;
                }
                .island {
                    margin: 20px; 
                    text-align: center; 
                }    
                img {
                    width: 190px; 
                    height: auto; 
                }    
                .scroll-message {
                    position: fixed;
                    bottom: 10px;
                    width: 100%;
                    background-color: #fff;
                    padding: 10px;
                    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
                }
            </style>
        </head>
        <body>
            <h1>Island Options</h1>
            <div class="island-container">
                <div class="island">
                    <img src="https://images.wallpapersden.com/image/download/bora-bora-island-resort_bGhuZ2aUmZqaraWkpJRnamtlrWZpaWU.jpg" alt="Bora Bora">
                    <p><a href="https://en.wikipedia.org/wiki/Bora_Bora" target="_blank">Bora Bora</a></p>
                </div>
                <div class="island">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.h03OjFORv341YOo6Bl8B9gHaEK&pid=Api&P=0&h=180" alt="Maui">
                    <p><a href="https://en.wikipedia.org/wiki/Maui" target="_blank">Maui</a></p>
                </div>
                <div class="island">
                    <img src="https://wallpapercave.com/wp/wp4483177.jpg" alt="Maldives">
                    <p><a href="https://en.wikipedia.org/wiki/Maldives" target="_blank">Maldives</a></p>
                </div>
                <div class="island">
                    <img src="https://media.cntraveler.com/photos/59e4c7bf06aef90bf9358742/16:9/w_2560%2Cc_limit/Pool-NamaleResort&Spa-Fiji-CRHotel.jpg" alt="Fiji">
                    <p><a href="https://en.wikipedia.org/wiki/Fiji" target="_blank">Fiji</a></p>
                </div>
                <div class="island">
                    <img src="https://wpcdn.us-east-1.vip.tn-cloud.net/www.hawaiimagazine.com/content/uploads/2022/04/g/r/kaanapali-beach-scaled.jpg" alt="Hawaii">
                    <p><a href="https://en.wikipedia.org/wiki/Hawaii" target="_blank">Hawaii</a></p>
                </div>
            </div>
            <!-- Back Button -->
            <button class="back-button" onclick="window.close();">Back</button>

            <div class="scroll-message">Thank you! Visit again!</div>
        </body>
        </html>
    `);

    // Close the document for rendering
    newTab.document.close();
});