class StorageService {
  private static instance: StorageService;
  private fakeResponseTime = 1000;

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

  setItem(key: string, value: string) {
    return this.fakeAsync(() => localStorage.setItem(key, value));
  }

  getItem(key: string) {
    return this.fakeAsync(() => localStorage.getItem(key));
  }

  generateRandomUUID() {
    return crypto.randomUUID();
  }
}

export default StorageService.getInstance();
