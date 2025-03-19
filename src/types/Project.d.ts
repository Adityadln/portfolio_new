export interface Project {
    id: string;
    links: {
        live?: `${string}.${string}`;
        figma?: string;
        github?: `/${string}` | `${string}/${string}`,
        huggingface?: string;
    };
    techs: string[];
    hasImage?: boolean;
    isInProgress?: boolean
}