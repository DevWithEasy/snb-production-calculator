export default function totalFoilByTargetCarton(targetCarton,product){
    const totalTragetCarton =  Number((Number(targetCarton)+(Number(targetCarton)*20)/100))
    const foil = totalTragetCarton * product?.info?.foilWeight * product?.info?.packetPerCarton
    const wastage = (foil * 2)/100
    return ((foil + wastage)/1000).toFixed(2)
}