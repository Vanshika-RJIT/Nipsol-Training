export class dataModel{
   public id:number;
   public name:string;
    public email:string;
    public phone:string;
    public address:string;
  constructor(
    id:number,
      name:string,
   email:string,
   phone:string,
    address:string

  )
  { this.id=id;
    this.name=name;
    this.email=email;
    this.address=address;
    this.phone=phone;
  }
}