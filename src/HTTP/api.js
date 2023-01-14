const API_URL = 'http://router.project-osrm.org/route/v1/driving/'

const fetcher = async (url, method) => {
   const response = await fetch(API_URL + url + '?geometries=geojson', {
      method: method,
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
      },
   })
   const result = await response.json();
   return result
}

const request = async (url, method) => {
   const result = await fetcher(url, method)
   if (result.code === 'Ok') {
      return await result
   }
   else {
      throw new Error(result.message)
   }
}

export const ApiServices = {
   get: async (url) => {
      return await request(url, 'GET')
   },
}