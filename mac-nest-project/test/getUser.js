
import axios from 'axios'

const getUser = () => {

    const getRew = async() => {
        const respone = await axios.get('http://localhost:5501/randomuser');
        console.log(respone);
    }

    getRew();
}


// export default getUser