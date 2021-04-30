import axios from 'axios';
import HE from 'he'

// placeholder for API tokens
import {PS_AUTH_TOKEN, PS_ACCESS_ID, PS_GROUP_ID} from '@env'

const psGroupEndpoint = 'https://pactsafe.io/load/json?sid=' + PS_ACCESS_ID;

export const getContractGroupByID = async (group_key, setPsGroup) => {
    const url = psGroupEndpoint + '&gkey=' + group_key;

    try {
        await axios.get(url, { headers: { 'Authorization': `Bearer ${PS_ACCESS_ID}` } })
        .then( (response) => {
            setPsGroup({ value: response.data, error: 'Group Fetch Error' });
            console.log(response.data) 
        });
    } catch(error) {
        console.log(error);
    }
};



export const getLatestPublishedContractById;