import { ref } from 'vue'
import axios from "axios"

const addWord = async (word) => {
    const response = ref (null)

    console.log("Addword: ", word.value)
    try {
        response.value = await axios.post(process.env.VUE_APP_JSON_SERVER + '/rachel', {
            spelling: word.value
        })
    } catch (err) {
        console.log('addWord: ', err)
    }

    return response.value
}

export default addWord