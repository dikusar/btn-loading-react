const styles = theme => ({
    header: {
        backgroundColor: theme.colorPrimary,
        height: theme.headerHeight,
        lineHeight: 64+'px',
        color: 'white',
        boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)'
    },
    headerTitle: {
        fontSize: 1.5 + 'em'
    },
    main: {
        width: '100%',
        padding: theme.mainContainerPadding,
        minHeight: `calc(100vh - (${theme.headerHeight}px + ${theme.mainContainerPadding}px))`,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box'
    }
})

export default styles