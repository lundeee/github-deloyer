const config = require('../../config.js')
const { spawn } = require('child_process')
const fs = require('fs')
const { projects } = require('../../config.js')

async function GetLogs() {
  return "github-deployer is running."
}

async function Deploy(body) {
  console.log(`Updating ${body.repository.name} to commit: ${body.head_commit.message}`)
  if (body.repository) {
    const proj = config.projects.find(x => { return x.name === body.repository.name })
    if (proj) {
      let branch = ""
      if (projects.branch) {
        branch = proj.branch
      }
      if (!script.startsWith("/") && !script.startsWith(".")) script = "./scripts/" + script
      if (body.repository.ref.includes(branch)) {
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
  }
}

module.exports.GetLogs = GetLogs;
module.exports.Deploy = Deploy;
