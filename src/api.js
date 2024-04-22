import axios from 'axios'

const searchImage = async(term) => {
    const url = 'http://api.unspash.com/search/photo/?client_id=Z1QMLmgbCidWS8LyCoKuDM_oe6AW5uwOmo_hU0DQk54'

    const response = await axios.get(url, {
        params: {
            query: term
        }
    })

    console.log(term)
    console.log(response.data.results)
    return response.data.results
}

export default searchImage