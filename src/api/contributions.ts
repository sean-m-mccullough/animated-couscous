import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Contribution, Status } from '../types/contribution';


const isDevelopment =  true // NOTE: Ideally an env e.g. process.env.NODE_ENV === 'development';

// * `PUT /contributions/:uuid` to save changes to a contribution
// * `DELETE /contributions/:uuid` to cancel a contribution
export const contributionsApi = createApi({
    reducerPath: 'contributionsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    endpoints: (build) => ({
        updateContributions: build.mutation<Contribution, { uuid: string, data: Partial<Contribution> }>({
            ...(isDevelopment ? {
                queryFn: async ({ uuid, data }) => {
                    await new Promise(res => setTimeout(res, 500));
                    console.info('Updating contribution:', uuid, data);
                    return { 
                        data: { 
                            uuid, 
                            status: data.status || Status.Pending,
                            tfsa: data.tfsa || 500,
                            rrsp: data.rrsp || 1000,
                            total: (data.tfsa || 500) + (data.rrsp || 1000),
                            date: new Date().toISOString(),
                            ...data 
                        } as Contribution
                     };
                }
            } : {
                query: ({ uuid, data }) => ({
                    url: `/contributions/${uuid}`,
                    method: 'PUT',
                    body: data,
                }),
            })
        }),
        cancelContribution: build.mutation<Contribution, string>({
            ...(isDevelopment ? {
                queryFn: async (uuid) => {
                    await new Promise(res => setTimeout(res, 500));
                    console.info('Cancelling contribution:', uuid);
                    return { 
                        data: { 
                            uuid, 
                            status: Status.Cancelled, 
                            tfsa: 0, 
                            rrsp: 0, 
                            total: 0, 
                            date: new Date().toISOString()
                        } as Contribution 
                    };
                }
            } : {   
                query: (uuid) => ({
                    url: `/contributions/${uuid}`,
                    method: 'DELETE',
                })
            })
        }),

    })
});

export const { useUpdateContributionsMutation, useCancelContributionMutation } = contributionsApi;