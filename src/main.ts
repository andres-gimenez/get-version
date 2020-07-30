import core, {setFailed} from '@actions/core'
import github from '@actions/github'

async function run(): Promise<void> {
  try {
    let version: string = github.context.ref.replace('refs/tags/release/', '')

    if (version.startsWith('v')) {
      version = version.substr(1)
    }

    core.setOutput('version', version)
  } catch (error) {
    setFailed(error.message)
  }
}

run()
