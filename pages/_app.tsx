import '../styles/global.css';
import type { AppProps } from 'next/app';
import { BudgetProvider } from 'context/budget';
//import { Lato } from '@next/font/google'

// const lato = Lato({ 
//     weight: '400',
//     style: 'normal',
//     subsets: ['latin'] 
// })

function CalBudgetApp({ Component, pageProps }: AppProps) {

    return (
        <BudgetProvider>
            <Component {...pageProps} />
        </BudgetProvider>

    )

}


export default CalBudgetApp;