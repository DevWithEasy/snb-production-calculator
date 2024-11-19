import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';
import { LoginChecked, MonthlyDemandMonth, PmView, PrintHeader, RmView, TargetCarton } from "../../../components/v1/Index";
import useUserStore from "../../../features/userStore";
import { getProducts } from "../../../utils/v1/api_utils";
import Demand from "../../../utils/v1/demand";

export default function SnacksDemand() {
    const [products, setProducts] = useState([])
    const { user, demand, resetDemand } = useUserStore()
    const printRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: ""
    });

    const result = new Demand(demand)
    const { rm, pm } = result.getDemand(demand)
    const {
        Special_Chanachur_15_gm,
        Special_Chanachur_120_gm,
        Special_Chanachur_180_gm,
        Jhal_Chanachur_15_gm,
        Jhal_Chanachur_120_gm,
        Jhal_Chanachur_180_gm,
        BBQ,
        Fried_Peas,
        Fried_Dal
    } = pm

    useEffect(() => {
        getProducts('Snacks', setProducts)
    }, [])

    useEffect(() => {
        resetDemand()
    }, [resetDemand])

    return (
        <div ref={printRef} className="mt-2 p-2 mx-4 print:mx-10 space-y-2 border rounded-md print:shadow-none print:border-none print:rounded-none">
            <Head>
                <title>Snacks Demand</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <PrintHeader />
            <TargetCarton {...{ products, handlePrint }} />
            <MonthlyDemandMonth section='Snacks' />
            <div className="flex flex-col space-y-2 print:flex-row md:flex-row md:justify-between md:space-x-2 print:space-y-0 md:space-y-0">
                <div className="w-full md:w-1/2 border border-gray-400 pb-4">
                    <h3 className="py-0.5 bg-gray-500 text-white text-center">Raw Materials (Kg)</h3>
                    <RmView name='Turmeric' ingredient={rm?.turmeric} />

                    <RmView name='Cinamon' ingredient={rm?.cinamon} />

                    <RmView name='Testing Salt' ingredient={rm?.testingSalt} />

                    <RmView name='Red Chili' ingredient={rm?.redChili} />

                    <RmView name='Nut Mug' ingredient={rm?.nutMug} />

                    <RmView name='Cumin' ingredient={rm?.cumin} />

                    <RmView name='Black Pepper' ingredient={rm?.blackPepper} />

                    <RmView name='Clove' ingredient={rm?.clove} />

                    <RmView name='Cardamon' ingredient={rm?.cardamon} />

                    <RmView name='Cumin Sweet' ingredient={rm?.cuminSweet} />

                    <RmView name='Bit Salt' ingredient={rm?.bitSalt} />

                    <RmView name='Ginger' ingredient={rm?.ginger} />

                    <RmView name='Rice Flask' ingredient={rm?.riceFlask} />

                    <RmView name='Sodium Bi Carbonate' ingredient={rm?.sodiumBiCarbonate} />

                    <RmView name='Raw Peanut' ingredient={rm?.rawPeanut} />

                    <RmView name='Lentil' ingredient={rm?.lentil} />

                    <RmView name='Salt' ingredient={rm?.saltSuper} />

                    <RmView name='Palm Oil Super' ingredient={rm?.palmOilSuper} />

                    <RmView name='Anchor Dal' ingredient={rm?.anchorDal} />

                    <RmView name='Pea' ingredient={rm?.pea} />

                    <RmView name='Skim Milk Powder' ingredient={rm?.skimMilkPowder} />

                    <RmView name='Sugar' ingredient={rm?.sugar} />

                    <RmView name='Citric Acid Ano' ingredient={rm?.citricAcidAno} />

                    <RmView name='Mug Dal' ingredient={rm?.mugDal} />

                    <RmView name='Apple Green Colour' ingredient={rm?.appleGreenColour} />

                    <RmView name='Tapioca Starch' ingredient={rm?.tapiocaStarch} />

                    <RmView name='Onion Powder' ingredient={rm?.onionPowder} />

                    <RmView name='Garlic Powder' ingredient={rm?.garlicPowder} />

                    <RmView name='Jwain Masala' ingredient={rm?.jwainMasala} />

                    <RmView name='Rice Atop' ingredient={rm?.riceAtop} />

                    <RmView name='Lemon Yellow Colour' ingredient={rm?.lemonYellowColour} />

                    <RmView name='TBHQ' ingredient={rm?.tbhq} />

                    <RmView name='BBQ' ingredient={rm?.bbq} />

                </div>
                <div className="w-full md:w-1/2 border border-gray-400 pb-4">
                    <h3 className="py-0.5 bg-gray-500 text-white text-center">Packaging Materials</h3>
                    <PmView name='Special Chanachur 15gm Wrapper' unit='' pm={Special_Chanachur_15_gm?.wrapper} />
                    <PmView name='Special Chanachur 90gm Wrapper' unit='' pm={Special_Chanachur_120_gm?.wrapper} />
                    <PmView name='Special Chanachur 180gm Wrapper' unit='' pm={Special_Chanachur_180_gm?.wrapper} />
                    <PmView name='Jhal Chanachur 15gm Wrapper' unit='' pm={Jhal_Chanachur_15_gm?.wrapper} />
                    <PmView name='Jhal Chanachur 90gm Wrapper' unit='' pm={Jhal_Chanachur_120_gm?.wrapper} />
                    <PmView name='Jhal Chanachur 180gm Wrapper' unit='' pm={Jhal_Chanachur_180_gm?.wrapper} />
                    <PmView name='Fried Peas Wrapper' unit='' pm={Fried_Peas?.wrapper} />
                    <PmView name='Inner Poly 18"x15"' unit='' pm={result.getTotalInnerMaster(pm, 'inner', 15)} />
                    <PmView name='Master Poly 25"x47"' unit='' pm={result.getTotalInnerMaster(pm, 'master', 15)} />
                    <PmView name='Inner Poly 17"x19.5"' unit='' pm={result.getTotalInnerMaster(pm, 'inner', 90)} />
                    <PmView name='Inner Poly 16"x21.5"' unit='' pm={result.getTotalInnerMaster(pm, 'inner', 180)} />
                    <PmView name='Master Poly 35"x26"' unit='' pm={result.getTotalInnerMaster(pm, 'master', 90)} />
                    <PmView name='Fried Dal Wrapper' unit='' pm={Fried_Dal?.wrapper} />
                    <PmView name='Inner Poly 15"x24"' unit='' pm={Fried_Dal?.inner_poly} />
                    <PmView name='Master Poly 23"x44"' unit='' pm={Fried_Dal?.master_poly} />
                    <PmView name='Bar-BQ Chanachur Wrapper' unit='' pm={BBQ?.wrapper} />
                    <PmView name='Inner Poly 19"x20"' unit='' pm={BBQ?.inner_poly} />
                    <PmView name='Master Poly 28"x42"' unit='' pm={BBQ?.master_poly} />
                    <PmView name='Gum Tap 2"' unit='Pcs' pm={result.getTotalPmItem(pm, 'gumTap2')} />
                    <PmView name='P.P Handgloves' unit='Pcs' pm='500' />
                </div>
            </div>
            {!user.name && <LoginChecked />}
        </div>
    )
}