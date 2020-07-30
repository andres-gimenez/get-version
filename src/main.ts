import { setFailed } from '@actions/core';
import { context } from '@actions/github';

async function run(): Promise<void> {
  try {
    let version = context.ref.replace('refs/tags/release/', '')
  
    if (version.startsWith('v')) {
      version = version.substr(1)
    }
  } catch (error) {
    setFailed(error.message);
  }
}

run()
