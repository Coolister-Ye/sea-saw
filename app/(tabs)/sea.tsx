import DatePicker from '@/components/SelectList/DatePicker';
import { PaperProvider } from 'react-native-paper';

export default function SeaScreen() {

    return (
        <PaperProvider>
            <DatePicker />
        </PaperProvider>
    );
}