import { DOMHelper } from '/src/Utility/DOMHelper.js';
// import { Tooltip } from '/assets/scripts/App/Tooltip.js';

// console.log('Project Item created');

export class ProjectItem {
    // hasActiveToolTip = false;

    constructor(id, updateProjectListsFunction, type) {
        this.id = id;
        this.hasActiveToolTip = false;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
        this.connectDrag();
    }

    showMoreInfoHandler() {
        if (this.hasActiveToolTip) {
            return;
        }
        const projectElement = document.getElementById(this.id);
        const tooltipText = projectElement.dataset.extraInfo;
        import('/src/App/Tooltip.js').then(module => {
            const tooltip = new module.Tooltip(
                () => {
                    this.hasActiveToolTip = false;
                },

                tooltipText,
                this.id
            );
            tooltip.attach();
            this.hasActiveToolTip = true;
        });
    }

    connectDrag() {
        const item = document.getElementById(this.id);
        item.addEventListener('dragstart', event => {
            event.dataTransfer.setData('text/plain', this.id);
            event.dataTransfer.effectAllowed = 'move';
        });
        item.addEventListener('dragend', event => {
            console.log(event);
        });
    }

    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click',
            this.showMoreInfoHandler.bind(this));
    }

    connectSwitchButton(type) {
        const projectItemElement = document.getElementById(this.id);
        let switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn = DOMHelper.clearEventListeners(switchBtn);
        switchBtn.textContent = type === 'active' ?
            'Finish' : 'Activate';
        switchBtn.addEventListener('click',
            this.updateProjectListsHandler.bind(null, this.id));
    }

    update(updateProjectListsFn, type) {
        this.updateProjectListsHandler = updateProjectListsFn;
        this.connectSwitchButton(type);
    }
}