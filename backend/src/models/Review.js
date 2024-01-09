export default class Review{
    doctorName= ''
    rating= ''
    comment= ''

    constructor(doctorName, rating, comment){
        this.doctorName=doctorName;
        this.rating=rating;
        this.comment=comment;
    }

    static build(doctorName, rating, comment){
        return new UserContact(doctorName, rating, comment);
    }
}