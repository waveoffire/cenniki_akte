import { Router } from 'express';


import { czescilist, naprawalist, dodatkowelsit } from '../repo/plotery'

const router = Router();
router.post('/plotery/czescilist', async function (req, res, next) {

    await res.status(200).json(await czescilist())

})
router.post('/plotery/naprawalist', async function (req, res, next) {
    await res.status(200).json(await naprawalist())

})
router.post('/plotery/dodatkowelist', async function (req, res, next) {
    await res.status(200).json(await dodatkowelsit())

})

export default router