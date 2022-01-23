import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export const notyf = new Notyf({
    types: [
        {
            type: 'success',
            className: 'notyf__toast--success',
            backgroundColor: '#09bc8a',
            icon: {
                className: 'notyf__icon--success',
                tagName: 'i'
            }
        }
    ],
    position: {
        x: 'right',
        y: 'top'
    }
});
