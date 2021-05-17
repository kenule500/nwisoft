
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project, ProjectType } from './project.model';

@Injectable({providedIn: 'root'})
export class ProjectService {
    private _projects = new BehaviorSubject<Project[]>([
        {
            id: '12a',
            name: 'Fish Port',
            details: 'E-comerce',
            client: 'joel',
            pictures: [
                {
                    id: 'aa1',
                    projectId: '12a',
                    url: '../../assets/relationships.jpg'
                },
                {
                    id: 'aa2',
                    projectId: '12a',
                    url: '../../assets/proj2.png'
                },
                {
                    id: 'aa3',
                    projectId: '12a',
                    url: '../../assets/proj3.png'
                }
            ],
            featurePic: '../../assets/fishport.png',
            type: ProjectType.Development,
            link: 'https://playground.busyexpand.com/fishport/'
        },
        {
            id: '12b',
            name: 'E-comerce Website',
            details: 'E-comerce',
            client: 'joel',
            pictures: [
                {
                    id: 'ab1',
                    projectId: '12b',
                    url: '../../assets/proj1.png'
                },
                {
                    id: 'ab2',
                    projectId: '12b',
                    url: '../../assets/proj2.png'
                },
                {
                    id: 'ab3',
                    projectId: '12b',
                    url: '../../assets/proj3.png'
                }
            ],
            featurePic: '../../assets/e-commerce.jpg',
            type: ProjectType.Design,
            // link: 'https://shop.busyexpand.com/'
        },
        {
            id: '12c',
            name: 'Smart Hub',
            details: 'E-comerce',
            client: 'joel',
            pictures: [
                {
                    id: 'ac1',
                    projectId: '12c',
                    url: '../../assets/proj1.png'
                },
                {
                    id: 'ac2',
                    projectId: '12c',
                    url: '../../assets/proj2.png'
                },
                {
                    id: 'ac3',
                    projectId: '12c',
                    url: '../../assets/proj3.png'
                }
            ],
            featurePic: '../../assets/banner.jpg',
            type: ProjectType.Design,
            // link: 'https://shop.busyexpand.com/'
        },
        {
            id: '12d',
            name: 'Analytic Designs',
            details: 'E-comerce',
            client: 'joel',
            pictures: [
                {
                    id: 'ad1',
                    projectId: '12d',
                    url: '../../assets/proj1.png',
                },
                {
                    id: 'ad2',
                    projectId: '12d',
                    url: '../../assets/proj2.png'
                },
                {
                    id: 'ad3',
                    projectId: '12d',
                    url: '../../assets/proj3.png'
                }
            ],
            featurePic: '../../assets/apps.png',
            type: ProjectType.Design,
            // link: 'https://shop.busyexpand.com/'
        },
        {
            id: '12d',
            name: 'Hotel Website',
            details: 'E-comerce',
            client: 'joel',
            pictures: [
                {
                    id: 'ad1',
                    projectId: '12d',
                    url: '../../assets/proj1.png',
                },
                {
                    id: 'ad2',
                    projectId: '12d',
                    url: '../../assets/proj2.png'
                },
                {
                    id: 'ad3',
                    projectId: '12d',
                    url: '../../assets/proj3.png'
                }
            ],
            featurePic: '../../assets/hotel.png',
            type: ProjectType.Development,
            link: 'https://playground.busyexpand.com/hotel/'
        },
        {
            id: '12d',
            name: 'Mobile Coin App',
            details: 'E-comerce',
            client: 'joel',
            pictures: [
                {
                    id: 'ad1',
                    projectId: '12d',
                    url: '../../assets/proj1.png',
                },
                {
                    id: 'ad2',
                    projectId: '12d',
                    url: '../../assets/proj2.png'
                },
                {
                    id: 'ad3',
                    projectId: '12d',
                    url: '../../assets/proj3.png'
                }
            ],
            featurePic: '../../assets/coin-app-2.jpg',
            type: ProjectType.Development,
            // link: 'https://shop.busyexpand.com/'
        },
        {
            id: '12d',
            name: 'Analysis',
            details: 'E-comerce',
            client: 'joel',
            pictures: [
                {
                    id: 'ad1',
                    projectId: '12d',
                    url: '../../assets/proj1.png',
                },
                {
                    id: 'ad2',
                    projectId: '12d',
                    url: '../../assets/proj2.png'
                },
                {
                    id: 'ad3',
                    projectId: '12d',
                    url: '../../assets/proj3.png'
                }
            ],
            featurePic: '../../assets/analysis.jpg',
            type: ProjectType.Development,
            // link: 'https://shop.busyexpand.com/'
        },
        {
            id: '12d',
            name: 'Health',
            details: 'E-comerce',
            client: 'joel',
            pictures: [
                {
                    id: 'ad1',
                    projectId: '12d',
                    url: '../../assets/proj1.png',
                },
                {
                    id: 'ad2',
                    projectId: '12d',
                    url: '../../assets/proj2.png'
                },
                {
                    id: 'ad3',
                    projectId: '12d',
                    url: '../../assets/proj3.png'
                }
            ],
            featurePic: '../../assets/health.jpg',
            type: ProjectType.Design,
            // link: 'https://shop.busyexpand.com/'
        },
        {
            id: '12d',
            name: 'App for Health',
            details: 'E-comerce',
            client: 'joel',
            pictures: [
                {
                    id: 'ad1',
                    projectId: '12d',
                    url: '../../assets/proj1.png',
                },
                {
                    id: 'ad2',
                    projectId: '12d',
                    url: '../../assets/proj2.png'
                },
                {
                    id: 'ad3',
                    projectId: '12d',
                    url: '../../assets/proj3.png'
                }
            ],
            featurePic: '../../assets/virtual-app.jpg',
            type: ProjectType.Development,
            // link: 'https://shop.busyexpand.com/'
        },
        {
            id: '12d',
            name: 'Watch Design',
            details: 'Responsive Wearable Design',
            client: 'joel',
            pictures: [
                {
                    id: 'ad1',
                    projectId: '12d',
                    url: '../../assets/proj1.png',
                },
                {
                    id: 'ad2',
                    projectId: '12d',
                    url: '../../assets/proj2.png'
                },
                {
                    id: 'ad3',
                    projectId: '12d',
                    url: '../../assets/proj3.png'
                }
            ],
            featurePic: '../../assets/watch.jpg',
            type: ProjectType.Design,
            // link: 'https://shop.busyexpand.com/'
        },
        {
            id: '12d',
            name: 'Nwisoft',
            details: 'Nwisoft Web App',
            client: 'joel',
            pictures: [
                {
                    id: 'ad1',
                    projectId: '12d',
                    url: '../../assets/proj1.png',
                },
                {
                    id: 'ad2',
                    projectId: '12d',
                    url: '../../assets/proj2.png'
                },
                {
                    id: 'ad3',
                    projectId: '12d',
                    url: '../../assets/proj3.png'
                }
            ],
            featurePic: '../../assets/nwisoft.png',
            type: ProjectType.Development,
            link: 'https://nwisoft.web.app/'
        }

    ]);

    get projects() {
        return this._projects.asObservable();
    }

}