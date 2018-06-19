const styles = theme => ({
	btn: {
        height: 36,
		padding: '0 16px',
		textTransform: 'uppercase',
        textDecoration: 'none',
		border: 'none',
		fontSize: 14,
		borderRadius: 2,
		color: theme.colorPrimary,
		backgroundColor: 'transparent',
		textAlign: 'center',
		letterSpacing: .5,
		transition: 'background-color .2s ease-out, font-size .2s ease-out',
		cursor: 'pointer',
		boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
        outline: 0
	},
	btnFloating: {
		extend: 'btn',
		width: 40,
		height: 40,
		padding: 0,
		borderRadius: 50 + '%',
		backgroundColor: theme.colorSecondary,
		'&:hover': {
			backgroundColor: theme.colorSecondaryDark,
			color: 'white',
			fontSize: 16,
		}
	}
})

export default styles