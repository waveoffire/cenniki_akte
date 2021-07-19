import { Router } from 'express';


import { everwoodlist } from '../repo/everwood'

const router = Router();
router.post('/ogrodzenia/everwood', async function (req, res, next) {

    await res.status(200).json(await everwoodlist())

})


export default router