import {
  Message
} from '@phosphor/messaging';

import {
  Widget, PanelLayout
} from '@phosphor/widgets';

import '../style/index.css';

/**
 * An VoyagerTutorial viewer.
 */
export
class VoyagerTutorialWidget extends Widget {
  /**
   * Construct a new xkcd widget.
   */
  constructor(content: Widget) {
    super();

    this.id = 'VoyagerTutorial-jupyterlab';
    this.title.label = 'Tutorial:JupyterLab_Voyager';
    this.title.closable = true;
    this.addClass('jp-VoyagerTutorialWidget');
    let toolbar = new Widget();
    toolbar.addClass('jp-VoyagerTutorial-toolbar');
    let layout = this.layout = new PanelLayout();
    layout.addWidget(toolbar);
    layout.addWidget(content);
    /*
    this.img = document.createElement('img');
    this.img.className = 'jp-VoyagerTutorialCartoon';
    this.node.appendChild(this.img);
    this.img.insertAdjacentHTML('afterend',
      `<div class="jp-VoyagerTutorialAttribution">
        <a href="https://creativecommons.org/licenses/by-nc/2.5/" class="jp-VoyagerTutorialAttribution" target="_blank">
          <img src={require('../tutorial/tutorial_pic_0.png')} />
        </a>
      </div>`
    );*/
    
  }

  /**
   * The image element associated with the widget.
   */
    readonly img: HTMLImageElement;

  /**
   * Handle update requests for the widget.
   */
    onUpdateRequest(msg: Message): void {
  }
};
