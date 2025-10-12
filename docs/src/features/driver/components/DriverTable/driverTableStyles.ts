export const themeForTableCell = {
  color: '#9E9E9E',
  fontWeight: 'bold',
};

export const editButtonStyles = {
  border: '1px solid',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'primary.main',
  borderRadius: '10px',
  mr: 1.5,
  p: 1,
  '&:hover': {
    backgroundColor: 'primary.light',
    color: 'white',
    borderColor: 'primary.dark',
  },
  '& svg': { fontSize: '20px' },
};
