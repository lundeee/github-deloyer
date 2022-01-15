const config = require('../../config.js')
const { spawn } = require('child_process')

async function GetLogs() {
  const { spawn } = require('child_process');
  const child = spawn('scripts/test.sh');
  child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
                `code ${code} and signal ${signal}`);
  });
  child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`child stderr:\n${data}`);
  });
}

async function Deploy(body) {
  console.log("---------------- -------------------------------------------------")
  console.log(JSON.stringify(body));
  console.log("-------------- ---------------------------------------------------")
  console.log(`Updating ${body.repository.name} to commit: ${body.head_commit.message}`)
  const proj = config.projects.find(x => {x.name === body.repository.name})
  console.log(proj, config.projects)
  spawn("scripts/update_self.sh");
  // if (proj) {
  //   // console.log(`Updating ${body.repository.name} to commit: ${body.commits.message}`)
  //   const child = spawn("./scripts/" + proj.script);
  //   child.on('exit', function (code, signal) {
  //       console.log(`Updating finished with code ${code} and signal ${signal}`)
  //   });
  // }
}

module.exports.GetLogs = GetLogs;
module.exports.Deploy = Deploy
