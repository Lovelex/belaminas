import { storage } from '../../plugins/firebase'
import { v4 } from 'uuid'

export default {
  state: {
    storageError: null,
    storageIsLoading: false,
    url: ''
  },
  getters: {
    getStorageIsLoading: state => state.storageIsLoading,
    getStorageError: state => state.storageError,
    getUrl: state => state.url
  },
  actions: {
    async upload({ state }, payload) {
      const acceptable = ['image/png', 'image/jpeg']
      if (!acceptable.includes(payload.file.type)) {
        return state.storageError = 'Somente imagens png/jpeg'
      }
      state.storageIsLoading = true
      const path = payload.path
      const name = payload.name
      const fullPath = `${path}/${name}_${v4()}`
      const storageRef = storage.ref(fullPath)
      try {
        const putRef = await storageRef.put(payload.file)
        state.url = await putRef.ref.getDownloadURL()
        state.storageIsLoading = false
        state.storageError = null
      } catch (e) {
        console.log(e.message)
        state.storageIsLoading = false
        state.storageError = e.message
      }
    },
    async delFile({ state }, payload) {
      const storageRef = storage
        .refFromURL(payload)
      try {
        await storageRef.delete()
        state.storageIsLoading = false
        state.storageError = null
      } catch (e) {
        console.log(e.message)
        state.storageIsLoading = false
        state.storageError = e.message
      }

    }
  }
}