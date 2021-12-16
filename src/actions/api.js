import axios from "axios";

const baseUrl = "http://localhost:51774/api/"


export default {

    dCandidate(url = baseUrl + 'DCandidate/'){
        return{
            fetchAll: () => axios.post(url + 'GetAll'),
            fetchById: id => axios.post(url+'GetById' + id),
            create: newRecord => axios.post(url+ 'Add', newRecord),
            update: (id, updateRecord) => axios.post(url+'Update'+ id, updateRecord),
            delete: id => axios.post(url+'Delete'+ id)
        }
    }
}