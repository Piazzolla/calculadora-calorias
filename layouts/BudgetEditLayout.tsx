import { Box } from '@mui/material'


interface Props {
    addIngredient: React.ReactNode,
    summary: React.ReactNode
}

export const BudgetEditLayout = ({ addIngredient, summary }: Props) => {
    return (
        <Box
            className='budget-edit-layout'
            sx={{
                display: 'flex',
                maxWidth: '100%',
            }}>
            <Box className='budget-edit-container'
             sx={{
                maxWidth: '36rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                justifyContent: 'center',

            }}
            >
                <Box>{addIngredient}</Box>
                <Box>{summary}</Box>
            </Box>
        </Box>
    )
}
