export class Command {
    static name = "test";
    static desc = "A test command that shouldn't be seen!";

    static options = [];

    static onRun(inter) {
        return;
    }

    static convert() {
        let cvtedOpt = [];
        this.options.forEach((e) => {
            cvtedOpt.push(e.convert());
        });

        return {
            "name": this.name,
            "type": 1,
            "description": this.desc,
            "options": cvtedOpt
        }
    }
}

export class CommandParameter {
    static name = "test";
    static desc = "A test parameter that shouldn't be seen!";

    static type = 3;
    static required = false;
    static choices = null;

    static convert() {
        return {
            "name": this.name,
            "type": this.type,
            "description": this.desc,
            "required": this.required,
            "choices": this.choices
        }
    }
}
