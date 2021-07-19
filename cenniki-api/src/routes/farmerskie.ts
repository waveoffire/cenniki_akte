import { Router } from 'express';


import { farmerskielist } from '../repo/farmerskie'

const router = Router();
router.post('/ogrodzenia/farmerskie', async function (req, res, next) {

    await res.status(200).json(await farmerskielist())

})


export default router