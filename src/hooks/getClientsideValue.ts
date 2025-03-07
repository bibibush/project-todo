export default class ClientsideValue {
  private isOk: boolean = typeof window !== "undefined";

  getLocalStorage(params: string) {
    const result = this.isOk ? localStorage.getItem(params) : null;

    return result;
  }
  setLocalStorage(key: string, value: string) {
    if (!this.isOk) {
      return;
    }

    localStorage.setItem(key, value);
  }
  removeLocalStorage(key: string) {
    if (!this.isOk) {
      return;
    }

    localStorage.removeItem(key);
  }

  getElementId(params: string) {
    const result = this.isOk ? document.getElementById(params) : null;

    return result;
  }
}
