const styles = theme => ({
    '@keyframes spin': {
        from: { transform: 'rotate(56deg)' },
        to: {transform: 'rotate(395deg)'}
    },

    '@keyframes spinReverse': {
        from: { transform: 'rotate(359deg)' },
        to: {transform: 'rotate(56deg)'}
    },

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
        transform: 'rotate(56deg)'
    },

    spinnerCircleRightAnimate: {
        extend: 'spinnerCircle',
        left: '-86%',
        borderLeftColor: 'transparent !important',
        transform: 'rotate(395deg)',
        animation: `spin ${theme.spinnerTimeAnimation}ms linear`,

        '&:before': {
             display: 'block',
            position: 'absolute',
            bottom: '2%',
            right: '-5%',
            width: 0,
            height: 0,
            border: '0 solid transparent',
            borderRightWidth: 13,
            borderLeftWidth: 13,
            borderBottom: '13px solid white',
            zIndex: 1,
            transform: 'rotate(-142deg)',
            content: '""'
        }
    },

    spinnerCircleRightReversAnimate: {
        extend: 'spinnerCircleRightAnimate',
        transform: 'rotate(56deg)',
        animation: `spinReverse ${theme.spinnerTimeAnimation}ms linear`,

        '&:before': {
            content: ''
        }
    },

    inner: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        height: '100%',
        margin: 'auto',
        fontSize: 4 + 'rem',
        color: 'white'
    }
})

export default styles