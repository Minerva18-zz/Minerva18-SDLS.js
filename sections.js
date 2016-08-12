var j$ = jQuery.noConflict();
/*SLDS Sections*/
j$('.slds-section__content').hide();
j$('.slds-section__title').find('button').find('svg').css('transition', '0.3s');
j$('.slds-section__title').click(function(){
    if(j$(this).parent().parent().hasClass('Minerva18SectionGroupSingle')){
        if(j$(this).parent().hasClass('slds-is-open')){
            j$(this).parent().removeClass('slds-is-open');
            j$(this).parent().find('.slds-section__content').hide();
        }
        else{
            j$(this).parent().parent().find('.slds-section').removeClass('slds-is-open');
            j$(this).parent().parent().find('.slds-section__content').hide();
            j$(this).parent().toggleClass('slds-is-open');
            j$(this).parent().find('.slds-section__content').show();
        }    
    }
    else{
            j$(this).parent().toggleClass('slds-is-open');
            if(j$(this).parent().hasClass('slds-is-open')){
                j$(this).parent().find('.slds-section__content').show();
            }else{
                j$(this).parent().find('.slds-section__content').hide();
            }
    }
});
/*SLDS Sections*/ 
