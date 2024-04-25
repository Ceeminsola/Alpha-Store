
const express = require("express")
const db = require("./routes/db-config")
const app = express();
const cookie = require("cookie-parser")
const PORT = process.env.PORT || 5003;
app.use("/js", express.static(__dirname + "./public/js"))
app.use("/css", express.static(__dirname + "./public/css"))
app.set("views", "./views");
app.use(cookie());
app.use(express.json());

//connect to the database
db.connect((err) => {
    if (err) throw err;
    console.log("database connected")
})

// Endpoint to fetch items from the database
app.get("/get_Categories", (req,res) => {
    const sql = "SELECT * From category";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching items:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.json(data);
    })
 })
//app.use("/", require("./routes/pages"))

// Sign in endpoint
app.post("/signIn", (req, res) => {
    // Assuming you have a users table with columns username and password
    const { username, password } = req.body;
    const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
    db.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error("Error executing SQL:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        if (results.length > 0) {
            // User found, set a cookie or session token to indicate the user is signed in
            res.cookie("loggedIn", true);
            return res.json({ message: "Sign in successful" });
        } else {
            return res.status(401).json({ error: "Invalid username or password" });
        }
    });
});

// Sign out endpoint
app.get("/signOut", (req, res) => {
    // Clear the cookie or session token to sign the user out
    res.clearCookie("loggedIn");
    return res.json({ message: "Sign out successful" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});