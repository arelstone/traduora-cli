import {expect, test} from '@oclif/test'

describe('authenticate', () => {
  test
  .stdout()
  .command(['authenticate'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['authenticate', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
