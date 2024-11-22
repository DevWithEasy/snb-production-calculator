import React from 'react';
import { Tr } from '../Index'

const LachchaExcel = ({ product, total, totalProcessLoss, output, carton, excelRef }) => {
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
                <Tr title='Flour A Grade' unit='Kg' value={product?.ingredients?.flourGrade_A} />
                <Tr title='Flour B Grade' unit='Kg' value={product?.ingredients?.flourGrade_B} />
                <Tr title='Palm Oil Super' unit='Kg' value={product?.ingredients?.palmOilSuper} />
                <Tr title='Starch Powder' unit='Kg' value={product?.ingredients?.starchPowder} />
                <Tr title='Dalda Hard Pusti' unit='Kg' value={product?.ingredients?.daldaHardPUSTI} />
                <Tr title='Ghee' unit='Kg' value={product?.ingredients?.ghee} />
                <Tr title='Ghee Flavour' unit='Kg' value={product?.ingredients?.gheeFlavour} />
                <Tr title='TBHQ' unit='Kg' value={product?.ingredients?.tbhq} />
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

export default LachchaExcel;