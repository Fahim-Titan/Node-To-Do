export class User {
    public UserID: number;
    public UserName: string;
    // private Password: string;
    constructor(jsonData) {
      let data = JSON.parse(jsonData);
      this.UserID = data[0].Id;
      this.UserName = data[0].UserName;
    //   this.Password = data[0].Password;
    }
  }