import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const {REACT_APP_X_RAPIDAPI_KEY} = process.env
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': `${REACT_APP_X_RAPIDAPI_KEY}`
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
console.log(cryptoApiHeaders)
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }), 
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
    }),
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    useGetCryptoHistoryQuery,
  } = cryptoApi;
