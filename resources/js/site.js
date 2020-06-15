import "instant.page"
import "alpinejs"

class LiteYTEmbed extends HTMLElement {
    constructor() {
        super();
        this.videoId = encodeURIComponent(this.getAttribute('videoid'));
        this.rel = encodeURIComponent(this.getAttribute('rel'));
        this.posterUrl = `https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`;
        LiteYTEmbed.addPrefetch('preload', this.posterUrl, 'image');
    }

    connectedCallback() {
        this.style.backgroundImage = `url("${this.posterUrl}")`;

        const playBtn = document.createElement('div');
        playBtn.classList.add('lty-playbtn');
        this.append(playBtn);
        this.addEventListener('pointerover', LiteYTEmbed.warmConnections, {once: true});
        this.addEventListener('click', e => this.addIframe());
    }

    static addPrefetch(kind, url, as) {
        const linkElem = document.createElement('link');
        linkElem.rel = kind;
        linkElem.href = url;
        if (as) {
            linkElem.as = as;
        }
        linkElem.crossorigin = true;
        document.head.append(linkElem);
    }

    static warmConnections() {
        if (LiteYTEmbed.preconnected) return;
        LiteYTEmbed.addPrefetch('preconnect', 'https://www.youtube.com');
        LiteYTEmbed.addPrefetch('preconnect', 'https://www.google.com');

        LiteYTEmbed.addPrefetch('preconnect', 'https://googleads.g.doubleclick.net');
        LiteYTEmbed.addPrefetch('preconnect', 'https://static.doubleclick.net');

        LiteYTEmbed.preconnected = true;
    }

    addIframe(){
        let videoUrlWithQuery = `${this.videoId}?autoplay=1`;
        if (this.rel && this.rel !== 'null') {
            videoUrlWithQuery+=`&rel=${this.rel}`;
        }

        const iframeHTML = `
<iframe width="560" height="315" frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
  src="https://www.youtube.com/embed/${videoUrlWithQuery}"
></iframe>`;
        this.insertAdjacentHTML('beforeend', iframeHTML);
        this.classList.add('lyt-activated');
    }
}
customElements.define('lite-youtube', LiteYTEmbed);