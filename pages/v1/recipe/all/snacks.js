import React, { useEffect, useRef, useState } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { AiOutlineFileExcel, AiOutlinePrinter } from 'react-icons/ai';
import { useReactToPrint } from 'react-to-print';
import { TrBlank, TrInfo, TrRaw } from '../../../../components/v1/Index';
import { getAllRecipe } from '../../../../utils/v1/api_utils';
import ExcelReport from '../../../../utils/v1/excelReport';

const LachchaAllRecipe = () => {
    const excelRef = useRef()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllRecipe('Snacks', setProducts)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handlePrint = useReactToPrint({
        content: () => excelRef.current,
        documentTitle: "Snacks All recipe"
    });

    const { onDownload } = useDownloadExcel({
        currentTableRef: excelRef.current,
        filename: `Snacks`,
        sheet: 'Snacks All Recipe'
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
                            name: 'Turmeric',
                            unit: 'Kg',
                            query: 'turmeric',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Cinamon',
                            unit: 'Kg',
                            query: 'cinamon',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Testing Salt',
                            unit: 'Kg',
                            query: 'testingSalt',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Red Chili',
                            unit: 'Kg',
                            query: 'redChili',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Nutmug',
                            unit: 'Kg',
                            query: 'nutMug',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Cumin',
                            unit: 'Kg',
                            query: 'cumin',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Black Pepper',
                            unit: 'Kg',
                            query: 'blackPepper',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Clove',
                            unit: 'Kg',
                            query: 'clove',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Cardamon',
                            unit: 'Kg',
                            query: 'cardamon',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Cumin Sweet',
                            unit: 'Kg',
                            query: 'cuminSweet',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Bit Salt',
                            unit: 'Kg',
                            query: 'bitSalt',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Ginger',
                            unit: 'Kg',
                            query: 'ginger',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Rice Flask',
                            unit: 'Kg',
                            query: 'riceFlask',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Sodium Bi Carbonate',
                            unit: 'Kg',
                            query: 'sodiumBiCarbonate',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Raw Peanut',
                            unit: 'Kg',
                            query: 'rawPeanut',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Lentil',
                            unit: 'Kg',
                            query: 'lentil',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Salt Super',
                            unit: 'Kg',
                            query: 'saltSuper',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Palm Oil Super',
                            unit: 'Kg',
                            query: 'palmOilSuper',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Anchor Dal',
                            unit: 'Kg',
                            query: 'anchorDal',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Pea',
                            unit: 'Kg',
                            query: 'pea',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Skim Milk Powder',
                            unit: 'Kg',
                            query: 'skimMilkPowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Sugar',
                            unit: 'Kg',
                            query: 'sugar',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Citric Acid Ano',
                            unit: 'Kg',
                            query: 'citricAcidAno',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'mugDal',
                            unit: 'Kg',
                            query: 'mugDal',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Apple Green Colour',
                            unit: 'Kg',
                            query: 'appleGreenColour',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Tapioca Starch',
                            unit: 'Kg',
                            query: 'tapiocaStarch',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Onion Powder',
                            unit: 'Kg',
                            query: 'onionPowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Garlic Powder',
                            unit: 'Kg',
                            query: 'garlicPowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Jwain Masala',
                            unit: 'Kg',
                            query: 'jwainMasala',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Rice Atop',
                            unit: 'Kg',
                            query: 'riceAtop',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Lemon Yellow Colour',
                            unit: 'Kg',
                            query: 'lemonYellowColour',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'TBHQ',
                            unit: 'Kg',
                            query: 'tbhq',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'BBQ',
                            unit: 'Kg',
                            query: 'bbq',
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
                            name: 'Packet Per Inner',
                            unit: 'Pkt',
                            query: 'packet_per_inner',
                            report
                        }} />
                        <TrInfo {...{
                            name: 'Inner Per Mater',
                            unit: 'Pkt',
                            query: 'inner_per_master',
                            report
                        }} />
                        <TrInfo {...{
                            name: 'Packet Per carton',
                            unit: 'Pkt',
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
                            name: 'Inner poly 18"x15"',
                            unit: 'gm',
                            query: 'inner_poly_18_15',
                            report
                        }} />

                        <TrInfo {...{
                            name: 'Master poly 25"x47"',
                            unit: 'gm',
                            query: 'master_poly_25_47',
                            report
                        }} />

                        <TrInfo {...{
                            name: 'Inner poly 17"x19.5"',
                            unit: 'gm',
                            query: 'inner_poly_17_19_5',
                            report
                        }} />
                        <TrInfo {...{
                            name: 'master poly 25"x37',
                            unit: 'gm',
                            query: 'master_poly_25_37',
                            report
                        }} />

                        <TrInfo {...{
                            name: 'Inner poly 16"x21_5"',
                            unit: 'gm',
                            query: 'inner_poly_16_21_5',
                            report
                        }} />

                        <TrInfo {...{
                            name: 'Master poly 35"x26"',
                            unit: 'gm',
                            query: 'master_poly_35_26',
                            report
                        }} />
                        <TrInfo {...{
                            name: 'Inner poly 24"x15"',
                            unit: 'gm',
                            query: 'inner_poly_24_15',
                            report
                        }} />
                        <TrInfo {...{
                            name: 'Master poly 44"x23"',
                            unit: 'gm',
                            query: 'master_poly_44_23',
                            report
                        }} />
                        <TrInfo {...{
                            name: 'Inner poly 19"x20"',
                            unit: 'gm',
                            query: 'inner_poly_19_20',
                            report
                        }} />
                        <TrInfo {...{
                            name: 'Master poly 28"x42"',
                            unit: 'gm',
                            query: 'master_poly_28_42',
                            report
                        }} />

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LachchaAllRecipe;