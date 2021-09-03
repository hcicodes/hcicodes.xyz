import { EMAIL } from '../../constants/api-constants';
import hciCodesAxios from '../axios/hci-codes-axios';

export async function email(name, email, message, recaptcha_data) {
    const response = await hciCodesAxios.post(EMAIL, { name: name, email: email, message: message, recaptcha_data: recaptcha_data })
        .then((response) => response)
        .catch((err) => ({ error: err.response }))

    console.log(response)
        
    return response;
}