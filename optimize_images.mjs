import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'
import { exit } from 'node:process'

const USAGE_MSG = `Usage:\n
Print default values:
  node optimize_images.js defaults

Run optimizer:
  node optimize_images.js <src directory> <output directory> [--clean] [--resize] [--verbose]`

// program arguments
if (process.argv.length === 2) {
  console.log(USAGE_MSG)
  exit()
}
if (process.argv.length < 4) {
  console.error('Not enough arguments!\n\n' + USAGE_MSG)
  exit()
}

let SRC_DIR = process.argv[2]
if (!SRC_DIR.endsWith('/')) SRC_DIR += '/'
let OUT_DIR = process.argv[3]
if (!OUT_DIR.endsWith('/')) OUT_DIR += '/'

if (!fs.existsSync(SRC_DIR)) {
  console.error('Nonexistent source directory: ' + SRC_DIR)
  process.exit()
}
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR)
}

const CLEAN = process.argv.slice(2).indexOf('--clean') + 1
const RESIZE = process.argv.slice(2).indexOf('--resize') + 1
const VERBOSE = process.argv.slice(2).indexOf('--verbose') + 1

// quality of webp compression
const WEBP_QUALITY = 95

// percentage OVER the target resolution required to trigger a resize of the image
const RESIZE_MARGIN = 0

// target (width) resolutions for images
const RESOLUTIONS = [
  200,
  800,
]


// remove previous .webp files to ensure everything is clean & up-to-date
if (CLEAN) {
  console.log('Removing old .webp images from', OUT_DIR)
  fs.readdirSync(OUT_DIR, { withFileTypes: true })
    .forEach(file => {
      const FULL_PATH = `${OUT_DIR}${file.name}`

      // if this is a directory, remove it (and its contents)
      if (!file.isFile()) {
        if (VERBOSE) console.log('Removing folder:', FULL_PATH)
        fs.rmSync(FULL_PATH, { recursive: true, force: true })
      }

      // if this is a file, remove it iff it is webp
      else if (file.name.search(/\.(webp|gif)$/i) + 1) {
        if (VERBOSE) console.log('Removing file:', FULL_PATH)
        fs.rmSync(FULL_PATH)
      }
    })
}


// perform conversion & scaling
console.log('Compressing images from', SRC_DIR)
readFilesRecursively(SRC_DIR)
  .filter(({name}) => name.search(/\.(jpe?g|png|gif)$/i) + 1)
  .forEach(file => {
    const OUT_NAME = file.name.replace(/\.\w+/, '')
    const DIR_PATH = path.relative(SRC_DIR, path.dirname(file.path)).replace('\\', '/')
    const OUT_PATH = `${OUT_DIR}${DIR_PATH}/${OUT_NAME}`

    // ensure path exists
    if (!fs.existsSync(`${OUT_DIR}${DIR_PATH}`))
      fs.mkdirSync(`${OUT_DIR}${DIR_PATH}`)

    // convert image
    const IMG = sharp(file.path)
    IMG
      .metadata()
      .then(({format, width}) => {

        // just convert base image to webp
        if (format === 'gif') {
          fs.copyFile(file.path, OUT_PATH + '.gif', (e) => {
            if (e) console.error(e)
            else if (VERBOSE) console.log('Copied GIF to:', OUT_PATH + '.gif')
          })
        }

        // scale down large images
        else if (RESIZE) {
          let i = RESOLUTIONS.length - 1
          if (width <= RESOLUTIONS.at(-1) * (1 + RESIZE_MARGIN)) {
            IMG
              .webp({ quality: WEBP_QUALITY })
              .toFile(`${OUT_PATH}-${RESOLUTIONS.at(-1)}.webp`)
              .then(() => { if (VERBOSE) console.log('Created file:', `${OUT_PATH}-${RESOLUTIONS.at(-1)}.webp`) })
              .catch(e => console.error(e))
          }
          for (; i >= 0; i--) {
            if (width > RESOLUTIONS[i] * (1 + RESIZE_MARGIN)) {
              IMG
                .resize(RESOLUTIONS[i])
                .webp({ quality: WEBP_QUALITY })
                .toFile(`${OUT_PATH}-${RESOLUTIONS[i]}.webp`)
                .then(() => { if (VERBOSE) console.log('Created file:', `${OUT_PATH}-${RESOLUTIONS[i]}.webp`) })
                .catch(e => console.error(e))
            }
          }
        }

        // just convert base image to webp
        else if (format !== 'gif') {
          IMG
            .resize(width) // OG width
            .webp({ quality: WEBP_QUALITY })
            .toFile(OUT_PATH + '.webp')
            .then(() => { if (VERBOSE) console.log('Created file:', OUT_PATH + '.webp') })
            .catch(e => console.error(e))
        }
      })
  })

// recursively return all file names within a directory
function readFilesRecursively(dir) {
  let files = []
  fs.readdirSync(dir, { withFileTypes: true })
    .forEach(f => {
      const FULL_PATH = `${dir}/${f.name}`
      if (f.isFile())
        files.push({
          name: f.name,
          path: FULL_PATH
        })
      else
        readFilesRecursively(FULL_PATH).forEach(fp => files.push(fp))
    })
  return files
}