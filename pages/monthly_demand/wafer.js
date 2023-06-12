import axios from "axios";
import { useEffect, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import PmView from "../../components/PmView";
import PrintHeader from "../../components/PrintHeader";
import RmView from "../../components/RmView";
import TargetCarton from '../../components/TargetCarton';
import useUserStore from "../../features/userStore";
import baseUrl from "../../utils/baseUrl";
import { getDemand, getTotalPmItem } from "../../utils/demand_utils";
import Head from "next/head";


export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/api/products/Wafer`)
    return{
        props:{
            products : res.data.data || []
        }
    }
}


export default function WaferDemand({ products }) {
    const{demand,resetDemand} = useUserStore()
    const printRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle : ""
    });

    const {rm,pm}=getDemand(demand)
    const {Vanilla_Wafer,Chocolate_Wafer} = pm

    useEffect(()=>{
        resetDemand()
    },[resetDemand])

    
    return (
        <div ref={printRef} className="mt-2 p-2 mx-4 space-y-2 border shadow-lg rounded-md print:shadow-none print:border-none print:rounded-none">
        <Head>
            <title>Wafer Demand</title>
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
                <h3 className="py-2 bg-gray-500 text-white text-center">Raw Materials (Kg)</h3>
                <RmView name='Chocolate Brown Colour 6059' ingredient={rm?.chocolateBrownColour_6059}/>

                <RmView name='Citric Acid Mono' ingredient={rm?.citricAcidMono}/>

                <RmView name='Cocoa Powder Black 4011' ingredient={rm?.cocoaPowderBlack_4011}/>

                <RmView name='Chocolate Flavour KH' ingredient={rm?.chocolateFlavourKH}/>

                <RmView name='Dalda Hard PUSTI' ingredient={rm?.daldaHardPUSTI}/>

                <RmView name='Flour A Grade' ingredient={rm?.flourGrade_A}/>

                <RmView name='Flour B Grade' ingredient={rm?.flourGrade_B}/>

                <RmView name='Soya Lecithine' ingredient={rm?.soyaLecithine}/>

                <RmView name='Milk Flavour KH' ingredient={rm?.milkFlavourKH}/>

                <RmView name='Palm Oil Super' ingredient={rm?.palmOilSuper}/>

                <RmView name='Super Salt' ingredient={rm?.superSalt}/>

                <RmView name='Skim Milk Powder' ingredient={rm?.skimMilkPowder}/>

                <RmView name='Sodium Bi Carbonate' ingredient={rm?.sodiumBiCarbonate}/>

                <RmView name='Sodium Meta Bi Sulphate' ingredient={rm?.sodiumMetaBiSulphate}/>

                <RmView name='Starch Powder' ingredient={rm?.starchPowder}/>

                <RmView name='Sugar' ingredient={rm?.sugar}/>

                <RmView name='TBHQ' ingredient={rm?.tbhq}/>

                <RmView name='Vanila Flavour KH' ingredient={rm?.vanilaFlavourKH}/>
            </div>
            <div className="w-1/2 border border-gray-400">
                <h3 className="py-2 bg-gray-500 text-white text-center">Packaging Materials</h3>
                <PmView name='Chocolate Wafer Wrapper' unit='' pm={Chocolate_Wafer?.wrapper}/>
                <PmView name='Chocolate Wafer Carton' unit='Pcs' pm={Chocolate_Wafer?.carton}/>
                <PmView name='Vanilla Wafer Wrapper' unit='' pm={Vanilla_Wafer?.wrapper}/>
                <PmView name='Vanilla Wafer Carton' unit='Pcs' pm={Vanilla_Wafer?.carton}/>
                <PmView name='Wafer Paper Board' unit='Pcs' pm={getTotalPmItem(pm,'board')}/>
                <PmView name='Gum Tape 2"' unit='Pcs' pm={getTotalPmItem(pm,'gumTap2')}/>
            </div>
        </div>

    </div>
        )
}