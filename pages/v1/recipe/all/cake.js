import React, { useEffect, useRef, useState } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { AiOutlineFileExcel, AiOutlinePrinter } from 'react-icons/ai';
import { useReactToPrint } from 'react-to-print';
import { TrBlank, TrInfo, TrRaw } from '../../../../components/v1/Index';
import { getAllRecipe } from '../../../../utils/v1/api_utils';
import ExcelReport from '../../../../utils/v1/excelReport';

const CakeAllRecipe = () => {
    const excelRef = useRef()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllRecipe('Cake', setProducts)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handlePrint = useReactToPrint({
        content: () => excelRef.current,
        documentTitle: "Cake All recipe"
    });

    const { onDownload } = useDownloadExcel({
        currentTableRef: excelRef.current,
        filename: `Cake`,
        sheet: 'Cake All Recipe'
    });

    const report = new ExcelReport(products)

    const names = report.getNames()

    return (
        <div>
            <div
                className='p-4 flex items-center space-x-4'
            >
                <AiOutlineFileExcel onClick={onDownload} className='cursor-pointer' />
                <AiOutlinePrinter onClick={() => handlePrint()} className='cursor-pointer' />
            </div>
            <div
                className='relative overflow-x-auto text-sm'
            >
                <table
                    ref={excelRef}
                    className=''
                >
                    <tbody
                        className=''
                    >
                        <tr
                            className='bg-gray-100 font-semibold'
                        >
                            <td
                                className='p-2 border w-[250px] print:w-[250px]'
                            >
                                Raw Materials Name
                            </td>
                            <td
                                className='p-2 border w-[30px]'
                                style={{
                                    textAlign: 'center'
                                }}
                            >
                                Unit
                            </td>
                            {
                                names && names.map(name =>
                                    <td
                                        key={name}
                                        className='border w-[80px]'
                                    >
                                        {name}
                                    </td>
                                )
                            }
                        </tr>

                        <TrRaw {...{
                            name: 'Vanilin Powder',
                            unit: 'Kg',
                            query: 'vanilinPowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Butter Oil Substitute',
                            unit: 'Kg',
                            query: 'butterOilSubstitute',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Cake Gel',
                            unit: 'Kg',
                            query: 'cakeGel',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Cake Emulsifier',
                            unit: 'Kg',
                            query: 'cakeEmulsifier',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Chocolate Brown Colour 6059',
                            unit: 'Kg',
                            query: 'chocolateBrownColour_6059',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Chocolate Flavour SYMRISE',
                            unit: 'Kg',
                            query: 'chocolateFlavourSYMRISE',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Chocolate Paste',
                            unit: 'Kg',
                            query: 'chocolatePaste',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Citric Acid Mono',
                            unit: 'Kg',
                            query: 'citricAcidMono',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Egg',
                            unit: 'Kg',
                            query: 'egg',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Flour Grade B',
                            unit: 'Kg',
                            query: 'flourGrade_B',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Flour Grade C',
                            unit: 'Kg',
                            query: 'flourGrade_C',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Glycerine',
                            unit: 'Kg',
                            query: 'glycerine',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Isopropyl Alcohol',
                            unit: 'Kg',
                            query: 'isopropylAlcohol',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Milk Flavour King',
                            unit: 'Kg',
                            query: 'milkFlavourKing',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Paraffin Oil',
                            unit: 'Kg',
                            query: 'paraffinOil',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Potassium Sorbate',
                            unit: 'Kg',
                            query: 'potassiumSorbate',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Super Salt',
                            unit: 'Kg',
                            query: 'superSalt',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Skim Milk Powder',
                            unit: 'Kg',
                            query: 'skimMilkPowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Sorbitol',
                            unit: 'Kg',
                            query: 'sorbitol',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Soya Lecithine',
                            unit: 'Kg',
                            query: 'soyaLecithine',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Sugar',
                            unit: 'Kg',
                            query: 'sugar',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Palm Oil Super',
                            unit: 'Kg',
                            query: 'palmOilSuper',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'TBHQ',
                            unit: 'Kg',
                            query: 'tbhq',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Vanila Flavour FORZONE',
                            unit: 'Kg',
                            query: 'vanilaFlavourFORZONE',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Vanila Flavour KH',
                            unit: 'Kg',
                            query: 'vanilaFlavourKH',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Xanthem Gum',
                            unit: 'Kg',
                            query: 'xanthemGum',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Sodium Acid pyro Phosphet',
                            unit: 'Kg',
                            query: 'sodiumAcidpyroPhosphet',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Sodium Bi Carbonate',
                            unit: 'Kg',
                            query: 'sodiumBiCarbonate',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Starch Powder',
                            unit: 'Kg',
                            query: 'starchPowder',
                            report
                        }} />


                        <TrBlank {...{
                            query: 'palmOil',
                            report
                        }} />

                        <TrInfo {...{
                            name: 'Foil Weight',
                            unit: 'gm',
                            query: 'foilWeight',
                            report
                        }} />
                        <TrInfo {...{
                            name: 'Packet Weight',
                            unit: 'gm',
                            query: 'packetWeight',
                            report
                        }} />
                        <TrInfo {...{
                            name: 'Packet Per carton',
                            unit: 'gm',
                            query: 'packetPerCarton',
                            report
                        }} />
                        <TrInfo {...{
                            name: 'Process Loss',
                            unit: '%',
                            query: 'processLoss',
                            report
                        }} />
                        <TrInfo {...{
                            name: 'Shrink outer poly',
                            unit: 'gm',
                            query: 'shrink_outer_poly',
                            report
                        }} />

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CakeAllRecipe;