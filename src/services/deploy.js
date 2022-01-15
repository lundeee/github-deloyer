const config = require('../../config.js')

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
  console.log(body);
  console.log(config);
  console.log("ASFDD");
}

module.exports.GetLogs = GetLogs;
module.exports.Deploy = Deploy
