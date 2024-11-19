import React from 'react';
import { Tr } from '../Index'

const SnacksExcel = ({ product, total,totalProcessLoss,output,carton,excelRef }) => {
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
            <Tr title='Turmeric' unit='Kg' value={product?.ingredients?.turmeric}/>

<Tr title='Cinamon' unit='Kg' value={product?.ingredients?.cinamon}/>

<Tr title='Testing Salt' unit='Kg' value={product?.ingredients?.testingSalt}/>

<Tr title='Red Chili' unit='Kg' value={product?.ingredients?.redChili}/>

<Tr title='Nut Mug' unit='Kg' value={product?.ingredients?.nutMug}/>

<Tr title='Cumin' unit='Kg' value={product?.ingredients?.cumin}/>

<Tr title='Black Pepper' unit='Kg' value={product?.ingredients?.blackPepper}/>

<Tr title='Clove' unit='Kg' value={product?.ingredients?.clove}/>

<Tr title='Cardamon' unit='Kg' value={product?.ingredients?.cardamon}/>

<Tr title='Cumin Sweet' unit='Kg' value={product?.ingredients?.cuminSweet}/>

<Tr title='Bit Salt' unit='Kg' value={product?.ingredients?.bitSalt}/>

<Tr title='Ginger' unit='Kg' value={product?.ingredients?.ginger}/>

<Tr title='Rice Flask' unit='Kg' value={product?.ingredients?.riceFlask}/>

<Tr title='Sodium Bi Carbonate' unit='Kg' value={product?.ingredients?.sodiumBiCarbonate}/>

<Tr title='Raw Peanut' unit='Kg' value={product?.ingredients?.rawPeanut}/>

<Tr title='Lentil' unit='Kg' value={product?.ingredients?.lentil}/>

<Tr title='Salt' unit='Kg' value={product?.ingredients?.salt}/>

<Tr title='Palm Oil Super' unit='Kg' value={product?.ingredients?.palmOilSuper}/>

<Tr title='Anchor Dal' unit='Kg' value={product?.ingredients?.anchorDal}/>

<Tr title='Pea' unit='Kg' value={product?.ingredients?.pea}/>

<Tr title='Skim Milk Powder' unit='Kg' value={product?.ingredients?.skimMilkPowder}/>

<Tr title='Sugar' unit='Kg' value={product?.ingredients?.sugar}/>

<Tr title='Citric Acid Ano' unit='Kg' value={product?.ingredients?.citricAcidAno}/>

<Tr title='Mug Dal' unit='Kg' value={product?.ingredients?.mugDal}/>

<Tr title='Apple Green Colour' unit='Kg' value={product?.ingredients?.appleGreenColour}/>

<Tr title='Tapioca Starch' unit='Kg' value={product?.ingredients?.tapiocaStarch}/>

<Tr title='Onion Powder' unit='Kg' value={product?.ingredients?.onionPowder}/>

<Tr title='Garlic Powder' unit='Kg' value={product?.ingredients?.garlicPowder}/>

<Tr title='Jwain Masala' unit='Kg' value={product?.ingredients?.jwainMasala}/>

<Tr title='Rice Atop' unit='Kg' value={product?.ingredients?.riceAtop}/>

<Tr title='Lemon Yellow Colour' unit='Kg' value={product?.ingredients?.lemonYellowColour}/>

<Tr title='TBHQ' unit='Kg' value={product?.ingredients?.tbhq}/>

<Tr title='BBQ' unit='Kg' value={product?.ingredients?.bbq}/>
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

export default SnacksExcel;