import React from 'react'

const PortfolioCardDIY = (props) => {
    const source = 'https://mui.com/static/images/cards/contemplative-reptile.jpg';
    const cardStyle = {
        width: '300px',
        height: '350px',
    };
    const imgStyle = {
        borderRadius: '10px 10px 0 0',
        borderStyle: 'none',
        borderWidth: '1px',
        borderColor: 'rgba(0,127,255,0.25)',
        width: '100%',
    };
    const contentStyle = {
        borderRadius: '0 0 10px 10px',
        borderStyle: 'none',
        borderWidth: '1px',
        borderColor: 'rgba(255,255,255,0.12)',
        width: '100%',
        backgroundColor: 'rgb(0,30,60)',
        color: 'white',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    };

    return (
        

        <div className='flex-col' style={cardStyle}>
            <img src={source} alt="lizard" style={imgStyle}></img>
            <div style={contentStyle}>
                <h3>My Project</h3>
                <p>lorem ipsum</p>
                <a>link</a>
            </div>
        </div>
    )
}

export default PortfolioCardDIY
