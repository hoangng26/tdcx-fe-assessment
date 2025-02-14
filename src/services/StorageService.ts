class StorageService {
  private static instance: StorageService;
  private fakeResponseTime = 500;

  private constructor() {}

  static getInstance() {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  private fakeAsync<T>(callback: () => T) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(callback());
      }, this.fakeResponseTime);
    });
  }

  setItemAsync(key: string, value: string) {
    return this.fakeAsync(() => localStorage.setItem(key, value));
  }

  getItemAsync(key: string) {
    return this.fakeAsync(() => localStorage.getItem(key));
  }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  generateRandomUUID() {
    return crypto.randomUUID();
  }
}

export default StorageService.getInstance();
