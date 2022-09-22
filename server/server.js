const express = require("express");
const cors = require('cors')
const app = express();
    
require("./config/mongoose_config");
    
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyProductRoutes = require("./routes/product_routes");
AllMyProductRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));