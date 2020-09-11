// import { datetimeUnixNow, datetimeUnixNowAddSecs } from 'modules/@hubblecommerce/hubble/core/utils/datetime';
import { datetimeUnixNow, datetimeUnixNowAddSecs } from '~/utils/datetime';

export const state = () => ({
            cacheTTL: 300,

            // api
            apiLocale: null,

            // stuff
            pageType: null,

            // cmsObject
            cmsObject: {}
})

export const mutations = {
            setCmsObject (state, value) {
                state.cmsObject = value;
            },
            setApiLocale (state, item) {
                state.apiLocale = item;
            },
            setPageType (state, item) {
                state.pageType = item;
            }
}

export const getters = {
            getApiLocale (state)  {
                return state.apiLocale;
            },
            getPageType (state)  {
                return state.pageType;
            },
            getDataProductUrls (state)  {
                return state.dataProductUrls;
            }
}

export const actions = {
            async getPage({ commit, dispatch, rootState }, payload) {
                //console.log("context in actions: ", context);
                // console.log("inside modApiResources the payload passed as the path has val: ", payload);
                return new Promise((resolve, reject) => {
                    dispatch(
                        'modApi/apiCall',
                        {
                            action: 'post',
                            tokenType: 'sw',
                            apiType: 'data',
                            endpoint: '/store-api/v1/pwa/page',
                            data: {
                                path: payload,
                                associations: {
                                    categories: {},
                                    manufacturer: {
                                        associations: {
                                            media: {},
                                        },
                                    },
                                    media: {},
                                    seoUrls: {},
                                    crossSellings: {},
                                    children: {
                                        associations: {
                                            options: {
                                                associations: {
                                                    group: {},
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        { root: true }
                    )
                        .then(response => {
                            // console.log("api call was successful - response has val: ", response);

                            commit('setCmsObject', response.data.cmsPage);

                            resolve(response);
                        })
                        .catch(error => {
                            console.log("inside modApiResources - the apicall to get page data was not successful")
                            reject(error);
                        });
                });
            }
}
