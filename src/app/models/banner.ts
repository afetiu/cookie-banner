import { Accordian } from "./accordian"; 

export interface Banner {
    BannerId: number;
    accordian: Accordian[];
    Created: Date;
    LastUpdated: Date;
}
