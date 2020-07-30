import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(): Promise<void> {
  try {
    let version: string = github.context.ref.replace('refs/tags/release/', '')

    if (version.startsWith('v')) {
      version = version.substr(1)
    }

    core.setOutput('version', version)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
