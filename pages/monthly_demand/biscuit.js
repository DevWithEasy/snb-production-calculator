import axios from "axios";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import PmView from "../../components/PmView";
import PrintHeader from "../../components/PrintHeader";
import RmView from "../../components/RmView";
import TargetCarton from "../../components/TargetCarton";
import useUserStore from "../../features/userStore";
import baseUrl from "../../utils/baseUrl";
import Demand from "../../utils/demand";
import MonthlyDemandMonth from "../../components/MonthlyDemandMonth";



export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/api/products/Biscuit`)
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

    const result = new Demand(demand)
    const {rm,pm} = result.getDemand(demand)
    const {
        Active_Energy_Family,
        Active_Energy_Mini,
        Active_Energy_Standard,
        Best_Choice_Family,
        Best_Choice_Standard,
        Choco_Plus_Mini,
        Choco_Plus_Standard,
        Fruit_Plus_Mini,
        Fruit_Plus_Standard,
        Elachi_Standard,
        King_Cookies_Biscuit,
        Lexus_Mini,
        Lexus_Standard,
        Lexus_Family,
        Valencia_Orange_Standard,
        Valencia_Orange_Family
    } = pm

    useEffect(()=>{
        resetDemand()
    },[resetDemand])

    return (
        <div ref={printRef} className="mt-2 p-2 mx-4 space-y-2 border shadow-lg rounded-md print:shadow-none print:border-none print:rounded-none">
        <Head>
            <title>Biscuit Demand</title>
            <link rel="icon" href="/logo.png" />
        </Head>
        <PrintHeader/>
        <TargetCarton {...{products,handlePrint}}/>
        <MonthlyDemandMonth section='Biscuit'/>
        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-x-2 md:space-y-0">
            <div className="w-full md:w-1/2 border border-gray-400 pb-4">
                <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Raw Materials (Kg)</h3>
                <RmView name='Ammonium Bi Carbonate' ingredient={rm?.ammonium}/>

                  <RmView name='Black Cumin' ingredient={rm?.blackCumin}/>

                  <RmView name='Bit Salt' ingredient={rm?.bitSalt}/>

                  <RmView name='Butter Flavour SK' ingredient={rm?.butterFlavourSK}/>

                  <RmView name='Butter Flavour SYMEGA' ingredient={rm?.butterFlavourSYMEGA}/>

                  <RmView name='Butter Solid' ingredient={rm?.butterSolid}/>

                  <RmView name='Butter Oil Substitute' ingredient={rm?.butterOilSubstitute}/>

                  <RmView name='Chocolate Brown Colour 815' ingredient={rm?.chocolateBrownColour_815}/>

                  <RmView name='Aspertem' ingredient={rm?.aspertem}/>

                  <RmView name='Chocolate Flavour KH' ingredient={rm?.chocolateFlavourKH}/>

                  <RmView name='Calcium Carbonate' ingredient={rm?.calciumCarbonate}/>

                  <RmView name='Craker Enzyme' ingredient={rm?.crakerEnzyme}/>

                  <RmView name='Citric Acid Mono' ingredient={rm?.citricAcidMono}/>

                  <RmView name='Cocoa Powder Black 910' ingredient={rm?.cocoaPowderBlack_910}/>

                  <RmView name='Dalda Soft HILSA' ingredient={rm?.daldaSoftHILSA}/>

                  <RmView name='Cardamon Flavour' ingredient={rm?.cardamonFlavour}/>

                  <RmView name='Flour Grade A' ingredient={rm?.flourGrade_A}/>

                  <RmView name='Flour Grade B' ingredient={rm?.flourGrade_B}/>

                  <RmView name='Flour Grade C' ingredient={rm?.flourGrade_C}/>

                  <RmView name='Glucose Powder' ingredient={rm?.glucosePowder}/>

                  <RmView name='Lemon Flavour' ingredient={rm?.lemonFlavour}/>

                  <RmView name='Lemon Yellow Colour' ingredient={rm?.lemonYellowColour}/>

                  <RmView name='Soya Lecithine' ingredient={rm?.soyaLecithine}/>

                  <RmView name='Liquid Glucose' ingredient={rm?.liquidGlucose}/>

                  <RmView name='Milk Flavour KH' ingredient={rm?.milkFlavourKH}/>

                  <RmView name='Orange Flavour' ingredient={rm?.orangeFlavour}/>

                  <RmView name='Onion Flavour Green' ingredient={rm?.onionFlavourGreen}/>

                  <RmView name='Onion Flavour SYMEGA' ingredient={rm?.onionFlavourSYMEGA}/>

                  <RmView name='Onion Powder' ingredient={rm?.onionPowder}/>

                  <RmView name='Palm Oil Super' ingredient={rm?.palmOilSuper}/>

                  <RmView name='Pineapple Flavour' ingredient={rm?.pineappleFlavour}/>

                  <RmView name='Palm Corn Oil' ingredient={rm?.palmCornOil}/>

                  <RmView name='Super Salt' ingredient={rm?.superSalt}/>

                  <RmView name='Sodium Acid Pyro Phosphet' ingredient={rm?.sodiumAcidpyroPhosphet}/>

                  <RmView name='Skim Milk Powder' ingredient={rm?.skimMilkPowder}/>

                  <RmView name='Sodium Meta Bi Sulphate' ingredient={rm?.sodiumMetaBiSulphate}/>

                  <RmView name='Sodium Bi Carbonate' ingredient={rm?.sodiumBiCarbonate}/>

                  <RmView name='Starch Powder' ingredient={rm?.starchPowder}/>

                  <RmView name='Sugar' ingredient={rm?.sugar}/>

                  <RmView name='Testing Salt' ingredient={rm?.testingSalt}/>

                  <RmView name='TBHQ' ingredient={rm?.tbhq}/>

                  <RmView name='Vanilin Powder' ingredient={rm?.vanilinPowder}/>

                  <RmView name='Onion Chieves' ingredient={rm?.onionChieves}/>

                  <RmView name='Coconut Flavour' ingredient={rm?.coconutFlavour}/>

                  <RmView name='Butta Belly Flavour' ingredient={rm?.buttaBellyFlavour}/>

                  <RmView name='Coconut Powder' ingredient={rm?.coconutPowder}/>
                
            </div>
            <div className="w-full md:w-1/2 border border-gray-400 pb-4">
                <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Packaging Materials</h3>
                <PmView name='Active Energy 45gm Wrapper' unit='' pm={Active_Energy_Standard?.wrapper}/>
                <PmView name='Active Energy 45gm Carton' unit='Pcs' pm={Active_Energy_Standard?.carton}/>
                <PmView name='Active Energy 18gm Wrapper' unit='' pm={Active_Energy_Mini?.wrapper}/>
                <PmView name='Active Energy 18gm Carton' unit='Pcs' pm={Active_Energy_Mini?.carton}/>
                <PmView name='Active Energy 200gm Wrapper' unit='' pm={Active_Energy_Family?.wrapper}/>
                <PmView name='Active Energy 200gm Carton' unit='Pcs' pm={Active_Energy_Family?.carton}/>
                <PmView name='Active Energy 200gm Tray' unit='Pcs' pm={Active_Energy_Family?.tray}/>
                <PmView name='Valencia Orange 45gm Wrapper' unit='' pm={Valencia_Orange_Standard?.wrapper}/>
                <PmView name='Valencia Orange 45gm Carton' unit='Pcs' pm={Valencia_Orange_Standard?.carton}/>
                <PmView name='Valencia Orange 150gm Wrpper' unit='' pm={Valencia_Orange_Family?.wrapper}/>
                <PmView name='Valencia Orange 150gm Carton' unit='Pcs' pm={Valencia_Orange_Family?.carton}/>
                <PmView name='Valencia Orange 150gm Tray' unit='Pcs' pm={Valencia_Orange_Family?.tray}/>
                <PmView name='Best Choice 80gm Wrapper' unit='' pm={Best_Choice_Standard?.wrapper}/>
                <PmView name='Best Choice 80gm Carton' unit='Pcs' pm={Best_Choice_Standard?.carton}/>
                <PmView name='Best Choice 220gm Wrapper' unit='' pm={Best_Choice_Family?.wrapper}/>
                <PmView name='Best Choice 220gm Carton' unit='Pcs' pm={Best_Choice_Family?.carton}/>
                <PmView name='Best Choice 220gm Tray' unit='Pcs' pm={Best_Choice_Family?.tray}/>
                <PmView name='Elachi 45gm Wrapper' unit='' pm={Elachi_Standard?.wrapper}/>
                <PmView name='Elachi 45gm Carton' unit='Pcs' pm={Elachi_Standard?.carton}/>
                <PmView name='Lexus 15gm Wrapper' unit='' pm={result.getTotalFoil(pm,'lexus')}/>
                <PmView name='Lexus 15gm Carton' unit='Pcs' pm={Lexus_Mini?.carton}/>
                <PmView name='Lexus 180gm Carton' unit='Pcs' pm={Lexus_Family?.carton}/>
                <PmView name='Lexus 180gm ATC' unit='Pcs' pm={Lexus_Family?.atc}/>
                <PmView name='Lexus 65gm Wrapper' unit='' pm={Lexus_Standard?.wrapper}/>
                <PmView name='Lexus 65gm Carton' unit='Pcs' pm={Lexus_Standard?.carton}/>
                <PmView name='Choco Plus 20gm Wrapper' unit='' pm={Choco_Plus_Mini?.wrapper}/>
                <PmView name='Choco Plus 20gm Carton' unit='Pcs' pm={Choco_Plus_Mini?.carton}/>
                <PmView name='Choco Plus 47gm Wrapper' unit='' pm={Choco_Plus_Standard?.wrapper}/>
                <PmView name='Choco Plus 47gm Carton' unit='Pcs' pm={Choco_Plus_Standard?.carton}/>
                <PmView name='Fruit Plus gm Wrapper' unit='' pm={Fruit_Plus_Mini?.wrapper}/>
                <PmView name='Fruit Plus gm Carton' unit='Pcs' pm={Fruit_Plus_Mini?.carton}/>
                <PmView name='Fruit Plus 47gm Wrapper' unit='' pm={Fruit_Plus_Standard?.wrapper}/>
                <PmView name='Fruit Plus 47gm Carton' unit='Pcs' pm={Fruit_Plus_Standard?.carton}/>
                <PmView name='King Cookies Wrapper' unit='' pm={King_Cookies_Biscuit?.wrapper}/>
                <PmView name='King Cookies Carton' unit='Pcs' pm={King_Cookies_Biscuit?.carton}/>
                <PmView name='Gum Tape 2"' unit='Pcs' pm={result.getTotalPmItem(pm,'gumTap2')}/>
                <PmView name='Gum Tape 2"' unit='Pcs' pm={result.getTotalPmItem(pm,'gumTapBoth')}/>
            </div>
        </div>

    </div>
        )
}