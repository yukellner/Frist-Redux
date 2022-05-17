
import {storageService} from './async-storage.service.js'
import {utilService} from './util.service.js'
import { userService } from './user.service.js'
import { httpService } from './http.service.js'


const STORAGE_KEY = 'toyDB'

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptytoy
}


function query() {
    // return axios.get(BASE_URL).then(res => res.data)
    // return storageService.query(STORAGE_KEY)
    return httpService.get(`toy/`)
}
function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}
function remove(toyId) {
    // return Promise.reject('Not now!')
    // return storageService.remove(STORAGE_KEY, toyId)
    return httpService.delete(`toy/${toyId}`)
    
}
function save(toy) {
    if ('toy._id',toy._id) {
        return httpService.put(`toy/${toy._id}`,toy)
        // return storageService.put(STORAGE_KEY, toy)
    } else {
        // when switching to backend - remove the next line
        // toy.owner = userService.getLoggedinUser()
        return httpService.post(`toy/`,toy)
        // return storageService.post(STORAGE_KEY, toy)
    }
}

function getEmptytoy() {
    return { 
        name: 'dolly' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),  
    }
}

// TEST DATA
// storageService.post(STORAGE_KEY, 
// {
//     "_id": "t101",
//     "name": "Talking Doll",
//     "price": 123,
//     "labels": [
//         "Doll",
//         "Battery Powered",
//         "Baby"],
//     "createdAt": 1631031801011,
//     "inStock": true,
//     "reviews": ['great product', 'highly recomended']



    

// }

// ).then(x => console.log(x))



