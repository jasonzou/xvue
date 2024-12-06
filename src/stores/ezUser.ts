import type { ICommResp, IReqLogin, IRespLogin, IUser } from '@/types/IUser'
import axiosInstance from '@/api/handle'
import { GlobalSettings } from '@/GlobalSettings'
import router from '@/router'
// pinia
import { defineStore } from 'pinia'

const bearer_token = GlobalSettings.token

export const ezUserStore = defineStore('ezUserStore', {
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: '',
    token: '',
    returnURl: '/login',
    authorized: false,
    expired: 0,
    admin: false,
    users: [] as IUser[],
  }),
  getters: {
    isAdmin(): boolean {
      return this.admin
    },
    getUsers(): IUser[] {
      return this.users
    },
    isAuthorized(): boolean {
      return this.authorized
    },
    isExpired(): boolean {
      // TODO
      // timeStamp =
      return false
    },
    getToken(): string {
      return this.token
    },
  },
  actions: {
    async login1(login: IReqLogin): Promise<IRespLogin> {
      // TO-DO
      console.log('login1')
      const username = login.username
      const password = login.password
      const data = {
        username,
        password,
      }
      return axiosInstance.post('/user/login', data)
    },
    async login(username: string, password: string): Promise<any> {
      // this works but need to refactor the code
      console.log('loginoooooooooooooooo')
      console.log(bearer_token)
      console.log(username, password)
      const data = {
        username,
        password,
      }
      const config = {
        headers: {
          'Authorization': `Bearer ${bearer_token}`,
          'Content-Type': 'application/json',
        },
      }

      const bodyParameters = {
        username,
        password,
      }
      console.log(bodyParameters, config)

      return axiosInstance.post('/user/login', bodyParameters, config)
    },
    logout() {
      localStorage.clear()
      this.$reset()
      router.push({ name: 'login' })
    },
    async getUserById(id: number): Promise<IUser> {
      // TO-DO
      console.log('get user by id')
      const response = axiosInstance.get(`/user/id/${id}`)
      const res: IUser = { id: 0, username: '', password: '', roles: '' }
      res.id = 0
      return res
    },
    async modifyUser(id: number, payload: IUser): Promise<ICommResp> {
      // TO-DO
      const res: ICommResp = { ok: false, error: 'error' }
      console.log(id, payload)
      const response = axiosInstance.put(`/user/id/${id}`, payload)
      return res
    },
    async addUser(payload: IUser): Promise<ICommResp> {
      // TO-DO
      const res: ICommResp = { ok: false, error: 'error' }
      console.log(payload)
      const response = axiosInstance.put('/user', payload)
      return res
    },
    async deleteUser(id: number): Promise<ICommResp> {
      // TO-DO
      const res: ICommResp = { ok: false, error: 'error' }
      console.log(id)
      const response = axiosInstance.delete(`/user/${id}`)
      return res
    },
    async listAllUsers(): Promise<IUser[]> {
      // TO-DO
      const res: IUser[] = [{ id: 0, username: '', password: '', roles: '' }]

      const response = axiosInstance.get('/user/list')
      return res
    },
  },
  persist: {
    enabled: true,
  },
})
