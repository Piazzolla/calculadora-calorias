import { Box } from '@mui/material'


interface Props {
    addIngredient: React.ReactNode,
    summary: React.ReactNode
}

export const FoodEditLayout = () => {
    return (
        <Box
            className='food-edit-layout'
            sx={{
                display: 'flex',
                maxWidth: '100%',
            }}>
            <Box className='food-edit-container'
             sx={{
                maxWidth: '36rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                justifyContent: 'center',

            }}
            >
            </Box>
        </Box>
    )
}
