module.exports = {
    onPreBuild: async ({ utils, packageJson }) => {
    console.log("my plugin loaded!")
        //import modules and define some terms
        try {
        //get sanity data
        //then output as md files in our content folder
        } catch (error) {
            utils.build.failBuild('Failure message', { error })
          }
        },
    }
