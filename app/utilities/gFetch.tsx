import axios from "axios";
const SERVER_URL = "https://api.evevolved.org/";
// const SERVER_URL = "http://localhost:3007";


export async function gFetch(query:any, variables:any) {
    const makeAxiosCall = async (query: any, variables: any) => {
        try {

            const headers = {
                'content-type': 'application/json',
            };
            const requestBody = {
                query: query,
                variables
            };
            const options = {
                method: 'POST',
                url: SERVER_URL,
                headers,
                data: requestBody
            };
            const response = await axios(options);
            console.log('RESPONSE FROM AXIOS REQUEST', response.data);
            return response.data;
        } catch (err) {
            console.log('ERROR DURING AXIOS REQUEST', err);
        } finally {
        }
    }
    return makeAxiosCall(query, variables)
}
