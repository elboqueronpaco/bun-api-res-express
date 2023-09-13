import { Router } from "express";
import { readdirSync } from 'node:fs'
import { port } from '../config/index'
const router = Router()
const PATH_ROUTER = `${__dirname}`
function cleanFileName(fileName:string) {
    return fileName.split('.').shift()
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName)
    if (cleanName !== 'index') {
        console.log(cleanName)
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router)
        })
        console.log(`http://localhost:${port}/api/v1/${cleanName}`)
    }
})

export { router}