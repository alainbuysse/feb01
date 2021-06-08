module.exports = {
    onPreBuild: async ({ utils, packageJson }) => {
    console.log("my plugin loaded!")
        const fs = require("fs-extra");
        
    //add any serializers for your portable text
    const serializers = {
      types: {
        code: (props) =>
          "```" + props.node.language + "\n" + props.node.code + "\n```",
      },
    };
        
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
        //get sanity data
        //then output as md files in our content folder
        } catch (error) {
            utils.build.failBuild('Failure message', { error })
          }
        },
    }
