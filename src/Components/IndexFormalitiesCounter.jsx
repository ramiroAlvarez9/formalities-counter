import { React, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import './IndexFormalitiesCounter.scss'
import ViewAllStats from './ViewAllStats';

const IndexFormalitiesCounter = () => {

    //show or hidde the stats
    const [viewAllStatsTranslate, setViewAllStatsTranslate] = useState('-999')

    const hideStats = () => setViewAllStatsTranslate('-999')

    //Input value that will be decrease and increase
    const [dniInputValue, setDniInputValue] = useState(0);
    const [dniAdressChangeInputValue, setDniAdressChangeInputValue] = useState(0);
    const [minorUpdateChangeInputValue, setMinorUpdateChangeInputValue] = useState(0);
    const [majorUpdateChangeInputValue, setMajorUpdateChangeInputValue] = useState(0);
    const [passportInputValue, setPassportInputValue] = useState(0);
    const [passportDniInputValue, setPassportDniInputValue] = useState(0);

    //state for total of formalities 
    const [totalOfFormalities, setTotalOfFormalities] = useState(0)

    //state for total money of formalitie
    const [totalOfMoney, setTotalOfMoney] = useState(0)

    useEffect(() => {
        setTotalOfFormalities(dniInputValue + dniAdressChangeInputValue + minorUpdateChangeInputValue + majorUpdateChangeInputValue + passportInputValue + passportDniInputValue)
        setTotalOfMoney((dniInputValue * 300) + (dniAdressChangeInputValue * 300) + (minorUpdateChangeInputValue * 300) + (majorUpdateChangeInputValue * 300) + (passportInputValue * 4000)+ (passportDniInputValue * 4300))
    })


    return (

        <>
            <header className="header">
                <div className='container__logo' onClick={() => { setViewAllStatsTranslate('0') }}>
                    <Icon icon="ion:finger-print" color="#009abe" className="header__logo" onClick={() => { setViewAllStatsTranslate('0') }} />

                </div>

                <div className='container__logo--text'>
                    <div className="header__totalOfFormalities">total of formalities:{totalOfFormalities}</div>
                    <div className='header__totaltotalOfMoney'>total $: {totalOfMoney}</div>
                </div>
            </header>
            <section className='section'>
                <div className="section__formalitie">

                    <p className="section__formalitie--text">
                        DNI
                    </p>

                    <div className="section__formalitie--container">
                        <span className="section__formalitie--container--counter" onClick={() => dniInputValue === 0 ? setDniInputValue(0) : setDniInputValue(dniInputValue - 1)} >-</span>
                        <input type="text" value={dniInputValue} className="section__formalitie--container--input" min="0" />
                        <span className="section__formalitie--container--counter" onClick={() => setDniInputValue(dniInputValue + 1)}>+</span>
                    </div>
                </div>
                <div className="section__formalitie">

                    <p className="section__formalitie--text">
                        DNI + CAMBIO DE DOMICILIO
                    </p>
                    <div className="section__formalitie--container">
                        <span className="section__formalitie--container--counter" onClick={() => dniAdressChangeInputValue === 0 ? setDniAdressChangeInputValue(0) : setDniAdressChangeInputValue(dniAdressChangeInputValue - 1)} >-</span>
                        <input type="text" value={dniAdressChangeInputValue} className="section__formalitie--container--input" />
                        <span className="section__formalitie--container--counter" onClick={() => setDniAdressChangeInputValue(dniAdressChangeInputValue + 1)} >+</span>
                    </div>
                </div>
                <div className="section__formalitie">

                    <p className="section__formalitie--text">
                        ACTUALIZACION MENOR
                    </p>
                    <div className="section__formalitie--container">
                        <span className="section__formalitie--container--counter" onClick={() => minorUpdateChangeInputValue === 0 ? setMinorUpdateChangeInputValue(0) : setMinorUpdateChangeInputValue(passportInputValue - 1)} >-</span>
                        <input type="text" value={minorUpdateChangeInputValue} className="section__formalitie--container--input" />
                        <span className="section__formalitie--container--counter" onClick={() => setMinorUpdateChangeInputValue(minorUpdateChangeInputValue + 1)} >+</span>
                    </div>

                </div>
                <div className="section__formalitie">

                    <p className="section__formalitie--text">
                        ACTUALIZACION MAYOR
                    </p>

                    <div className="section__formalitie--container">
                        <span className="section__formalitie--container--counter" onClick={() => majorUpdateChangeInputValue === 0 ? setMajorUpdateChangeInputValue(0) : setMajorUpdateChangeInputValue(majorUpdateChangeInputValue - 1)} >-</span>
                        <input type="text" value={majorUpdateChangeInputValue} className="section__formalitie--container--input" />
                        <span className="section__formalitie--container--counter" onClick={() => setMajorUpdateChangeInputValue(majorUpdateChangeInputValue + 1)} >+</span>
                    </div>

                </div>

                <div className="section__formalitie">

                    <p className="section__formalitie--text">
                        PASAPORTE
                    </p>

                    <div className="section__formalitie--container">
                        <span className="section__formalitie--container--counter" onClick={() => passportInputValue === 0 ? setPassportInputValue(0) : setPassportInputValue(passportInputValue - 1)} >-</span>
                        <input type="text" value={passportInputValue} className="section__formalitie--container--input" />
                        <span className="section__formalitie--container--counter" onClick={() => setPassportInputValue(passportInputValue + 1)} >+</span>
                    </div>

                </div>
                <div className="section__formalitie">

                    <p className="section__formalitie--text">
                        PASAPORTE + DNI
                    </p>

                    <div className="section__formalitie--container">
                        <span className="section__formalitie--container--counter" onClick={() => passportDniInputValue === 0 ? setPassportDniInputValue(0) : setPassportDniInputValue(passportDniInputValue - 1)} >-</span>
                        <input type="text" value={passportDniInputValue} className="section__formalitie--container--input" />
                        <span className="section__formalitie--container--counter" onClick={() => setPassportDniInputValue(passportDniInputValue + 1)} >+</span>
                    </div>

                </div>


            </section>

            <footer className="footer">
                <button type="button" onClick={() => { setViewAllStatsTranslate('0') }}>
                    VIEW ALL STATS
                </button>
            </footer>

            < ViewAllStats

                viewAllStatsTranslate={viewAllStatsTranslate}
                hideStats={hideStats}
                dniCount={dniInputValue}
                dniAdressCount={dniAdressChangeInputValue}
                minorUpdateCount={minorUpdateChangeInputValue}
                majorUpdateCount={majorUpdateChangeInputValue}
                passPortCount={passportInputValue}
                passportDniCount={passportDniInputValue}
                totalOfFormalities={totalOfFormalities}
                totalOfMoney = {totalOfMoney}


            />



        </>


    );
}

export default IndexFormalitiesCounter;