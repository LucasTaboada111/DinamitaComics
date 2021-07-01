
import axios from 'axios'

class CountryService {

    getCountries() {
        return axios.get('data/countries.json')
            .then(res => res.data.data);
    }
}

export default CountryService