// backend server running on localhost:5000, so all requests to localhost:5000 will be handled by this server

const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();
// all requests coming to here, node will service and serve the files for our built react app
app.use(
    express.static(
        path.resolve(__dirname, '../frontend/build')
    )
);

// handles GET requests to /api
app.get('/api', (req, res) => {
    res.json({message: "Hello from the server!"});
})

// handles ALL OTHER GET requests that were not handled above by serving our REACT application
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

