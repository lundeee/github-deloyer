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
  console.log("----------------------------------------------------------------")
  console.log(body);
  console.log("----------------------------------------------------------------")
  // console.log(config);
  // console.log("ASFXXXc");
  const child = spawn('scripts/update-self.sh');
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

module.exports.GetLogs = GetLogs;
module.exports.Deploy = Deploy
