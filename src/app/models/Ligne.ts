import { Box } from "./Box"

export class LignePanier {
    public quantite: number
    uneBox: Box
    constructor(quantite: number, uneBox: Box) {
        this.quantite = quantite
        this.uneBox = uneBox
    }
}