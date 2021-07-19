import { Router } from 'express';


import { exclusivelist2 } from '../repo/exclusive'

const router = Router();
router.post('/ogrodzenia/exclusive', async function (req, res, next) {

    await res.status(200).json(await exclusivelist2())

})


export default router