export class dataModel{
   public name:string;
    public email:string;
    public phone:string;
    public address:string;
  constructor(
    // public id:number,
      name:string,
   email:string,
   phone:string,
    address:string

  )
  {
    this.name=name;
    this.email=email;
    this.address=address;
    this.phone=phone;
  }
}