const styles = {
    container: {
        display: 'flex',
        flexGrow: 1
    },
    circle: {
        display: 'flex',
        height: 'calc(100vh - 40px)',
        width: 'calc(100vw - 40px)',
        maxWidth: 120,
        maxHeight: 120,
        margin: 'auto',
        borderRadius: 50 + '%',
        backgroundColor: '#2b9a35',
        position: 'relative'
    },
    spinnerLayer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        animation: 'fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
        borderColor: 'white',
    },

    circleClipper: {
        display: 'inline-block',
        position: 'relative',
        width: '50%',
        height: '100%',
        overflow: 'hidden',
        borderColor: 'inherit'
    },

    circleClipperLeft: {
        extend: 'circleClipper',
        float: 'left',
    },

    spinnerTriangular: {
        display: 'block',
        position: 'absolute',
        top: '7%',
        right: 0,
        width: 0,
        height: 0,
        border: '0 solid transparent',
        borderRightWidth: 13,
        borderLeftWidth: 13,
        borderBottom: '13px solid white',
        zIndex: 1,
        transform: 'rotate(65deg)'
    },

    circleClipperRight: {
        extend: 'circleClipper',
        float: 'right'
    },

    spinnerCircle: {
        width: `140%`,
        height: `70%`,
        borderWidth: 10,
        borderStyle: 'solid',
        borderColor: 'inherit',
        borderBottomColor: 'transparent !important',
        borderRadius: '50%',
        animation: 'none',
        position: 'absolute',
        top: '7%',
        right: 0,
        bottom: 0,
    },

    spinnerCircleLeft: {
        extend: 'spinnerCircle',
        left: '14%',
        borderRightColor: 'transparent !important',
        transform: 'rotate(-60deg)'
    },

    spinnerCircleRight: {
        extend: 'spinnerCircle',
        left: '-86%',
        borderLeftColor: 'transparent !important',
        transform: 'rotate(430deg)'
    },

    inner: {
        margin: 'auto',
        fontSize: 4 + 'rem',
        color: 'white'
    }
}

export default styles