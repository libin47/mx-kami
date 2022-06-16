const { load } = require('js-yaml')
const fs = require('fs')
const path = require('path')
const cwd = process.cwd()

const yamlFilename = 'config.init.yaml'

const yamlContent = fs.readFileSync(path.join(cwd, yamlFilename), 'utf8')
const config = load(yamlContent)

const writeFilePath = path.join(cwd, 'src/configs.default.ts')

fs.writeFileSync(
  writeFilePath,
  require('prettier').format(
    `// sync with config.init.yaml
export const defaultConfigs = ${JSON.stringify(
      require('api-client').camelcaseKeys(config, { deep: true }),
      null,
      2,
    )}
`,
    require('../.prettierrc.js'),
  ),
)
