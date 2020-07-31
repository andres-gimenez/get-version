import * as core from "@actions/core";
import * as github from "@actions/github";

async function run(): Promise<void> {
  try {
    //refs/heads/release
    let version = "";

    if (github.context.ref.startsWith("refs/heads")) {
      core.debug("Headers");
      //const refs = github.context.ref.split('/');
      //version = github.context.ref.replace('refs/tags/release/', '');
      const branchName = github.context.ref.split("/").pop();
      const runNumber = github.context.runNumber;
      core.debug(`branchName: ${branchName}`);
      core.debug(`runNumber: ${runNumber}`);

      version = `${branchName}.${runNumber}`;
    } else if (github.context.ref.startsWith("refs/tags/")) {
      core.debug("Tag");
      const tagName = github.context.ref.split("/").pop();
      core.debug(`tagName: ${tagName}`);

      version = `${tagName}`;
    }

    if (version.toLocaleUpperCase().startsWith("V")) {
      version = version.substr(1);
    }

    core.debug(`Version: ${version}`);
    core.setOutput("version", version);
    core.info(`Version: ${version}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
