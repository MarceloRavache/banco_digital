import { getNameCard } from "./GetNameCard.utils"
import { getNumberUniqueRandom } from "./GetNumberUniqueRandom"

export const getDataOfCreditCard = (name) => {
    const dateCurrent = new Date();

    return ({
        number_card: `${getNumberUniqueRandom(4)} ${getNumberUniqueRandom(4)} ${getNumberUniqueRandom(4)} ${getNumberUniqueRandom(4)}`,
        name_card: getNameCard(name),
        month_vencimento:dateCurrent.getMonth()+1,
        year_vencimento: dateCurrent.getFullYear()+4,
        code:parseInt(getNumberUniqueRandom(3))
    })
}