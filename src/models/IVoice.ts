export interface IVoice {
    id: string;
    name: string;
    icon: string,
    tags: string[];
    fav?: boolean;
    active?: boolean;
}