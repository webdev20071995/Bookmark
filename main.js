const elsTabsitem = document.querySelectorAll('.tabs__item');
const elsTabsPanel = document.querySelectorAll('.tabs__panel');
const elsTablink = document.querySelectorAll('.js-tab-link');

function Deactivatetabitems () {
    elsTabsitem.forEach(function (elTabsitem){
        elTabsitem.classList.remove('tabs__item--active');
    });
}

function DeactivatetabpPnels () {
    elsTabsPanel.forEach(function (elTabsPanel){
        elTabsPanel.classList.remove('tabs__panel--active');
    });
}

elsTablink.forEach(function (elTablink) {
    elTablink.addEventListener('click', function(evt){
        //Prevent page move
        evt.preventDefault();

        //Remove active class form tabs__items--elements
        Deactivatetabitems();

        // Add active class to current tabs__item
        elTablink.parentElement.classList.add('tabs__item--active');

        //Remove active class from tabs__panel elements
        deactivateTabPanels();

        // show active tab panel
        // const elTargetPanel = document.quarySelector('#${elTablink.href.split('#') [1]}');
        const elTargetPanel = document.quarySelector(elTablink.dataset.tabTarget);
        elTargetPanel.classList.add('tabs__panel__active');
    });
});