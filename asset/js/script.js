const data = {
    0: 'текст 1',
    1: 'текст 2',
    2: 'текст 3',
    3: 'текст 4',
    4: 'текст 5',
    5: 'текст 6',
    6: 'текст 7',
    7: 'текст 8',
    8: 'текст 9',
};


const section_usful_info = document.querySelector('.usful_info');


/*
if(section_usful_info){
    const usful_info__text = section_usful_info.querySelector('.usful_info__text');
    const usful_info__text__title = usful_info__text.querySelector('.usful_info__text__title');
    const usful_info__text__describe = usful_info__text.querySelector('.usful_info__text__describe');

*/
    // ---------------------------------------------------------------------------------------------------


/*
    const usful_info__menu = section_usful_info.querySelector('.usful_info__menu');
    const usful_info__list = usful_info__menu.querySelectorAll('li');
    usful_info__list.forEach( el =>{
        el.addEventListener('click', () =>{

            usful_info__text__describe.innerHTML = data[el.getAttribute('data-id')];
            usful_info__text__title.textContent = el.textContent;

            usful_info__list.forEach( el =>{
               if (el.classList.contains('active')){
                el.classList.remove('active');
               }
            })
            el.classList.add('active')
        })
    });
 
}
*/

const usful_info = document.querySelector('.usful-info');

if(usful_info){
    const accordion_usful = usful_info.querySelector('.accordion');
    const usfulInfo__text = usful_info.querySelector('.usful-info__text');


    const data_usful = usfulInfo__text.querySelector('.data');
    const data__title_usful = data_usful.querySelector('.data__title');
    const  data__text_usful = data_usful.querySelector('.data__text');


    const accordion_item_usful = accordion_usful.querySelectorAll('.accordion-item');


    accordion_item_usful.forEach( el =>{
        const accordion_header_usful = el.querySelector('.accordion-header');
        const accordion_content_usful = el.querySelector('.accordion-content');


        accordion_header_usful.addEventListener('click', (e) => {
            const title = e.target.textContent;
            const description = accordion_content_usful.textContent;

            data__title_usful.textContent = title;
            data__text_usful .textContent = description;
        })

    });
}


const menuToggle = document.querySelector('#menu_toggle')
const body = document.querySelector('body');

menuToggle.addEventListener('click', ()=>{
    body.classList.toggle('burger_click');
})




const section_about_us = document.querySelector('.about-us');

if(section_about_us){

    section_about_us.addEventListener('click', () => {


        const checkbox = section_about_us.querySelector('.about-us__checkbox');
        const aboutUsBtn = section_about_us.querySelector('.about-us__btn');
        const phoneInput = section_about_us.querySelector('.about-us__tel__phone');


    // ---------------------------------------------------------------------------------------------------
    

        function updateButtonState() {
            const isChecked = checkbox.checked;
            const isPhoneValid = phoneInput.value.replace(/\D/g, '').length === 11;

            if (isChecked && isPhoneValid) {
                aboutUsBtn.classList.remove('disabled');
            } else {
                aboutUsBtn.classList.add('disabled');
            }
        }


    // ---------------------------------------------------------------------------------------------------

        checkbox.addEventListener('change', updateButtonState);

        phoneInput.addEventListener('input', function() {
           let value = this.value.replace(/\D/g, '');

            if (value.length > 0) {
                value = '+7 (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11);
            }

            this.value = value;
           updateButtonState();
        });


    //----------------------------------------------------------------------------------------------------

        phoneInput.addEventListener('keydown', function (event) {
            if (event.key === 'Backspace' || event.key === 'Delete') {
                let value = this.value.replace(/\D/g, '');
                if (value.length > 0) {
                    this.value = value.substring(0, value.length);
                }
                updateButtonState();
            }
        });

        updateButtonState();
    });
}



// accordion start

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    if (accordionHeaders.length > 0){

        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                // Закрываем все открытые разделы, кроме текущего
                const currentlyActive = document.querySelector('.accordion-header.active');
                if (currentlyActive && currentlyActive !== header) {
                    currentlyActive.classList.remove('active');
                    currentlyActive.nextElementSibling.classList.remove('active');
                }
                
                // Переключаем текущий раздел
                header.classList.toggle('active');
                const content = header.nextElementSibling;
                content.classList.toggle('active');
                
            });
        });
        
        // Опционально: открыть первый раздел по умолчанию
        accordionHeaders[0].click();
    }
    

});