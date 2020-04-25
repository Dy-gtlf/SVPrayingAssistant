const SVPortalAPI = {
    CORS_ANYWHERE:'https://cors-anywhere.herokuapp.com/',
    async fetchDeck(code){
        let resp = await this.fetchDeckHash(code);
        let hash = resp.data.hash
        return await this.fetchDeckData(hash);
    },
    async fetchDeckHash(code){
        return await this.OverCORSRequest('shadowverse-portal.com/api/v1/deck/import?format=json&deck_code='+code);
    },
    async fetchDeckData(hash){
        return await this.OverCORSRequest('https://shadowverse-portal.com/api/v1/deck?format=json&lang=ja&hash='+hash)
    },
    async OverCORSRequest(url){
        url = this.CORS_ANYWHERE + url;
        let e = await fetch(url);
        return await e.json()
    },
}

// await SVPortalAPI.fetchDeck('nzbs')