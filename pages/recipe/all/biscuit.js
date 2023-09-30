import { useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { AiOutlineFileExcel, AiOutlinePrinter } from 'react-icons/ai';
import { useReactToPrint } from 'react-to-print';
import { Loading, TrBlank, TrInfo, TrRaw } from '../../../components/Index';
import { getAllRecipe } from '../../../utils/api_utils';
import ExcelReport from '../../../utils/excelReport';

const BiscuitAllRecipe = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const excelRef = useRef()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllRecipe('Biscuit', setProducts, onOpen, onClose)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handlePrint = useReactToPrint({
        content: () => excelRef.current,
        documentTitle: "Biscuit All recipe"
    });

    const { onDownload } = useDownloadExcel({
        currentTableRef: excelRef.current,
        filename: `Biscuit`,
        sheet: 'Biscuit All Recipe'
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
                            className='bg-gray-100 font-semibold sticky top-0'
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
                            name: 'Ammonium Bi Carbonate',
                            unit: 'Kg',
                            query: 'ammonium',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Black Cumin',
                            unit: 'Kg',
                            query: 'blackCumin',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Bit Salt',
                            unit: 'Kg',
                            query: 'bitSalt',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Butter Flavour Asia',
                            unit: 'Kg',
                            query: 'butterFlavourSK',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Butter Flavour SYMEGA',
                            unit: 'Kg',
                            query: 'butterFlavourSYMEGA',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Butter Solid',
                            unit: 'Kg',
                            query: 'butterSolid',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Butter Oil Substitute',
                            unit: 'Kg',
                            query: 'butterOilSubstitute',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Chocolate Brown Colour 815',
                            unit: 'Kg',
                            query: 'chocolateBrownColour_815',
                            report
                        }} />

                        {/* <TrRaw {...{
                            name: 'Aspertem',
                            unit: 'Kg',
                            query: 'aspertem',
                            report
                        }} /> */}

                        <TrRaw {...{
                            name: 'Chocolate Flavour KH',
                            unit: 'Kg',
                            query: 'chocolateFlavourKH',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Calcium Carbonate',
                            unit: 'Kg',
                            query: 'calciumCarbonate',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Craker Enzyme',
                            unit: 'Kg',
                            query: 'crakerEnzyme',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Citric Acid Mono',
                            unit: 'Kg',
                            query: 'citricAcidMono',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Cocoa Powder Black 910',
                            unit: 'Kg',
                            query: 'cocoaPowderBlack_910',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Dalda Soft HILSA',
                            unit: 'Kg',
                            query: 'daldaSoftHILSA',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Cardamon Flavour',
                            unit: 'Kg',
                            query: 'cardamonFlavour',
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
                            name: 'Flour Grade C',
                            unit: 'Kg',
                            query: 'flourGrade_C',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Glucose Powder',
                            unit: 'Kg',
                            query: 'glucosePowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Lemon Flavour',
                            unit: 'Kg',
                            query: 'lemonFlavour',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Lemon Yellow Colour',
                            unit: 'Kg',
                            query: 'lemonYellowColour',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Soya Lecithine',
                            unit: 'Kg',
                            query: 'soyaLecithine',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Liquid Glucose',
                            unit: 'Kg',
                            query: 'liquidGlucose',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Milk Flavour KH',
                            unit: 'Kg',
                            query: 'milkFlavourKH',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Orange Flavour',
                            unit: 'Kg',
                            query: 'orangeFlavour',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Onion Flavour Green',
                            unit: 'Kg',
                            query: 'onionFlavourGreen',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Onion Flavour SYMEGA',
                            unit: 'Kg',
                            query: 'onionFlavourSYMEGA',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Onion Powder',
                            unit: 'Kg',
                            query: 'onionPowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Palm Oil Super',
                            unit: 'Kg',
                            query: 'palmOilSuper',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Pineapple Flavour',
                            unit: 'Kg',
                            query: 'pineappleFlavour',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Palm Corn Oil',
                            unit: 'Kg',
                            query: 'palmCornOil',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Super Salt',
                            unit: 'Kg',
                            query: 'superSalt',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Sodium Acid pyro Phosphet',
                            unit: 'Kg',
                            query: 'sodiumAcidpyroPhosphet',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Skim Milk Powder',
                            unit: 'Kg',
                            query: 'skimMilkPowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Sodium Meta Bi Sulphate',
                            unit: 'Kg',
                            query: 'sodiumMetaBiSulphate',
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

                        <TrRaw {...{
                            name: 'Sugar',
                            unit: 'Kg',
                            query: 'sugar',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Testing Salt',
                            unit: 'Kg',
                            query: 'testingSalt',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'TBHQ',
                            unit: 'Kg',
                            query: 'tbhq',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Vanilin Powder',
                            unit: 'Kg',
                            query: 'vanilinPowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Onion Chieves',
                            unit: 'Kg',
                            query: 'onionChieves',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Coconut Flavour',
                            unit: 'Kg',
                            query: 'coconutFlavour',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Butta Belly Flavour',
                            unit: 'Kg',
                            query: 'buttaBellyFlavour',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Coconut Powder',
                            unit: 'Kg',
                            query: 'coconutPowder',
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

export default BiscuitAllRecipe;