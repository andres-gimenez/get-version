import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    //refs/heads/release
    core.debug('1')
    let version: string = github.context.ref.replace('refs/tags/release/', '')
    core.debug('2')

    if (version.startsWith('v')) {
      version = version.substr(1)
    }
    core.debug('3')
    core.debug('Version: ${version}')
    core.debug('4')
    core.setOutput('version', version)
    core.setOutput('p1', 'v1')
    core.debug('5')
  } catch (error) {
    core.debug('6')
    core.setFailed(error.message)
    core.debug('7')
  }
}

run()
