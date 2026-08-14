import fs from 'fs'
import path from 'path'

const src = path.resolve('src/types/global.d.ts')
const destDir = path.resolve('dist/types')
const dest = path.join(destDir, 'global.d.ts')

fs.mkdirSync(destDir, { recursive: true })
fs.copyFileSync(src, dest)
