import { Router } from 'express';


import { akustycznelist } from '../repo/akustyczne'

const router = Router();
router.post('/ogrodzenia/akustyczne', async function (req, res, next) {

    await res.status(200).json(await akustycznelist())

})


export default router