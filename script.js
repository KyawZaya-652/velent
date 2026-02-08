function nextScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// "NO" button ကို နှိပ်လို့မရအောင် ပြေးခိုင်းတဲ့ function
function moveNoBtn(btn) {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    btn.style.position = 'absolute';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function showGift(type) {
    const title = document.getElementById('content-title');
    const body = document.getElementById('content-body');
    
    if(type === 'letter') {
        title.innerText = "A special letter for you";
        body.innerHTML = "<p>I just want you to know how much you mean to me... (သင့်စာသားများ ဒီမှာရေးပါ)</p>";
    } else if(type === 'photos') {
        title.innerText = "Our moments together";
        body.innerHTML = "<div style='display:grid; grid-template-columns:1fr 1fr; gap:10px;'>" +
                         "<div style='height:100px; background:#eee; color:#000;'>Photo 1</div>" +
                         "<div style='height:100px; background:#eee; color:#000;'>Photo 2</div></div>";
    } else if(type === 'voucher') {
        title.innerText = "Because you deserve extra";
        body.innerHTML = "<li>🎟️ Cozy Movie Night Voucher</li><li>🎟️ Hot Chocolate Date</li>";
    } else if(type === 'timeline') {
        title.innerText = "Our Journey Together";
        body.innerHTML = "<p>📅 Day 1: How it all began...</p><p>📅 Today: Still loving you.</p>";
    }

    nextScreen('gift-content');
}