const fs = require("fs")

fs.copyFileSync("text.txt", "text2.txt")
console.log("text.txt was copied to text2.txt")