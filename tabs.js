var j$ = jQuery.noConflict();

j$('.slds-tabs--default__link,.slds-tabs--scoped__link').click(function(){
   j$(this).parent().parent().find('.slds-tabs--default__link,.slds-tabs--scoped__link').attr('aria-selected','false');
   j$(this).attr('aria-selected','true');
   j$(this).parent().parent().find('.slds-tabs--default__link,.slds-tabs--scoped__link').attr('tabindex','-1');
   j$(this).attr('tabindex','0');
   j$(this).parent().addClass('slds-active').siblings().removeClass('slds-active');
   j$(this).parent().parent().parent().find('.'+j$(this).parent().parent().parent().find('.slds-tabs--default__content,.slds-tabs--scoped__content')[0].classList[0]).removeClass('slds-show').addClass('slds-hide');
   j$(this).parent().parent().parent().find('#'+j$(this).attr('aria-controls')).removeClass('slds-hide').addClass('slds-show');
});
