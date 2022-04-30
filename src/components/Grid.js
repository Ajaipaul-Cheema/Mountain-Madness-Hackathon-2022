import React from 'react'
import Plot from 'react-plotly.js'


const Grid = ({x, y, width, height, className}) => {

    let color = '#6AD29B'

    return (
        <Plot
            className={className}
            data={[
                {type: 'line', y: y, x: x, line: {color: color}}
            ]}
            layout={ {width: width, height: height, hoverinfo: 'none'} }
        />
    )

}

export default Grid   