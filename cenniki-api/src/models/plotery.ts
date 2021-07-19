export interface ploterRow {
    [index: number]: {
    id: number,
    model: string,
    stacja_nowa:number,
    stacja_regenerowana:number,
    pasek:number,
    karetka: number,
    encoder: number,
    trailing_cable: number,
    glowica: number
    }
}

export interface naprawaRow {
    [index: number]: {
    id: number,
    model: string,
    kalibracja:number,
    czyszczenie:number,
    wymianapasek:number,
    wymianastacji: number,
    wymianatrailing:number,
    wymianaencoder:number
    }
}
export interface dodatkoweRow {
    [index: number]: {
    id: number,
    model: string,
    nazwa:string,
    cena: number
}
}