

export default class UserContact{
    age= ''
    email= ''
    phone= ''

    constructor(age, email, phone){
        this.age=age;
        this.email=email;
        this.phone=phone;
    }

    static build(age, email, phone){
        return new UserContact(age, email, phone);
    }
}