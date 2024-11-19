import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import ExcelReport from '../../../utils/excelReport';
import { AiOutlineFileExcel, AiOutlinePrinter } from 'react-icons/ai';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useReactToPrint } from 'react-to-print';
import { TrRaw, TrBlank, TrInfo, Loading } from '../../../components/Index';
import { useDisclosure } from '@chakra-ui/react';
import { getAllRecipe } from '../../../utils/api_utils';

const LachchaAllRecipe = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const excelRef = useRef()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllRecipe('Lachcha', setProducts, onOpen, onClose)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handlePrint = useReactToPrint({
        content: () => excelRef.current,
        documentTitle: "Lachcha All recipe"
    });

    const { onDownload } = useDownloadExcel({
        currentTableRef: excelRef.current,
        filename: `Lachcha`,
        sheet: 'Lachcha All Recipe'
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
                            name: 'Palm Oil Super',
                            unit: 'Kg',
                            query: 'palmOilSuper',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Starch Powder',
                            unit: 'Kg',
                            query: 'starchPowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Dalda Hard PUSTI',
                            unit: 'Kg',
                            query: 'daldaHardPUSTI',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Ghee',
                            unit: 'Kg',
                            query: 'ghee',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Ghee Flavour',
                            unit: 'Kg',
                            query: 'gheeFlavour',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'TBHQ',
                            unit: 'Kg',
                            query: 'tbhq',
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
                            name: 'Master poly 24"x22.5"',
                            unit: 'gm',
                            query: 'master_poly_24_22_5',
                            report
                        }} />

                    </tbody>
                </table>
            </div>
            <Loading {...{ msg: 'Generate Recipe', isOpen, onOpen, onClose }} />
        </div>
    );
};

export default LachchaAllRecipe;