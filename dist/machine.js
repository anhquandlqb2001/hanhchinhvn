const fs = require("fs")

const dir = "./xa-phuong"

fs.readdir(dir, (err, files) => {
  if (err) {
    console.log(err);
  }
  files.forEach(file => {
    console.log(`Converting ${file}.........`);
    fs.readFile(`${dir}/${file}`, function (error, buf) {
      if (error) {
        console.log(error);
      }
      const raw = buf.toString()
      let json
      try {
        json = JSON.parse(raw)
      } catch (error) {
        console.log("here", file);
      }
      let arr = []
      for (const key in json) {
        if (json.hasOwnProperty(key)) {
          const element = json[key];
          arr.push(element)
        }
      }
let stringify
      try {
         stringify = JSON.stringify(arr)
      } catch (error) {
        console.log(error);
      }

      fs.writeFile(`./xa-phuong-converted/${file}`, stringify, e => {
        if (e) {
          console.log(e);
        }
        console.log("Success");
      })
    })
  })
})
