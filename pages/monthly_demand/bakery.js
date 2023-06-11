import axios from "axios";
import { useEffect, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import PmView from "../../components/PmView";
import PrintHeader from "../../components/PrintHeader";
import RmView from "../../components/RmView";
import TargetCarton from '../../components/TargetCarton';
import useUserStore from "../../features/userStore";
import baseUrl from "../../utils/baseUrl";
import { getDemand, getTotalFoil, getTotalPmItem } from "../../utils/demand_utils";
import Head from "next/head";



export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/api/products/Bakery`)
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
        Butter_Cookies,
        Butter_Toast,
        Dry_Cake_Mini,
        Dry_Cake_Family,
        Special_Toast,
        Milk_Cookies,
        Chocolate_Cookies
    } = pm

    useEffect(()=>{
        resetDemand()
    },[resetDemand])

    return (
        <div ref={printRef} className="mt-2 p-2 mx-4 space-y-2 border shadow-lg rounded-md print:shadow-none print:border-none print:rounded-none">
        <Head>
            <title>Bakery Demand</title>
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
                    <RmView name='Ammonium' ingredient={rm?.ammonium}/>

                  <RmView name='Baking Powder' ingredient={rm?.bakingPowder}/>
                  
                  <RmView name='Black Cumin' ingredient={rm?.blackCumin}/>

                  <RmView name='Bread Improver' ingredient={rm?.breadImprover}/>

                  <RmView name='Butter Flavour SM' ingredient={rm?.butterFlavourSM}/>

                  <RmView name='Cake Gel' ingredient={rm?.cakeGel}/>

                  <RmView name='Chocolate Chips' ingredient={rm?.chocolateChips}/>

                  <RmView name='Chocolate Flavour SYMRISE' ingredient={rm?.chocolateFlavourSYMRISE}/>

                  <RmView name='Chocolate Paste' ingredient={rm?.chocolatePaste}/>

                  <RmView name='Cocoa Powder 4011' ingredient={rm?.cocoaPowder_4011}/>

                  <RmView name='Condenced Milk Flavour' ingredient={rm?.condencedMilkFlavour}/>

                  <RmView name='Dalda Hard PUSTI' ingredient={rm?.daldaHardPUSTI}/>

                  <RmView name='Dalda Soft HILSA' ingredient={rm?.daldaSoftHILSA}/>

                  <RmView name='Egg' ingredient={rm?.egg}/>

                  <RmView name='Egg Yellow Colour' ingredient={rm?.eggYellowColour}/>

                  <RmView name='Flour A Grade' ingredient={rm?.flourGrade_A}/>

                  <RmView name='Flour B Grade' ingredient={rm?.flourGrade_B}/>

                  <RmView name='Flour C Grade' ingredient={rm?.flourGrade_C}/>

                  <RmView name='Ghee' ingredient={rm?.ghee}/>

                  <RmView name='Ghee Flavour' ingredient={rm?.gheeFlavour}/>

                  <RmView name='Glucose Powder' ingredient={rm?.glucosePowder}/>

                  <RmView name='Lemon Yellow Colour' ingredient={rm?.lemonYellowColour}/>

                  <RmView name='Skim Milk Powder' ingredient={rm?.skimMilkPowder}/>

                  <RmView name='Milk Flavour KH' ingredient={rm?.milkFlavourKH}/>

                  <RmView name='Mono Saccharine' ingredient={rm?.monoSaccharine}/>

                  <RmView name='Palm Oil Super' ingredient={rm?.palmOilSuper}/>

                  <RmView name='Super Salt' ingredient={rm?.superSalt}/>

                  <RmView name='Sodium Acid Pyro Phosphet' ingredient={rm?.sodiumAcidPyroPhosphet}/>

                  <RmView name='Sodium Bi Carbonate' ingredient={rm?.sodiumBiCarbonate}/>

                  <RmView name='Starch Powder' ingredient={rm?.starchPowder}/>

                  <RmView name='Sugar' ingredient={rm?.sugar}/>

                  <RmView name='TBHQ' ingredient={rm?.tbhq}/>

                  <RmView name='Vanilin Powder Flavour' ingredient={rm?.vanilinPowderFlavour}/>

                  <RmView name='Xanthem Gum' ingredient={rm?.xanthemGum}/>

                  <RmView name='Yeast' ingredient={rm?.yeast}/>
            </div>
            <div className="w-1/2 border border-gray-400">
                <h3 className="py-2 bg-gray-500 text-white font-bold text-center">Packaging Materials</h3>
                <PmView name='F.Time Milk/Chocolate Cookies Tray' unit='Pcs' pm={getTotalFoil(pm,'cookies')}/>
                <PmView name='F.Time Chocolate Cookies Pouch' unit='' pm={Chocolate_Cookies?.wrapper}/>
                <PmView name='F.Time Chocolate Cookies Carton' unit='Pcs' pm={Chocolate_Cookies?.carton}/>
                <PmView name='F.Time Butter Cookies 750gm Jar' unit='Pcs' pm={Butter_Cookies?.jar}/>
                <PmView name='F.Time Butter Cookies 750gm Label' unit='Pcs' pm={Butter_Cookies?.label}/>
                <PmView name='F.Time Butter Cookies 750gm Carton' unit='Pcs' pm={Butter_Cookies?.carton}/>
                <PmView name='F.Time Milk Cookies Pouch' unit='' pm={Milk_Cookies?.wrapper}/>
                <PmView name='F.Time Milk Cookies Carton' unit='Pcs' pm={Milk_Cookies?.carton}/>
                <PmView name='Cutting paper' unit='' pm={Butter_Cookies?.paper}/>
                <PmView name='Inner Poly 6"x8"' unit='' pm={Butter_Cookies?.inner_poly}/>
                <PmView name='Gum Tape 3/4"' unit='Pcs' pm={getTotalPmItem(pm,'gumTap1')}/>
                <PmView name='Dry Cake Mini 30gm Wrapper' unit='' pm={Dry_Cake_Mini?.wrapper}/>
                <PmView name='Dry Cake Mini 30gm Carton' unit='Pcs' pm={Dry_Cake_Mini?.carton}/>
                <PmView name='Special Toast Inner Poly 9"x11"' unit='' pm={Special_Toast?.inner_poly}/>
                <PmView name='Special Toast Pouch' unit='' pm={Special_Toast?.wrapper}/>
                <PmView name='Special Toast Carton' unit='Pcs' pm={Special_Toast?.carton}/>
                <PmView name='Butter Toast Inner Poly 8"x11"' unit='' pm={Butter_Toast?.inner_poly}/>
                <PmView name='Butter Toast Pouch' unit='' pm={Butter_Toast?.wrapper}/>
                <PmView name='Butter Toast Carton' unit='Pcs' pm={Butter_Toast?.carton}/>
                <PmView name='Dry Cake Family Tray' unit='Pcs' pm={Dry_Cake_Family?.tray}/>
                <PmView name='Dry Cake Family Pouch' unit='' pm={Dry_Cake_Family?.wrapper}/>
                <PmView name='Dry Cake Family ATC Box' unit='Pcs' pm={Dry_Cake_Family?.atc}/>
                <PmView name='Dry Cake Family Carton' unit='Pcs' pm={Dry_Cake_Family?.carton}/>
                <PmView name='Dry Cake Paper' unit='Rim' pm={getTotalFoil(pm,'dryCake')}/>
                <PmView name='Gum Tape 2"' unit='Pcs' pm={getTotalPmItem(pm,'gumTap2')}/>
            </div>
        </div>

    </div>
        )
}