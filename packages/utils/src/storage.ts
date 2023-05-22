class EasyStorage {
  storage: Storage

  constructor (storage: 'local' | 'session') {
    if (storage === 'session') {
      this.storage = window.sessionStorage
    } else {
      this.storage = window.localStorage
    }
  }

  get<T = any>(key: string): T | null {
    const value = this.storage.getItem(key)

    if (typeof value !== 'string') {
      return value
    }

    try {
      return JSON.parse(value)
    } catch (e) {
      return value as T
    }
  }

  set (key: string, value: any) {
    value = JSON.stringify(value)
    this.storage.setItem(key, value)
  }

  remove (key: string) {
    this.storage.removeItem(key)
  }

  clear () {
    this.storage.clear()
  }
}

export const storage = {
  local: new EasyStorage('local'),
  session: new EasyStorage('session')
}
