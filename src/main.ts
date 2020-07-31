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

      version = "1.2.3";
    } else if (github.context.ref.startsWith("refs/tags/")) {
      core.debug("Tag");
      //version = github.context.ref.replace('refs/tags/release/', '');
      version = "1.3.4";
    }

    if (version.startsWith("v")) {
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
