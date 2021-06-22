class notification extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open'});
    }
    render(resolvertype, resolvercontent) {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
            :root {
                --principal: linear-gradient(130deg, #ff9259 0%, #FFBA00 70%);; 
            }
                .koly-notification {
                    top: 2.5vh;
                    left: 2.5vw;
                    width: 250px;
                    height: 50px;
                    position: fixed;
                    z-index: 1000;
                    background: #512d1e;
                    border-radius: 1.5vh;
                    -webkit-box-shadow: 0px 4px 4px 3px rgba(177, 177, 177, 0.11);
    box-shadow: 0px 3.5px 4px 3px rgba(177, 177, 177, 0.11);
                }
                .koly-notification-container {
                    height: 5vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .koly-notification-txt {
                    margin: auto;
                    margin-top: 12.5px;
                    color: #ffff;
                    font-size: 20px;
                    text-align: center;
                    font-weight: 600;
                    font-family: 'ABeeZee', sans-serif;
                    text-shadow: 2px 1px 1px hsla(0,0%,100%,.25);
                }
            </style>
            <div class="koly-notification">
            <div class="koly-notification-container">
                <div class="koly-notification-txt">
                    ${resolvertype}: ${resolvercontent}
                </div>
            </div>
        </div>
        `;
        this.shadowRoot.appendChild(template.content.
        cloneNode(true));
    }
    connectedCallback() {
        const type = this.getAttribute('type');
        const content = this.getAttribute('content');
        /* Resolver: Valida los parametros, sino devuelve por defecto */
        const resolvertype = type != null ? type : '404 Type'
        const resolvercontent = content != null ? content : '404 Content'
        this.render(resolvertype, resolvercontent);
    }

}
customElements.define('koly-notification', notification)