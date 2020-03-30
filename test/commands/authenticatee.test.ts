import {expect, test} from '@oclif/test'

describe('authenticatee', () => {
  test
  .stdout()
  .command(['authenticatee'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['authenticatee', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
