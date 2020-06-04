import axios from 'axios'
export default function* testing(){
    return(
        console.log('this is in return')
    )
}

export async function getSuggetionsApi(userInput){
    console.log('in api',userInput)
    try {
        const response = await axios.get('http://localhost:3000/clinics', {params:{'name' : userInput}})
        console.log('response', response)
        console.log(response.statusCode)
        return response
    } catch (error) {
        console.log('error', error)
    }
}