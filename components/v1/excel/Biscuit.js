import React from 'react';
import { Tr } from '../Index'

const BiscuitExcel = ({ product, total, totalProcessLoss, output, carton, excelRef }) => {
    const {
        version,
        name,
        section,
        packetWeight,
        packetPerCarton,
        processLoss,
        foilWeight,
    } = product

    return (
        <table ref={excelRef} className='hidden'>
            <tbody>
                <tr>
                    <td></td>
                    <td colSpan={3} style={{ color: 'white', background: '#64748b', border: 'border 1px solid #cbd5e1', textAlign: 'center', fontSize: '18px' }}>Product Information</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td colSpan={2}>Section</td>
                    <td>{section}</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td colSpan={2}>Product Name</td>
                    <td>{name}</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td colSpan={2}>Version</td>
                    <td style={{
                        textAlign: 'center',
                    }}>{version}</td>
                    <td></td>
                </tr>

                <Tr {...{
                    title: 'Packet Weight',
                    unit: 'gm',
                    value: packetWeight
                }} />
                <Tr {...{
                    title: 'Packet Per Carton',
                    unit: 'Pkt',
                    value: packetPerCarton
                }} />
                <Tr {...{
                    title: 'Process Loss',
                    unit: '%',
                    value: processLoss
                }} />
                <Tr {...{
                    title: 'Foil Weight',
                    unit: 'gm',
                    value: foilWeight
                }} />
                <Tr {...{
                    title: 'Carton Per Batch',
                    unit: 'Ctn',
                    value: carton
                }} />
                <tr>
                    <td></td>
                    <td colSpan={3}></td>
                    <td></td>
                </tr>
                <tr>
                    <td> </td>
                    <td
                        style={{
                            background: '#e2e8f0',
                            border: '0.2px solid #94a3b8'
                        }}
                    >
                        Raw Materials Name
                    </td>
                    <td
                        style={{
                            textAlign: 'center',
                            background: '#e2e8f0',
                            border: '0.2px solid #94a3b8'
                        }}
                    >
                        Unit
                    </td>
                    <td
                        style={{
                            textAlign: 'center',
                            background: '#e2e8f0',
                            border: '0.2px solid #94a3b8'
                        }}
                    >
                        Quantity
                    </td>
                    <td></td>
                </tr>

                <Tr title='Ammonium Bi Carbonate' unit='Kg' value={product?.ingredients?.ammonium} />

                <Tr title='Black Cumin' unit='Kg' value={product?.ingredients?.blackCumin} />

                <Tr title='Bit Salt' unit='Kg' value={product?.ingredients?.bitSalt} />

                <Tr title='Butter Flavour SK' unit='Kg' value={product?.ingredients?.butterFlavourSK} />

                <Tr title='Butter Flavour SYMEGA' unit='Kg' value={product?.ingredients?.butterFlavourSYMEGA} />

                <Tr title='Butter Solid' unit='Kg' value={product?.ingredients?.butterSolid} />

                <Tr title='Butter Oil Substitute' unit='Kg' value={product?.ingredients?.butterOilSubstitute} />

                <Tr title='Chocolate Brown Colour 815' unit='Kg' value={product?.ingredients?.chocolateBrownColour_815} />

                <Tr title='Aspertem' unit='Kg' value={product?.ingredients?.aspertem} />

                <Tr title='Chocolate Flavour KH' unit='Kg' value={product?.ingredients?.chocolateFlavourKH} />

                <Tr title='Calcium Carbonate' unit='Kg' value={product?.ingredients?.calciumCarbonate} />

                <Tr title='Craker Enzyme' unit='Kg' value={product?.ingredients?.crakerEnzyme} />

                <Tr title='Citric Acid Mono' unit='Kg' value={product?.ingredients?.citricAcidMono} />

                <Tr title='Cocoa Powder Black 910' unit='Kg' value={product?.ingredients?.cocoaPowderBlack_910} />

                <Tr title='Dalda Soft HILSA' unit='Kg' value={product?.ingredients?.daldaSoftHILSA} />

                <Tr title='Cardamon Flavour' unit='Kg' value={product?.ingredients?.cardamonFlavour} />

                <Tr title='Flour Grade A' unit='Kg' value={product?.ingredients?.flourGrade_A} />

                <Tr title='Flour Grade B' unit='Kg' value={product?.ingredients?.flourGrade_B} />

                <Tr title='Flour Grade C' unit='Kg' value={product?.ingredients?.flourGrade_C} />

                <Tr title='Glucose Powder' unit='Kg' value={product?.ingredients?.glucosePowder} />

                <Tr title='Lemon Flavour' unit='Kg' value={product?.ingredients?.lemonFlavour} />

                <Tr title='Lemon Yellow Colour' unit='Kg' value={product?.ingredients?.lemonYellowColour} />

                <Tr title='Soya Lecithine' unit='Kg' value={product?.ingredients?.soyaLecithine} />

                <Tr title='Liquid Glucose' unit='Kg' value={product?.ingredients?.liquidGlucose} />

                <Tr title='Milk Flavour KH' unit='Kg' value={product?.ingredients?.milkFlavourKH} />

                <Tr title='Orange Flavour' unit='Kg' value={product?.ingredients?.orangeFlavour} />

                <Tr title='Onion Flavour Green' unit='Kg' value={product?.ingredients?.onionFlavourGreen} />

                <Tr title='Onion Flavour SYMEGA' unit='Kg' value={product?.ingredients?.onionFlavourSYMEGA} />

                <Tr title='Onion Powder' unit='Kg' value={product?.ingredients?.onionPowder} />

                <Tr title='Palm Oil Super' unit='Kg' value={product?.ingredients?.palmOilSuper} />

                <Tr title='Pineapple Flavour' unit='Kg' value={product?.ingredients?.pineappleFlavour} />

                <Tr title='Palm Corn Oil' unit='Kg' value={product?.ingredients?.palmCornOil} />

                <Tr title='Super Salt' unit='Kg' value={product?.ingredients?.superSalt} />

                <Tr title='Sodium Acid Pyro Phosphet' unit='Kg' value={product?.ingredients?.sodiumAcidpyroPhosphet} />

                <Tr title='Skim Milk Powder' unit='Kg' value={product?.ingredients?.skimMilkPowder} />

                <Tr title='Sodium Meta Bi Sulphate' unit='Kg' value={product?.ingredients?.sodiumMetaBiSulphate} />

                <Tr title='Sodium Bi Carbonate' unit='Kg' value={product?.ingredients?.sodiumBiCarbonate} />

                <Tr title='Starch Powder' unit='Kg' value={product?.ingredients?.starchPowder} />

                <Tr title='Sugar' unit='Kg' value={product?.ingredients?.sugar} />

                <Tr title='Testing Salt' unit='Kg' value={product?.ingredients?.testingSalt} />

                <Tr title='TBHQ' unit='Kg' value={product?.ingredients?.tbhq} />

                <Tr title='Vanilin Powder' unit='Kg' value={product?.ingredients?.vanilinPowder} />

                <Tr title='Onion Chieves' unit='Kg' value={product?.ingredients?.onionChieves} />

                <Tr title='Coconut Flavour' unit='Kg' value={product?.ingredients?.coconutFlavour} />

                <Tr title='Butta Belly Flavour' unit='Kg' value={product?.ingredients?.buttaBellyFlavour} />

                <Tr title='Coconut Powder' unit='Kg' value={product?.ingredients?.coconutPowder} />

                <Tr {...{
                    title: 'Total',
                    unit: '',
                    value: total
                }} />
                <Tr {...{
                    title: 'Process Loss',
                    unit: '',
                    value: totalProcessLoss
                }} />
                <Tr {...{
                    title: 'Output',
                    unit: '',
                    value: output
                }} />
            </tbody>
        </table>
    );
};

export default BiscuitExcel;