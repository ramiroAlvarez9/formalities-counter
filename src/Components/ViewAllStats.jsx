import React from 'react'

const ViewAllStats = ({ viewAllStatsTranslate, hideStats, dniCount, dniAdressCount, minorUpdateCount, majorUpdateCount, passPortCount, passportDniCount, totalOfFormalities, totalOfMoney }) => {

    return (
        <>
            <div className="view--all--stats" style={{
                transform: `translateX(${viewAllStatsTranslate}%)`
            }}>
                <div className="view--all--stats--text--buttons">
                    <div className="view--all--stats--text--buttons--container--logoClose">
                        <input type="button" value="X" alt="close-stats" onClick={hideStats} />
                    </div>
                    <div className="view--all--stats--text--buttons--container--buttons">


                        <button type="button">
                            Screen Capture
                        </button>

                        <button type="button">
                            Download Excel File
                        </button>
                    </div>
                </div>
                <section className="view--all--stats__graphics">
                    <div className="view--all--stats__graphics--container">
                        <br />
                        <span className='view--all--stats__graphics--container--aboveText'>DNI</span>
                        <div className='view--all--stats__graphics--container--box--dni' style={{
                            paddingRight: `${dniCount * 10}px`,
                            backgroundColor: `#000080`

                        }}>
                            {dniCount}
                        </div>
                        <span className='view--all--stats__graphics--container--aboveText'>CAMBIO DE DOMICILIO</span>
                        <div className='view--all--stats__graphics--container--box--dni' style={{
                            paddingRight: `${dniAdressCount * 10}px`,
                            backgroundColor: `#E9C766`
                        }}>

                            {dniAdressCount}
                        </div>
                        <span className='view--all--stats__graphics--container--aboveText'>ACTUA MENOR</span>
                        <div className='view--all--stats__graphics--container--box--dni' style={{
                            paddingRight: `${minorUpdateCount * 10}px`,
                            backgroundColor: `#FF8080`
                        }}>
                            {minorUpdateCount}

                        </div>
                        <span className='view--all--stats__graphics--container--aboveText'>ACTUA MAYOR</span>
                        <div className='view--all--stats__graphics--container--box--dni' style={{
                            paddingRight: `${majorUpdateCount * 10}px`,
                            backgroundColor: `#330DB9`
                        }}>
                            {majorUpdateCount}
                        </div>
                        <span className='view--all--stats__graphics--container--aboveText'>PASAPORTE</span>
                        <div className='view--all--stats__graphics--container--box--passport' style={{
                            paddingRight: `${passPortCount * 10}px`,
                            backgroundColor: `#85bb65`

                        }}
                        >
                            {passPortCount}
                        </div>
                        <span className='view--all--stats__graphics--container--aboveText'>PASAPORTE + DNI</span>
                        <div className='view--all--stats__graphics--container--box--passport' style={{
                            paddingRight: `${passportDniCount * 10}px`,
                            backgroundColor: `#800000`


                        }}
                        >
                            {passportDniCount}
                        </div>
                    </div>


                    <div className='container__logo--text'>
                        <div className="header__totalOfFormalities">total of formalities: {totalOfFormalities}</div>
                        <div className='header__totaltotalOfMoney'>total $: {totalOfMoney}</div>
                    </div>

                </section>
            </div>
        </>
    );
}


export default ViewAllStats;