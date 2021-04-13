class User {
    id: string;
    name: string;
    email: string;
    image: string;
    title: string;
    chatNotification: boolean;

    constructor(id: string,name: string, email: string, image: string, title: string, chatNotification: boolean)
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.image = image;
        this.title = title;
        this.chatNotification = chatNotification; // true / false
    }
}

export default User;