const data = {
    youtube: {
        nombre: "PurgeKing",
        avatar: "https://i.redd.it/id96ys80inog1.png",
        videos: ["_ZckrtK_1v8", "Stf4F3BJD9I"],
        url: "https://www.youtube.com/@Purgeking-t2w"
    },
    tiktok: {
        nombre: "PurgeKing TikTok",
        avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0c24bb2a0be976fb4f338cec5522d0ff~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=db07ec8b&x-expires=1774918800&x-signature=JwSuwPKcvVC2qagkNifZe%2F0Px64%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my3",
        url: "https://www.tiktok.com/@theepurgeking"
    },
    twitter: {
        nombre: "PurgeKing X",
        avatar: "https://pbs.twimg.com/profile_images/1990091586965831680/_AiCO70s_400x400.jpg",
        url: "https://x.com/ThePurgeKing2" 
    }
};

const $ = id => document.getElementById(id);
const modalEl = $("socialModal");
const modal = new bootstrap.Modal(modalEl);

const titulos = {
    youtube: "YouTube",
    tiktok: "TikTok",
    twitter: "Twitter / X"
};


document.querySelectorAll(".social-card a").forEach(a => {
    a.onclick = e => e.stopPropagation();
});

document.querySelectorAll(".social-card").forEach(card => {
    card.onclick = () => {
        const { red } = card.dataset;
        const info = data[red];

        $("modalTitle").textContent = titulos[red];
        $("modalAvatar").src = info.avatar;
        $("modalName").textContent = info.nombre;

        const container = $("modalVideos");
        container.innerHTML = "";

        modal.show();

        setTimeout(() => {
            if (red === "youtube") {
                // Solo YouTube
                container.innerHTML = info.videos.map(id => `
                    <div class="col-md-6 mb-3">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/${id}" allowfullscreen></iframe>
                        </div>
                    </div>
                `).join("");
            } else {
                // TikTok y Twitter
                container.innerHTML = `
                    <div class="col-12 py-4">
                        <p class="text-white-50">Visita mi perfil oficial para ver el contenido más reciente.</p>
                        <a href="${info.url}" target="_blank" class="btn btn-${red} btn-lg px-5 mt-2">
                            Ir a ${titulos[red]}
                        </a>
                    </div>`;
            }
        }, 300);
    };
});

// Limpiar
modalEl.addEventListener("hidden.bs.modal", () => {
    $("modalVideos").innerHTML = "";
});