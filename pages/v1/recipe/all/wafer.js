import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { AiOutlineFileExcel, AiOutlinePrinter } from 'react-icons/ai';
import { useReactToPrint } from 'react-to-print';
import { Loading, TrBlank, TrInfo, TrRaw } from '../../../components/Index';
import ExcelReport from '../../../utils/excelReport';
import { useDisclosure } from '@chakra-ui/react';
import { getAllRecipe } from '../../../utils/api_utils';

const WaferAllRecipe = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const excelRef = useRef()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllRecipe('Wafer', setProducts, onOpen, onClose)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handlePrint = useReactToPrint({
        content: () => excelRef.current,
        documentTitle: "Wafer All recipe"
    });

    const { onDownload } = useDownloadExcel({
        currentTableRef: excelRef.current,
        filename: `wafer`,
        sheet: 'Wafer All Recipe'
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
                            name: 'Chocolate Brown Colour 6059',
                            unit: 'Kg',
                            query: 'chocolateBrownColour_6059',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Citric Acid Mono',
                            unit: 'Kg',
                            query: 'citricAcidMono',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Cocoa Powder Black 4011',
                            unit: 'Kg',
                            query: 'cocoaPowderBlack_4011',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Chocolate Flavour KH',
                            unit: 'Kg',
                            query: 'chocolateFlavourKH',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Dalda Hard PUSTI',
                            unit: 'Kg',
                            query: 'daldaHardPUSTI',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Flour Grade A',
                            unit: 'Kg',
                            query: 'flourGrade_A',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Flour Grade B',
                            unit: 'Kg',
                            query: 'flourGrade_B',
                            report
                        }} />
                        <TrRaw {...{
                            name: 'Soya Lecithine',
                            unit: 'Kg',
                            query: 'soyaLecithine',
                            report
                        }} />
                        <TrRaw {...{
                            name: 'Milk Flavour KH',
                            unit: 'Kg',
                            query: 'milkFlavourKH',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Palm Oil Super',
                            unit: 'Kg',
                            query: 'palmOilSuper',
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
                            name: 'Sodium Bi Carbonate',
                            unit: 'Kg',
                            query: 'sodiumBiCarbonate',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Sodium Meta Bi Sulphate',
                            unit: 'Kg',
                            query: 'sodiumMetaBiSulphate',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'StarchPowder',
                            unit: 'Kg',
                            query: 'starchPowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Sugar',
                            unit: 'Kg',
                            query: 'sugar',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'TBHQ',
                            unit: 'Kg',
                            query: 'tbhq',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Vanila Flavour KH',
                            unit: 'Kg',
                            query: 'vanilaFlavourKH',
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

                    </tbody>
                </table>
            </div>
            <Loading {...{ msg: 'Generate Recipe', isOpen, onOpen, onClose }} />
        </div>
    );
};

export default WaferAllRecipe;