import React from 'react';
import { Tr } from '../Index'

const BakeryExcel = ({ product, total, totalProcessLoss, output, carton, excelRef }) => {
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
                value: total
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

            <Tr title='Ammonium' unit='Kg' value={product?.ingredients?.ammonium} />

            <Tr title='Baking Powder' unit='Kg' value={product?.ingredients?.bakingPowder} />

            <Tr title='Black Cumin' unit='Kg' value={product?.ingredients?.blackCumin} />

            <Tr title='Bread Improver' unit='Kg' value={product?.ingredients?.breadImprover} />

            <Tr title='Butter Flavour SM' unit='Kg' value={product?.ingredients?.butterFlavourSM} />

            <Tr title='Cake Gel' unit='Kg' value={product?.ingredients?.cakeGel} />

            <Tr title='Chocolate Chips' unit='Kg' value={product?.ingredients?.chocolateChips} />

            <Tr title='Chocolate Flavour SYMRISE' unit='Kg' value={product?.ingredients?.chocolateFlavourSYMRISE} />

            <Tr title='Chocolate Paste' unit='Kg' value={product?.ingredients?.chocolatePaste} />

            <Tr title='Cocoa Powder 4011' unit='Kg' value={product?.ingredients?.cocoaPowder_4011} />

            <Tr title='Coconut Powder' unit='Kg' value={product?.ingredients?.coconutPowder} />

            <Tr title='Coconut Flavour' unit='Kg' value={product?.ingredients?.coconutFlavour} />

            <Tr title='Condenced Milk Flavour' unit='Kg' value={product?.ingredients?.condencedMilkFlavour} />

            <Tr title='Dalda Hard PUSTI' unit='Kg' value={product?.ingredients?.daldaHardPUSTI} />

            <Tr title='Dalda Soft HILSA' unit='Kg' value={product?.ingredients?.daldaSoftHILSA} />

            <Tr title='Egg' unit='Kg' value={product?.ingredients?.egg} />

            <Tr title='Egg Yellow Colour' unit='Kg' value={product?.ingredients?.eggYellowColour} />

            <Tr title='Flour A Grade' unit='Kg' value={product?.ingredients?.flourGrade_A} />

            <Tr title='Flour B Grade' unit='Kg' value={product?.ingredients?.flourGrade_B} />

            <Tr title='Flour C Grade' unit='Kg' value={product?.ingredients?.flourGrade_C} />

            <Tr title='Ghee' unit='Kg' value={product?.ingredients?.ghee} />

            <Tr title='Ghee Flavour' unit='Kg' value={product?.ingredients?.gheeFlavour} />

            <Tr title='Glucose Powder' unit='Kg' value={product?.ingredients?.glucosePowder} />

            <Tr title='Lemon Yellow Colour' unit='Kg' value={product?.ingredients?.lemonYellowColour} />

            <Tr title='Skim Milk Powder' unit='Kg' value={product?.ingredients?.skimMilkPowder} />

            <Tr title='Milk Flavour KH' unit='Kg' value={product?.ingredients?.milkFlavourKH} />

            <Tr title='Mono Saccharine' unit='Kg' value={product?.ingredients?.monoSaccharine} />

            <Tr title='Palm Oil Super' unit='Kg' value={product?.ingredients?.palmOilSuper} />

            <Tr title='Super Salt' unit='Kg' value={product?.ingredients?.superSalt} />

            <Tr title='Sodium Acid Pyro Phosphet' unit='Kg' value={product?.ingredients?.sodiumAcidPyroPhosphet} />

            <Tr title='Sodium Bi Carbonate' unit='Kg' value={product?.ingredients?.sodiumBiCarbonate} />

            <Tr title='Starch Powder' unit='Kg' value={product?.ingredients?.starchPowder} />

            <Tr title='Sugar' unit='Kg' value={product?.ingredients?.sugar} />

            <Tr title='TBHQ' unit='Kg' value={product?.ingredients?.tbhq} />

            <Tr title='Vanilin Powder Flavour' unit='Kg' value={product?.ingredients?.vanilinPowderFlavour} />

            <Tr title='Xanthem Gum' unit='Kg' value={product?.ingredients?.xanthemGum} />

            <Tr title='Yeast' unit='Kg' value={product?.ingredients?.yeast} />

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

        </table>
    );
};

export default BakeryExcel;