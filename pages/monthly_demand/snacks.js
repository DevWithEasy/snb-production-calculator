import axios from "axios";
import { useEffect, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import PmView from "../../components/PmView";
import PrintHeader from "../../components/PrintHeader";
import RmView from "../../components/RmView";
import TargetCarton from "../../components/TargetCarton";
import useUserStore from "../../features/userStore";
import baseUrl from "../../utils/baseUrl";
import { getDemand, getTotalInnerMaster, getTotalPmItem } from "../../utils/demand_utils";
import Head from "next/head";



export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/api/products/Snacks`)
    return{
        props:{
            products : res.data.data || []
        }
    }
}


export default function SnacksDemand({ products }) {
    const{demand,resetDemand} = useUserStore()
    const printRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle : ""
    });

    const {rm,pm}=getDemand(demand)
    const {
        Special_Chanachur_15_gm,
        Special_Chanachur_120_gm,
        Special_Chanachur_180_gm,
        Jhal_Chanachur_15_gm,
        Jhal_Chanachur_120_gm,
        BBQ,
        Fried_Peas,
        Fried_Dal
    } = pm

    useEffect(()=>{
        resetDemand()
    },[resetDemand])

    
    return (
        <div ref={printRef} className="mt-2 p-2 mx-4 space-y-2 border shadow-lg rounded-md print:shadow-none print:border-none print:rounded-none">
        <Head>
            <title>Snacks Demand</title>
            <link rel="icon" href="/logo.png" />
        </Head>
        <PrintHeader/>
        <div className="print:hidden space-y-2 border border-gray-400">
            <h1 className="relative py-2 bg-gray-500 text-white text-xl text-center">
                Production Target Carton
                <button onClick={()=>handlePrint()} className="absolute right-2 print:hidden"> 
                    Print
                </button>
            </h1>
            <TargetCarton {...{products}}/>
        </div>
        <div className="flex justify-between space-x-2">
            <div className="w-1/2 border border-gray-400 pb-4">
                <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Raw Materials (Kg)</h3>
                <RmView name='Turmeric' ingredient={rm?.turmeric}/>

                  <RmView name='Cinamon' ingredient={rm?.cinamon}/>

                  <RmView name='Testing Salt' ingredient={rm?.testingSalt}/>

                  <RmView name='Red Chili' ingredient={rm?.redChili}/>

                  <RmView name='Nut Mug' ingredient={rm?.nutMug}/>

                  <RmView name='Cumin' ingredient={rm?.cumin}/>

                  <RmView name='Black Pepper' ingredient={rm?.blackPepper}/>

                  <RmView name='Clove' ingredient={rm?.clove}/>

                  <RmView name='Cardamon' ingredient={rm?.cardamon}/>

                  <RmView name='Cumin Sweet' ingredient={rm?.cuminSweet}/>

                  <RmView name='Bit Salt' ingredient={rm?.bitSalt}/>
                  
                  <RmView name='Ginger' ingredient={rm?.ginger}/>

                  <RmView name='Rice Flask' ingredient={rm?.riceFlask}/>

                  <RmView name='Sodium Bi Carbonate' ingredient={rm?.sodiumBiCarbonate}/>

                  <RmView name='Raw Peanut' ingredient={rm?.rawPeanut}/>

                  <RmView name='Lentil' ingredient={rm?.lentil}/>

                  <RmView name='Salt' ingredient={rm?.salt}/>

                  <RmView name='Palm Oil Super' ingredient={rm?.palmOilSuper}/>

                  <RmView name='Anchor Dal' ingredient={rm?.anchorDal}/>

                  <RmView name='Pea' ingredient={rm?.pea}/>

                  <RmView name='Skim Milk Powder' ingredient={rm?.skimMilkPowder}/>

                  <RmView name='Sugar' ingredient={rm?.sugar}/>

                  <RmView name='Citric Acid Ano' ingredient={rm?.citricAcidAno}/>

                  <RmView name='Mug Dal' ingredient={rm?.mugDal}/>

                  <RmView name='Apple Green Colour' ingredient={rm?.appleGreenColour}/>

                  <RmView name='Tapioca Starch' ingredient={rm?.tapiocaStarch}/>

                  <RmView name='Onion Powder' ingredient={rm?.onionPowder}/>

                  <RmView name='Garlic Powder' ingredient={rm?.garlicPowder}/>

                  <RmView name='Jwain Masala' ingredient={rm?.jwainMasala}/>

                  <RmView name='Rice Atop' ingredient={rm?.riceAtop}/>

                  <RmView name='Lemon Yellow Colour' ingredient={rm?.lemonYellowColour}/>

                  <RmView name='TBHQ' ingredient={rm?.tbhq}/>

                  <RmView name='BBQ' ingredient={rm?.bbq}/>
                
            </div>
            <div className="w-1/2 border border-gray-400">
                <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Packaging Materials</h3>
                <PmView name='Special Chanachur 15gm Wrapper' unit='' pm={Special_Chanachur_15_gm?.wrapper}/>
                <PmView name='Special Chanachur 90gm Wrapper' unit='' pm={Special_Chanachur_120_gm?.wrapper}/>
                <PmView name='Special Chanachur 180gm Wrapper' unit='' pm={Special_Chanachur_180_gm?.wrapper}/>
                <PmView name='Jhal Chanachur 15gm Wrapper' unit='' pm={Jhal_Chanachur_15_gm?.wrapper}/>
                <PmView name='Jhal Chanachur 90gm Wrapper' unit='' pm={Jhal_Chanachur_120_gm?.wrapper}/>
                <PmView name='Fried Peas Wrapper' unit='' pm={Fried_Peas?.wrapper}/>
                <PmView name='Inner Poly 18"x15"' unit='' pm={getTotalInnerMaster(pm,'inner',15)}/>
                <PmView name='Master Poly 25"x47"' unit='' pm={getTotalInnerMaster(pm,'master',15)}/>
                <PmView name='Inner Poly 17"x19.5"' unit='' pm={getTotalInnerMaster(pm,'inner',90)}/>
                <PmView name='Inner Poly 16"x21.5"' unit='' pm={getTotalInnerMaster(pm,'inner',180)}/>
                <PmView name='Master Poly 35"x26"' unit='' pm={getTotalInnerMaster(pm,'master',90)}/>
                <PmView name='Fried Dal Wrapper' unit='' pm={Fried_Dal?.wrapper}/>
                <PmView name='Inner Poly 15"x24"' unit='' pm={Fried_Dal?.inner_poly}/>
                <PmView name='Master Poly 23"x44"' unit='' pm={Fried_Dal?.master_poly}/>
                <PmView name='Bar-BQ Chanachur Wrapper' unit='' pm={BBQ?.wrapper}/>
                <PmView name='Inner Poly 19"x20"' unit='' pm={BBQ?.inner_poly}/>
                <PmView name='Master Poly 28"x42"' unit='' pm={BBQ?.master_poly}/>
                <PmView name='Gum Tap 2"' unit='Pcs' pm={getTotalPmItem(pm,'gumTap2')}/>
            </div>
        </div>

    </div>
        )
}