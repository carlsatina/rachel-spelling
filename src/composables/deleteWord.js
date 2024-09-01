import { ref } from 'vue'
import axios from "axios"

const deleteWord = async (id) => {
    const response = ref (null)

    try {
        response.value = await axios.delete(process.env.VUE_APP_JSON_SERVER + '/rachel/' + id)
    } catch (err) {
        console.log('addWord: ', err)
    }

    return response.value
}

export default deleteWord