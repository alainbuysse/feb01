module.exports = {
    onPreBuild: async ({ utils, packageJson }) => {
        console.log("my plugin loaded!")
        const fs = require("fs-extra");
        const fetch = require('node-fetch');
       
        
        fs.readdir("./content", (err, files) => {
          if (err) console.log(err);
          else {
            files.forEach((file) => {
              console.log(`Deleting: ${file}`);
              fs.unlink(`content//${file}`, (err) => {
                if (err) throw err;
              });
            });
          }
    });
    
        //import modules and define some terms
        try {
            
            await fetch('https://cms.bimp.be/items/blog').then(response =>{
        console.log('response: ',response);
        return response.json(); 
    }).then((data => {
        console.log(data);
        fs.writeFile("./content/blog/blabla.md", "dummy text", function (err) {
          if (err) return console.log(err);
            console.log('file written');
          });
      
      fs.writeFile("./content/blog/text.csv", "dummy text", function (err) {
          if (err) return console.log(err);
            console.log('file written');
          });
      
    }))
            
        } 
        catch (error) {
            utils.build.failBuild('Failure message', { error })
        }
    },
}
