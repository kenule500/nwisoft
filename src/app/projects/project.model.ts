

export interface Project {

    id: string;

    name: string;

    pictures: ProjectPic[];
    
    featurePic: string;

    type: ProjectType;

    details: string;

    client: string;

    link?: string;
}

export interface ProjectPic {
    id: string;

    projectId: string;

    url: string;
}
export enum  ProjectType {
    Design = "Design",
    Development = "Development"
}