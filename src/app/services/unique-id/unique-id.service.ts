import { Injectable } from "@angular/core";
import  {v4 as uuidv4} from 'uuid';

@Injectable()
export class UniqueIdService {

    private numberOfGeneratedIds = 0;

    // the prefix starts with an uppercase or lowercase letter and is followed by a hyphen and then comes something else
    private validId = /^[A-Za-z]+[\w\-\:\.*$]/;

    public generateUniqueIdWithPrefix(prefix: string | any): string {
        if(!prefix || !this.validId.test(prefix)) throw new Error("Prefix can not be empty");

        const uniqueId = this.generateUniqueId()
        this.numberOfGeneratedIds++;

        return `${prefix}-${uniqueId}`;
    }

    // unique id
    private generateUniqueId(): string{
        return uuidv4();
    }

    public getNumbersOfGeneratedUniqueIds(): number {
        return this.numberOfGeneratedIds
    }
}
