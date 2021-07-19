import { Router } from 'express';


import { ecowoodlist } from '../repo/ecowood'

const router = Router();
router.post('/ogrodzenia/ecowood', async function (req, res, next) {

    await res.status(200).json(await ecowoodlist())

})


export default router