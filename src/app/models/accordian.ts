import { PluginList } from "./plugin-list";

export interface Accordian {
    Localization: string;
    CategoyId: number;
    CategoyHeading: string;
    IsMandatory: boolean;
    CategoyText: string;
    PluginList: PluginList[];
    ExtraSettings: string;
    Enabled: true;
}