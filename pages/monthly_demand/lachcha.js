import axios from "axios";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import MonthlyDemandMonth from "../../components/MonthlyDemandMonth";
import PmView from '../../components/PmView';
import PrintHeader from "../../components/PrintHeader";
import RmView from '../../components/RmView';
import TargetCarton from '../../components/TargetCarton';
import useUserStore from '../../features/userStore';
import baseUrl from "../../utils/baseUrl";
import Demand from "../../utils/demand";

export async function getServerSideProps(){
    const res = await axios.get(`${baseUrl}/api/products/Lachcha`)
    return{
        props:{
            products : res.data.data || []
        }
    }
}

export default function LachchaDemand({products}){
    const{demand,resetDemand} = useUserStore()
    const printRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle : ""
      });
    
    const result = new Demand(demand)
    const {rm,pm} = result.getDemand(demand)
    const {Lachcha_Semai_200gm,Lachcha_Semai_500gm} = pm

    useEffect(()=>{
        resetDemand()
    },[resetDemand])
    
    return(
        <div ref={printRef} className="mt-2 p-2 mx-4 print:mx-10 space-y-2 border shadow-lg rounded-md print:shadow-none print:border-none print:rounded-none">
            <Head>
                <title>Lachcha Demand</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <PrintHeader/>
            <TargetCarton {...{products,handlePrint}}/>
            <MonthlyDemandMonth section='Lachcha'/>
            <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-x-2 md:space-y-0">
                <div className="w-full md:w-1/2 border border-gray-400 pb-4">
                    <h3 className="py-0.5 bg-gray-500 text-white font-bold text-center">Raw Materials (Kg)</h3>
                    <RmView name='Flour A Grade' ingredient={rm?.flourGrade_A}/>
                    <RmView name='Flour B Grade' ingredient={rm?.flourGrade_B}/>
                    <RmView name='Palm Oil Super' ingredient={rm?.palmOilSuper}/>
                    <RmView name='Starch Powder' ingredient={rm?.starchPowder}/>
                    <RmView name='Dalda Hard Pusti' ingredient={rm?.daldaHardPUSTI}/>
                    <RmView name='Ghee' ingredient={result.getGhee_flavour(.064)}/>
                    <RmView name='Ghee Flavour' ingredient={result.getGhee_flavour(.016)}/>
                    <RmView name='TBHQ' ingredient={rm?.tbhq}/>
                </div>
                <div className="w-full md:w-1/2 border border-gray-400 pb-4">
                    <h3 className="py-0.5 bg-gray-500 text-white font-bold text-center">Packaging Materials</h3>
                    <PmView name='Lachcha Semai 200gm Pouch' unit='' pm={Lachcha_Semai_200gm?.wrapper}/>
                    <PmView name='Master Poly 24"x22.5"' unit='' pm={Lachcha_Semai_200gm?.master_poly}/>
                    <PmView name='Lachcha Semai Premium Pouch' unit='' pm={Lachcha_Semai_500gm?.wrapper}/>
                    <PmView name='Lachcha Semai Premium Bag' unit='Pcs' pm={Lachcha_Semai_500gm?.atc}/>
                    <PmView name='Lachcha Semai Premium Carton' unit='Pcs' pm={Lachcha_Semai_500gm?.carton}/>
                    <PmView name='Gum Tape 2"' unit='Pcs' pm={result.getTotalPmItem(pm,'gumTap2')}/>
                    <PmView name='P.P Handgloves' unit='Pcs' pm='500'/>
                </div>
            </div>

        </div>
    )
}