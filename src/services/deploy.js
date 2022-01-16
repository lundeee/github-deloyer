const config = require('../../config.js')
const { spawn } = require('child_process')
const fs = require('fs')

async function GetLogs() {
  const { spawn } = require('child_process');
  if (fs.existsSync(script)) {
    const child = spawn('../../scripts/test.sh');
    child.on('exit', function (code, signal) {
      if(code === 0) {
        console.log("success")
      } else {
        console.log('child process exited with ' +
        `code ${code} and signal ${signal}`);
      }

    });
    child.stdout.on('data', (data) => {
      console.log(`child stdout:\n${data}`);
    });

    child.stderr.on('data', (data) => {
      console.error(`child stderr:\n${data}`);
    });
  }
}

async function Deploy(body) {
  console.log(`Updating ${body.repository.name} to commit: ${body.head_commit.message}`)
  const proj = config.projects.find(x => { return x.name === body.repository.name })
  if (proj) {
    const script =  proj.script
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
