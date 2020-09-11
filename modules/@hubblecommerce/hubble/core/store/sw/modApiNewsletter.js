export const actions = {
            async signUpToNewsletter({ dispatch, rootState }, payload) {
                return new Promise((resolve, reject) => {
                    dispatch(
                        'modApi/apiCall',
                        {
                            action: 'post',
                            tokenType: 'sw',
                            apiType: 'data',
                            swContext: rootState.modCart.swtc,
                            endpoint: '/sales-channel-api/v1/newsletter/subscribe',
                            data: { email: payload.email },
                        },
                        { root: true }
                    )
                        .then(response => {
                            resolve(response);
                        })
                        .catch(err => {
                            console.log('signUpToNewsletter error: ', err);
                            reject(err);
                        });
                });
            }
}
