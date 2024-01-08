
export default class FormDTO{
    age= ''            // how old are you?
    email= ''          // what is your email address?
    phone= ''          // what is your phone number?
    goal= ''           // what do you hope to accomplish during this visit?
    isGoal= ''         // do you know why you are here today?
    diagnosis= ''      // What do you think your diagnosis is, if anything?
    curiosity= []      // what are you confused by or what do you want to know more about?
    mainConcern= ''    // what is one thing you need to talk about before you leave today?
    emailCopy= false   // I would like a copy of my responses sent to my email inbox.


    constructor(age, email, phone, goal, isGoal, diagnosis, curiosity, mainConcern, emailCopy){
        this.age=age;
        this.email=email;
        this.phone=phone;
        this.goal=goal;
        this.isGoal=isGoal;
        this.diagnosis=diagnosis;
        this.curiosity=curiosity;
        this.mainConcern=mainConcern;
        this.email=emailCopy;
    }

    static build(age, email, phone, goal, isGoal, diagnosis, curiosity, mainConcern, emailCopy){
        return new FormDTO(age, email, phone, goal, isGoal, diagnosis, curiosity, mainConcern, emailCopy);
    }
}