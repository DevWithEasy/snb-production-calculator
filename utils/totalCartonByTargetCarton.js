export default function totalFoilByTargetCarton(targetCarton){
    const totalTragetCarton =  Number((Number(targetCarton)+(Number(targetCarton)*20)/100))
    const wastage = (totalTragetCarton * 2)/100
    return (totalTragetCarton + wastage).toFixed(0)
}