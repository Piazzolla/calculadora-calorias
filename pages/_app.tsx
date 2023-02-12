import '../styles/global.css';
import '../styles/add-ingredient.css';
import type { AppProps } from 'next/app';
import { BudgetProvider } from 'context/budget';

function CalBudgetApp({ Component, pageProps }: AppProps) {

    return (
        <BudgetProvider>
            <Component {...pageProps} />
        </BudgetProvider>

    )

}


export default CalBudgetApp;