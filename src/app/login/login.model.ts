export class SignInData{
    private email: string;
    private password: any;

    constructor(email: string, password: any){
        this.email = email;
        this.password = password;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }
}