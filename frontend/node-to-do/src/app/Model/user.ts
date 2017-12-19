export class User {
    public Id: number;
    public UserName: string;
    // private Password: string;
    constructor() {}

    setUser(jsonData) {
      const data = JSON.parse(jsonData);
      this.Id = data[0].Id;
      this.UserName = data[0].UserName;
      return this;
    //   this.Password = data[0].Password;
    }

    getUser(jsonData) {
      const data = JSON.parse(jsonData);
      this.Id = data.Id;
      this.UserName = data.UserName;
      return this;
    }
  }
