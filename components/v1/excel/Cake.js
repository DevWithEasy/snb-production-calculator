import React from 'react';
import { Tr } from '../Index'

const CakeExcel = ({ product, total,totalProcessLoss,output,carton,excelRef }) => {
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
            <Tr title='Vanilin Powder' unit='Kg' value={product?.ingredients?.vanilinPowder}/>

<Tr title='butter Oil Substitute' unit='Kg' value={product?.ingredients?.butterOilSubstitute}/>

<Tr title='Cake Gel' unit='Kg' value={product?.ingredients?.cakeGel}/>

<Tr title='Cake Emulsifier' unit='Kg' value={product?.ingredients?.cakeEmulsifier}/>

<Tr title='Chocolate Brown Colour 6059' unit='Kg' value={product?.ingredients?.chocolateBrownColour_6059}/>

<Tr title='Chocolate Flavour SYMRISE' unit='Kg' value={product?.ingredients?.chocolateFlavourSYMRISE}/>

<Tr title='Chocolate Paste' unit='Kg' value={product?.ingredients?.chocolatePaste}/>

<Tr title='Citric Acid Mono' unit='Kg' value={product?.ingredients?.citricAcidMono}/>

<Tr title='Egg' unit='Kg' value={product?.ingredients?.egg}/>

<Tr title='Flour B Grade' unit='Kg' value={product?.ingredients?.flourGrade_B}/>

<Tr title='Flour C Grade' unit='Kg' value={product?.ingredients?.flourGrade_C}/>

<Tr title='Glycerine' unit='Kg' value={product?.ingredients?.glycerine}/>

<Tr title='Isopropyl Alcohol' unit='Kg' value={product?.ingredients?.isopropylAlcohol}/>

<Tr title='Milk Flavour KING' unit='Kg' value={product?.ingredients?.milkFlavourKing}/>

<Tr title='Paraffin Oil' unit='Kg' value={product?.ingredients?.paraffinOil}/>

<Tr title='Potassium Sorbate' unit='Kg' value={product?.ingredients?.potassiumSorbate}/>

<Tr title='Super Salt' unit='Kg' value={product?.ingredients?.superSalt}/>

<Tr title='Skim Milk Powder' unit='Kg' value={product?.ingredients?.skimMilkPowder}/>

<Tr title='Sorbitol' unit='Kg' value={product?.ingredients?.sorbitol}/>

<Tr title='Soya Lecithine' unit='Kg' value={product?.ingredients?.soyaLecithine}/>

<Tr title='Sugar' unit='Kg' value={product?.ingredients?.sugar}/>

<Tr title='Palm Oil Super' unit='Kg' value={product?.ingredients?.palmOilSuper}/>

<Tr title='TBHQ' unit='Kg' value={product?.ingredients?.tbhq}/>

<Tr title='Vanila Flavour FORZONE' unit='Kg' value={product?.ingredients?.vanilaFlavourFORZONE}/>

<Tr title='Vanila Flavour KH' unit='Kg' value={product?.ingredients?.vanilaFlavourKH}/>

<Tr title='Xanthem Gum' unit='Kg' value={product?.ingredients?.xanthemGum}/>

<Tr title='Sodium Acid pyro Phosphet' unit='Kg' value={product?.ingredients?.sodiumAcidpyroPhosphet}/>

<Tr title='Sodium Bi Carbonate' unit='Kg' value={product?.ingredients?.sodiumBiCarbonate}/>

<Tr title='Starch Powder' unit='Kg' value={product?.ingredients?.starchPowder}/>
            <Tr {...{
                title : 'Total',
                unit : '',
                value : total
            }}/>
            <Tr {...{
                title : 'Process Loss',
                unit : '',
                value : totalProcessLoss
            }}/>
            <Tr {...{
                title : 'Output',
                unit : '',
                value : output
            }}/>

        </table>
    );
};

export default CakeExcel;