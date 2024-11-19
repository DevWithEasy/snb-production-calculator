import { useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { AiOutlineFileExcel, AiOutlinePrinter } from 'react-icons/ai';
import { useReactToPrint } from 'react-to-print';
import { Loading, TrBlank, TrInfo, TrRaw } from '../../../components/Index';
import { getAllRecipe } from '../../../utils/api_utils';
import ExcelReport from '../../../utils/excelReport';

const BakeryAllRecipe = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const excelRef = useRef()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllRecipe('Bakery',setProducts,onOpen, onClose)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handlePrint = useReactToPrint({
        content: () => excelRef.current,
        documentTitle: "Bakery All recipe"
    });

    const { onDownload } = useDownloadExcel({
        currentTableRef: excelRef.current,
        filename: `Bakery`,
        sheet: 'Bakery All Recipe'
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
                            name: 'Ammonium Bi Carbonet',
                            unit: 'Kg',
                            query: 'ammonium',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Baking Powder',
                            unit: 'Kg',
                            query: 'bakingPowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Black Cumin',
                            unit: 'Kg',
                            query: 'blackCumin',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Bread Improver',
                            unit: 'Kg',
                            query: 'breadImprover',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Butter Flavour SM',
                            unit: 'Kg',
                            query: 'butterFlavourSM',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Cake Gel',
                            unit: 'Kg',
                            query: 'cakeGel',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Chocolate Chips',
                            unit: 'Kg',
                            query: 'chocolateChips',
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
                            name: 'Cocoa Powder 4011',
                            unit: 'Kg',
                            query: 'cocoaPowder_4011',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Coconut Powder',
                            unit: 'Kg',
                            query: 'coconutPowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Coconut Flavour',
                            unit: 'Kg',
                            query: 'coconutFlavour',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Condenced Milk Flavour',
                            unit: 'Kg',
                            query: 'condencedMilkFlavour',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Dalda Hard PUSTI',
                            unit: 'Kg',
                            query: 'daldaHardPUSTI',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Dalda Soft HILSA',
                            unit: 'Kg',
                            query: 'daldaSoftHILSA',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Egg',
                            unit: 'Kg',
                            query: 'egg',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Egg Yellow Colour',
                            unit: 'Kg',
                            query: 'eggYellowColour',
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
                            name: 'Glucose Powder',
                            unit: 'Kg',
                            query: 'glucosePowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Lemon Yellow Colour',
                            unit: 'Kg',
                            query: 'lemonYellowColour',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Skim Milk Powder',
                            unit: 'Kg',
                            query: 'skimMilkPowder',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Milk Flavour KH',
                            unit: 'Kg',
                            query: 'milkFlavourKH',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Mono Saccharine',
                            unit: 'Kg',
                            query: 'monoSaccharine',
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
                            name: 'Sodium Acid Pyro Phosphet',
                            unit: 'Kg',
                            query: 'sodiumAcidPyroPhosphet',
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
                            name: 'TBHQ',
                            unit: 'Kg',
                            query: 'tbhq',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Vanilin Powder Flavour',
                            unit: 'Kg',
                            query: 'vanilinPowderFlavour',
                            report
                        }} />

                        <TrRaw {...{
                            name: 'Xanthem Gum',
                            unit: 'Kg',
                            query: 'xanthemGum',
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
                            name: 'Dry Cake paper',
                            unit: 'gm',
                            query: 'dryCakepaper',
                            report
                        }} />

                        <TrInfo {...{
                            name: 'ATC Box',
                            unit: 'gm',
                            query: 'atc',
                            report
                        }} />

                        <TrInfo {...{
                            name: 'Jar',
                            unit: 'gm',
                            query: 'jar',
                            report
                        }} />

                        <TrInfo {...{
                            name: 'Label',
                            unit: 'gm',
                            query: 'label',
                            report
                        }} />

                        <TrInfo {...{
                            name: 'Tray',
                            unit: 'gm',
                            query: 'tray',
                            report
                        }} />

                        <TrInfo {...{
                            name: 'Inner poly 6x8',
                            unit: 'gm',
                            query: 'inner_poly_6_8',
                            report
                        }} />

                        <TrInfo {...{
                            name: 'Inner poly 8x11.5"',
                            unit: 'gm',
                            query: 'inner_poly_8_11_5',
                            report
                        }} />

                        <TrInfo {...{
                            name: 'Inner poly 9x11.5"',
                            unit: 'gm',
                            query: 'inner_poly_9_11_5',
                            report
                        }} />

                    </tbody>
                </table>
            </div>
            <Loading {...{ msg: 'Generate Recipe', isOpen, onOpen, onClose }} />
        </div>
    );
};

export default BakeryAllRecipe;