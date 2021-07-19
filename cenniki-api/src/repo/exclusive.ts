const db = require("../repo/db")
const crypto = require('crypto');
//const apiSecret = 'uqylaMsjmKdTbVW1yyUqKWSCRGGfEE3MCmfRCyfVRWHKeXR56TtpDLSPgQmPtAfl';
//X-MBX-APIKEY': 'PbuPNy6G1dcZHBkVg1vZfoMynrasEV6eblgNEQh1HDXZe6tOV2S7OiSJ0ROLDa4r',
import { exclusiveRow2 } from "../models/exclusive"
export async function exclusivelist2(): Promise<exclusiveRow2> {
    let data = [];
    let sql = `SELECT * FROM ogrodzeniaExclusiveWzory`
    let exclusive = await db.execute(sql).then((result: any) => {
        return result[0]

    }).catch((err: any) => { console.log(err) })

    for (var i = 0; i < exclusive.length; i++) {
        let sql = `SELECT * FROM ogrodzeniaExclusiveWymiary where idWzoru=${exclusive[i].id}`
        let wzory = await db.execute(sql).then((result: any) => {
            return result[0]

        }).catch((err: any) => { console.log(err) })

        let row = {
            id: await exclusive[i].id,
            nazwa: await exclusive[i].nazwa,
            obrazek: await exclusive[i].rysunek,
            wzory: [{}]
        }
        for (var j = 0; j < wzory.length; j++) {
            row.wzory.push({

                kod: await wzory[j].kod,
                wymiary: await wzory[j].wymiary,
                cena: await wzory[j].cena


            })
        }
        console.log(await row)
        data.push(await row)
    }
    return await data
}

