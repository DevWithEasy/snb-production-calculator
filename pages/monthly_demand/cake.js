import axios from "axios";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import MonthlyDemandMonth from "../../components/MonthlyDemandMonth";
import PmView from "../../components/PmView";
import PrintHeader from "../../components/PrintHeader";
import RmView from "../../components/RmView";
import TargetCarton from "../../components/TargetCarton";
import useUserStore from "../../features/userStore";
import baseUrl from "../../utils/baseUrl";
import Demand from "../../utils/demand";



export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/api/products/Cake`)
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

    const result = new Demand(demand)
    const {rm,pm} = result.getDemand(demand)
    const {
        Tiffin_Cake_Vanilla_Standard,
        Tiffin_Cake_Chocolate_Standard,
        Milk_Cake_11_gm_Standard,
        Milk_Cake_22_gm_Standard,
        Tiffin_Cake_Vanilla_Family,
        Tiffin_Cake_Chocolate_Family,
        Milk_Cake_11_gm_Family,
        Milk_Cake_22_gm_Family
    } = pm

    useEffect(()=>{
        resetDemand()
    },[resetDemand])

    
    return (
        <div ref={printRef} className="mt-2 p-2 mx-4 print:mx-10 space-y-2 border shadow-lg rounded-md print:shadow-none print:border-none print:rounded-none">
        <Head>
            <title>Biscuit Demand</title>
            <link rel="icon" href="/logo.png" />
        </Head>
        <PrintHeader/>
        <TargetCarton {...{products,handlePrint}}/>
        <MonthlyDemandMonth section='Cake'/>
        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-x-2 md:space-y-0">
            <div className="w-full md:w-1/2 border border-gray-400 pb-4">
                <h3 className="py-0.5 bg-gray-500 text-white text-center">Raw Materials (Kg)</h3>
                <RmView name='Vanilin Powder' ingredient={rm?.vanilinPowder}/>

                  <RmView name='Butter Oil Substitute' ingredient={rm?.butterOilSubstitute}/>

                  <RmView name='Cake Gel' ingredient={rm?.cakeGel}/>

                  <RmView name='Chocolate Brown Colour 6059' ingredient={rm?.chocolateBrownColour_6059}/>

                  <RmView name='Chocolate Flavour SYMRISE' ingredient={rm?.chocolateFlavourSYMRISE}/>

                  <RmView name='Chocolate Paste' ingredient={rm?.chocolatePaste}/>

                  <RmView name='Citric Acid Mono' ingredient={rm?.citricAcidMono}/>

                  <RmView name='Egg' ingredient={rm?.egg}/>

                  <RmView name='Flour B Grade' ingredient={rm?.flourGrade_B}/>

                  <RmView name='Flour C Grade' ingredient={rm?.flourGrade_C}/>

                  <RmView name='Glycerine' ingredient={rm?.glycerine}/>

                  <RmView name='Isopropyl Alcohol' ingredient={rm?.isopropylAlcohol}/>

                  <RmView name='Milk Flavour KING' ingredient={rm?.milkFlavourKing}/>

                  <RmView name='Paraffin Oil' ingredient={rm?.paraffinOil}/>

                  <RmView name='Potassium Sorbate' ingredient={rm?.potassiumSorbate}/>

                  <RmView name='Super Salt' ingredient={rm?.superSalt}/>

                  <RmView name='Skim Milk Powder' ingredient={rm?.skimMilkPowder}/>

                  <RmView name='Sorbitol' ingredient={rm?.sorbitol}/>

                  <RmView name='Soya Lecithine' ingredient={rm?.soyaLecithine}/>

                  <RmView name='Sugar' ingredient={rm?.sugar}/>

                  <RmView name='Palm Oil Super' ingredient={rm?.palmOilSuper}/>

                  <RmView name='TBHQ' ingredient={rm?.tbhq}/>

                  <RmView name='Vanila Flavour FORZONE' ingredient={rm?.vanilaFlavourFORZONE}/>

                  <RmView name='Xanthem Gum' ingredient={rm?.xanthemGum}/>

                  <RmView name='Sodium Acid pyro Phosphet' ingredient={rm?.sodiumAcidpyroPhosphet}/>

                  <RmView name='Sodium Bi Carbonate' ingredient={rm?.sodiumBiCarbonate}/>

                  <RmView name='Starch Powder' ingredient={rm?.starchPowder}/>
                
            </div>
            <div className="w-full md:w-1/2 border border-gray-400 pb-4">
                <h3 className="py-0.5 bg-gray-500 text-white text-center">Packaging Materials</h3>
                <PmView name='Tiffin Cake Vanilla 15gm Wrapper' unit='' pm={result.getTotalFoil(pm,'vanilla')}/>
                <PmView name='Tiffin Cake Vanilla 15gm Carton' unit='Pcs' pm={Tiffin_Cake_Vanilla_Standard?.carton}/>
                <PmView name='Tiffin Cake Vanilla Family Carton' unit='Pcs' pm={Tiffin_Cake_Vanilla_Family?.carton}/>
                <PmView name='Tiffin Cake Vanilla Family ATC' unit='Pcs' pm={Tiffin_Cake_Vanilla_Family?.atc}/>
                <PmView name='Tiffin Cake Chocolate 15gm Wrapper' unit='' pm={result.getTotalFoil(pm,'chocolate')}/>
                <PmView name='Tiffin Cake Chocolate 15gm Carton' unit='Pcs' pm={Tiffin_Cake_Chocolate_Standard?.carton}/>
                <PmView name='Tiffin Cake Chocolate Family Carton' unit='Pcs' pm={Tiffin_Cake_Chocolate_Family?.carton}/>
                <PmView name='Tiffin Cake Chocolate Family ATC' unit='Pcs' pm={Tiffin_Cake_Chocolate_Family?.atc}/>
                <PmView name='Milk Cake 15gm Wrapper' unit='' pm={result.getTotalFoil(pm,'milk11')}/>
                <PmView name='Milk Cake 15gm Carton' unit='Pcs' pm={Milk_Cake_11_gm_Standard?.carton}/>
                <PmView name='Milk Cake 15gm Family Carton' unit='Pcs' pm={Milk_Cake_11_gm_Family?.carton}/>
                <PmView name='Milk Cake 15gm Family ATC' unit='Pcs' pm={Milk_Cake_11_gm_Family?.atc}/>
                <PmView name='Milk Cake 22gm Wrapper' unit='' pm={result.getTotalFoil(pm,'milk22')}/>
                <PmView name='Milk Cake 22gm Carton' unit='Pcs' pm={Milk_Cake_22_gm_Standard?.carton}/>
                <PmView name='Milk Cake 22gm Family Carton' unit='Pcs' pm={Milk_Cake_22_gm_Family?.carton}/>
                <PmView name='Milk Cake 22gm Family ATC' unit='Pcs' pm={Milk_Cake_22_gm_Family?.atc}/>
                <PmView name='Tiffin Cake Shrink Outer Poly' unit='Pcs' pm={result.getTotalPmItem(pm,'outer_poly')}/>
                <PmView name='Gum Tape 3/4"' unit='Pcs' pm={result.getTotalPmItem(pm,'gumTap1')}/>
                <PmView name='Gum Tape 2"' unit='Pcs' pm={result.getTotalPmItem(pm,'gumTap2')}/>
                <PmView name='P.P Handgloves' unit='Pcs' pm='5000'/>
            </div>
        </div>

    </div>
        )
}