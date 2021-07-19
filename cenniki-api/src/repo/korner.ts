const db = require("../repo/db")
const crypto = require('crypto');
//const apiSecret = 'uqylaMsjmKdTbVW1yyUqKWSCRGGfEE3MCmfRCyfVRWHKeXR56TtpDLSPgQmPtAfl';
//X-MBX-APIKEY': 'PbuPNy6G1dcZHBkVg1vZfoMynrasEV6eblgNEQh1HDXZe6tOV2S7OiSJ0ROLDa4r',
import { kornerRow } from "../models/korner"


export async function kornerlist(): Promise<kornerRow> {


    let sql = `Select f.id, f.wymiary, f.nettoPrzed,f.nettoPo, f.idWzoru,ogrodzeniaKornerWzory.nazwa,ogrodzeniaKornerWzory.rysunek  from ogrodzeniaKornerWymiary f LEFT JOIN ogrodzeniaKornerWzory ON f.idWzoru=ogrodzeniaKornerWzory.id`;
    let korner = await db.execute(sql).then((result: any) => {
        return result[0]

    }).catch((err: any) => { console.log(err) })
    console.log(korner)
    return await korner


}
