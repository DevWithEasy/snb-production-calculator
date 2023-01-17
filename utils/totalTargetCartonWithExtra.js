export default function totalTargetCartonWithExtra(targetCarton){
    return Number((Number(targetCarton)+(Number(targetCarton)*20)/100))
}