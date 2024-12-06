import axios from 'axios'
import axiosInstance from './handle'

class EZEditorDataService {
  getAllStanza(): Promise<any> {
    return axiosInstance.get('/stanza/list')
  }

  GetAllStanza(): Promise<any> {
    return axiosInstance.get('/stanza/list')
  }
}

export default new EZEditorDataService()
