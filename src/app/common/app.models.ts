export class UserProfile {
    public firstname: string;
    public lastname: string;
    public adUsername: string;
    public username: string;
    public memberof: string;
}

export class TideEvent {
    constructor(
        public title: string,
        public description: string,
        public program: string,

        public date: string,
        public month: string,
        public year: string,

        public completed: boolean = false,
        public tags: string[] = [],
        public info: string[] = [],
        public outcomes: string[]
    ) { }
}