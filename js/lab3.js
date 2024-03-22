   
    const tabPanels = document.querySelectorAll('.tabs div[role="tabpanel"]');
    
 
    tabPanels[0].classList.add('active');
    

    const tabs = document.querySelectorAll('.tabs ul li a');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            removeActive(tabPanels); 
            const tabId = this.getAttribute('href').substring(1);
            const tabPanel = document.getElementById(tabId);
            tabPanel.classList.add('active');
        });
    });


function removeActive(tabPanels) {
    tabPanels.forEach(panel => {
        panel.classList.remove('active');
    });
}
