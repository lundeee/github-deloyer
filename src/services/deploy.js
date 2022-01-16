const config = require('../../config.js')
const { spawn } = require('child_process')
const fs = require('fs')

async function GetLogs() {
  return "github-deployer is running."
}

async function Deploy(body) {
  console.log("___ __________________________")
  console.log(JSON.stringify(body))
  console.log("_____________________________")
  console.log(`Updating ${body.repository.name} to commit: ${body.head_commit.message}`)
  const proj = config.projects.find(x => { return x.name === body.repository.name })
  if (proj) {
    let script =  proj.script
    if (!script.startsWith("/") && !script.startsWith(".")) script = "./scripts/" + script
    if (fs.existsSync(script)) {
      const child = spawn(script);
      child.on('exit', function (code, signal) {
        if(code === 0) {
          console.log(`Success! Updating finished with code ${code} and signal ${signal}`)
        } else {
          console.log('child process exited with ' +
          `code ${code} and signal ${signal}`);
        }
      });
    } else {
      console.log("Script was not found!")
    }
  }
}

module.exports.GetLogs = GetLogs;
module.exports.Deploy = Deploy;
