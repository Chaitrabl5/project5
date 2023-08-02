class HttpClient{
    async get(url){
        const response = await fetch(url)
        return await response.json()
    }

   
}

export default new HttpClient()