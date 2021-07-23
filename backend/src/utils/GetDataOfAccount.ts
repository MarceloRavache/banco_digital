import { getNumberUniqueRandom } from "./GetNumberUniqueRandom"

export const getDataOfAccount = () => {
    return ({
        agencia: 1,
        conta: parseInt(getNumberUniqueRandom(8))
    })
}