const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Redirect root to login page
app.get('/', (req, res) => {
    res.redirect('/login.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 