import { ProjectItem as prjItem } from '/assets/scripts/App/ProjectItem.js';
import * as DOMH from '/assets/scripts/Utility/DOMHelper.js';

const ProjectItem = 'abc';

// console.log(globalThis);

export class ProjectList {
    projects = [];

    constructor(type) {
        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for (const prjI of prjItems) {
            this.projects.push(new prjItem(prjI.id,
                this.switchProject.bind(this),
                this.type));
        }
        console.log(this.projects);
        this.connectDroppable();
    }

    connectDroppable() {
        console.log(globalThis);
        const list = document.querySelector(`#${this.type}-projects ul`);
        list.addEventListener('dragenter', event => {
            if (event.dataTransfer.types[0] === 'text/plain') {
                list.parentElement.classList.add('droppable');
                event.preventDefault();
            }
        });

        list.addEventListener('dragover', event => {
            if (event.dataTransfer.types[0] === 'text/plain') {
                event.preventDefault();
            }
        });

        list.addEventListener('dragleave', event => {
            if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
                list.parentElement.classList.remove('droppable');
            }

        });

        list.addEventListener('drop', event => {
            const prjId = event.dataTransfer.getData('text/plain');
            if (this.projects.find(p => p.id === prjId)) {
                return;
            }
            document
                .getElementById(prjId)
                .querySelector('button:last-of-type')
                .click();
            list.parentElement.classList.remove('droppable');
            event.preventDefault();
        });
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject(project) {
        this.projects.push(project);
        DOMH.moveElement(project.id,
            `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this),
            this.type);
    }

    switchProject(projectId) {
        this.switchHandler(this.projects.find(
            p => p.id === projectId));
        this.projects = this.projects.filter(
            p => p.id !== projectId);
    }
}