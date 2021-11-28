import { execa } from 'execa'

const result = await execa('./node_modules/.bin/conventional-changelog', [
  '-p', 'angular',
  '-r', 2,
], {
  stdio: 'pipe',
})

process.stdout.write(result.stdout.split('\n').slice(2).join('\n').trim()
  .replace(/\\/g, '\\\\')
  .replace(/"/g, '\\"')
  .replace(/\n/g, '\\\\n'))
