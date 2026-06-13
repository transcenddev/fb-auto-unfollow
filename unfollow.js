(function() {
    let unfollowCount = 0;
    const targetLimit = 100; // Set your limit here to avoid bans
    
    console.log("%c [!] Facebook Auto Unfollow Activated.", "color: #FFA500; font-weight: bold;");

    async function startProcess() {
        // 1. Get all available follow buttons on the screen
        let moreButtons = document.querySelectorAll('div[role="button"][aria-label*="More options"]');
        console.log(`%c [i] Found ${moreButtons.length} accounts in current view.`, "color: #00FFFF");

        for (let btn of moreButtons) {
            if (unfollowCount >= targetLimit) {
                console.log("%c [!] Target limit reached. Stopping to stay safe.", "color: #FF0000");
                return;
            }

            // Click the more options
            btn.click();
            
            // Wait for DOM to update
            await new Promise(r => setTimeout(r, 600));

            let menuItems = document.querySelectorAll('div[role="menuitem"]');
            let unfollowBtn = Array.from(menuItems).find(item => 
                item.innerText.includes('Unfollow') || item.innerText.includes('إلغاء المتابعة')
            );

            if (unfollowBtn) {
                unfollowBtn.click();
                unfollowCount++;
                console.log(`%c [+] Unfollowed count: ${unfollowCount}`, "color: #00FF00");
            }

            // Clean up the DOM to free memory and avoid re-scanning
            btn.closest('div.x1gefphp')?.remove();

            // Dynamic delay to mimic human behavior (Randomized between 1-2 seconds)
            await new Promise(r => setTimeout(r, Math.random() * 1000 + 1000));
        }

        // 2. Scroll and repeat
        window.scrollBy({ top: 800, behavior: 'smooth' });
        console.log("%c [~] Scrolling for more...", "color: #BBBBBB");
        
        setTimeout(startProcess, 2000);
    }

    startProcess();
})();