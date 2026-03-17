document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach((block) => {
        const button = document.createElement('button');
        
        button.innerHTML = '<i class="fa-regular fa-copy"></i>'; 
        button.className = 'copy-button';
        button.title = "Copiar código";

        block.appendChild(button);

        button.addEventListener('click', () => {
            const code = block.querySelector('code') ? block.querySelector('code').innerText : block.innerText;
            
            const cleanCode = code.replace(/[\n\r]+$/, '');

            navigator.clipboard.writeText(cleanCode).then(() => {
                button.innerHTML = '<i class="fa-solid fa-check"></i>';
                button.classList.add('copied');

                setTimeout(() => {
                    button.innerHTML = '<i class="fa-regular fa-copy"></i>';
                    button.classList.remove('copied');
                }, 2000);
            });
        });
    });
});