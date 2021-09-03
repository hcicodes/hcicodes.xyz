import axios from 'axios';
import { initSettings, settings } from '../../settings';

initSettings();
const hciCodesAxios = axios.create({
    baseURL: settings.SERVER_ORIGIN,
    headers: {'Authorization': process.env.REACT_APP_HCI_CODES_API_TKN
    }
})

export default hciCodesAxios;