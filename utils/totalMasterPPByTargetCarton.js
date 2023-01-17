export default function totalMasterPPByTargetCarton(targetCarton,product){
    const totalTragetCarton =  Number((Number(targetCarton)+(Number(targetCarton)*20)/100))
    const masterPP = totalTragetCarton * product?.info?.masterPoly
    const wastage = (masterPP * .5)/100
    return ((masterPP + wastage)/1000).toFixed(2)
}