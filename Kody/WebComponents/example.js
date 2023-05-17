const template = document.createElement('template');

template.innerHTML = `
<style>
    .input-container {
        display: flex;
        flex-direction: column;
    }

    .error-label {
      color: red;
    }
</style>
<div class='input-container'>
<label>Default label</label>
<input name='default'/>
<div class='error-label'></div>
</div>
`

class Input extends HTMLElement {
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const name = this.getAttribute('name');
        const error = this.getAttribute('error');    
        const value = this.getAttribute('value');  
        const label = this.getAttribute('label');  
    
        const input = this._shadowRoot.querySelector('input')
        input.setAttribute('name', name);
        
        this._shadowRoot.querySelector('.error-label').innerText = error;
        
        if(value)
          input.setAttribute('value', value);
      
        if(label)
          this._shadowRoot.querySelector('label').innerText = label;
    }
}


window.customElements.define('input-text', Input);