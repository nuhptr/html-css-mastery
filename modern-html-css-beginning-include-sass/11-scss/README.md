```sh
1. npm init -y
2. install node-sass (npm install --save-dev node-sass)
3. install nodemon (npm install --save-dev nodemon)
4. add some code to script in package.json
- "build-sass": "node-sass --include-path scss scss/main.scss dist/css/main.css",
- "watch-sass": "nodemon -e scss -x \"npm run build-sass\""
```
