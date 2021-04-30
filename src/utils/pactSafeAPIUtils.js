import axios from 'axios';
import HE from 'he'

import {PS_AUTH_TOKEN, PS_ACCESS_ID, PS_GROUP_ID} from '@env'

const psGroupEndpoint = 'https://pactsafe.io/load/json?sid=' + PS_ACCESS_ID;
// const psLatestPublishedContractEndpoint = () => echo "hello";

export const getContractGroupByID = async (group_key, setGroup) => {
    const url = psGroupEndpoint + '&gkey=' + group_key;

    try {
        await axios.get(url, { headers: { 'Authorization': `Bearer ${PS_ACCESS_ID}` } })
        .then( (response) => {
            setGroup({ value: response.data, error: 'Group Fetch Error' });
            console.log(response.data) 
            return response.data;
        });
    } catch(error) {
        console.log(error);
    }
};

// NOTE: How do I get group ID in if it needs to come from the other call and be set in state first? 
// Do I need to grab the group ID like that? What if it's just in env variables?
export const getLatestPublishedContractById = async (contract_id, setContract) => {
    // const url = 'https://api.pactsafe.com/v1.1/contracts/' + PS_GROUP_ID + '/versions/@published'
    const url = 'https://api.pactsafe.com/v1.1/contracts/' + 117616 + '/versions/@published'

    try {
        await axios.get(url)
        .then( (response) => {
            setContract({value: HE.unescape(response.data.data.body), error: ''});
            // console.log(HE.unescape(response.data.data.body))
            return HE.unescape(response.data.data.body);
        });
    } catch (error) {
        console.log(error);
    }
};

// export const getContractById = async () => {};


export const getLatestPublishedContractById;