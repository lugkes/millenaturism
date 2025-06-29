// pacotes.js
document.addEventListener('DOMContentLoaded', () => {
    const packagesData = [
       
        {
            id: 'patagonia',
            img: 'assents/imgs/destinos/patagonia.jpg',
            title: 'Patagônia: Aventura no Fim do Mundo',
            description: 'Descubra glaciares imponentes, trilhas desafiadoras e paisagens selvagens na Patagônia Argentina e Chilena.',
            details: ['Ushuaia, El Calafate, Torres del Paine', '7 dias / 6 noites', 'A partir de R$ 4.500'],
            type: 'aventura',
            region: 'america-sul',
            budget: 'medio'
        },
        {
            id: 'maldivas',
            img: 'assents/imgs/destinos/maldivas.jpg',
            title: 'Maldivas: Paraíso Aquático',
            description: 'Ilhas intocadas, bangalôs sobre a água e vida marinha espetacular para uma experiência de puro relaxamento.',
            details: ['Bungalow sobre a água, Mergulho, Spas exclusivos', '5 dias / 4 noites', 'A partir de R$ 7.800'],
            type: 'relaxamento',
            region: 'asia',
            budget: 'luxo'
        },
        {
            id: 'paris',
            img: 'assents/imgs/destinos/paris.jpg',
            title: 'Paris: Romantismo e Cultura',
            description: 'A cidade luz com seus museus icônicos, culinária requintada e charmosas ruas. Perfeito para casais.',
            details: ['Torre Eiffel, Louvre, Passeio de barco no Sena', '4 dias / 3 noites', 'A partir de R$ 3.200'],
            type: 'romance',
            region: 'europa',
            budget: 'medio'
        },
        {
            id: 'roma',
            img: 'assents/imgs/destinos/roma.jpeg',
            title: 'Roma Antiga: História Viva',
            description: 'Uma imersão na história milenar de Roma, com visitas a coliseu, fóruns e Vaticano.',
            details: ['Coliseu, Vaticano, Fontana di Trevi', '5 dias / 4 noites', 'A partir de R$ 3.000'],
            type: 'cultura',
            region: 'europa',
            budget: 'medio'
        },
        {
            id: 'disney',
            img: 'assents/imgs/destinos/pacotes/disney.jpeg', 
            title: 'Orlando: A Magia da Disney',
            description: 'Aventura em família nos parques temáticos de Orlando, com diversão para todas as idades.',
            details: ['Walt Disney World, Universal Studios, Compras', '7 dias / 6 noites', 'A partir de R$ 6.000'],
            type: 'familia',
            region: 'america-sul',
            budget: 'luxo'
        },
        {
            id: 'tailandia',
            img: 'assents/imgs/destinos/tailandia.jpeg', 
            title: 'Tailândia: Templos e Praias Exóticas',
            description: 'Uma jornada espiritual e natural pelas belas praias e templos da Tailândia.',
            details: ['Bangkok, Phuket, Chiang Mai', '10 dias / 9 noites', 'A partir de R$ 5.500'],
            type: 'cultura',
            region: 'asia',
            budget: 'medio'
        }
    ];

    const packagesList = document.getElementById('packages-list');
    const applyFiltersBtn = document.getElementById('applyFilters');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const noPackagesFound = document.getElementById('no-packages-found');

    function renderPackages(filteredPackages) {
        packagesList.innerHTML = ''; // Limpa a lista existente
        if (filteredPackages.length === 0) {
            noPackagesFound.style.display = 'block';
            return;
        } else {
            noPackagesFound.style.display = 'none';
        }

        filteredPackages.forEach(pkg => {
            const colDiv = document.createElement('div');
            colDiv.className = `col package-item`; 
         
            colDiv.setAttribute('data-tipo', pkg.type);
            colDiv.setAttribute('data-regiao', pkg.region);
            colDiv.setAttribute('data-orcamento', pkg.budget);

            const detailsHtml = pkg.details.map(detail => `<li><i class="bi bi-${getIconForDetail(detail)} text-primary me-1"></i> ${detail}</li>`).join('');

            colDiv.innerHTML = `
                <div class="card h-100 shadow-sm border-0">
                    <img src="${pkg.img}" class="card-img-top" alt="${pkg.title}" style="height: 200px; object-fit: cover;">
                    <div class="card-body text-center d-flex flex-column">
                        <h3 class="card-title text-primary fs-4 fw-bold">${pkg.title}</h3>
                        <p class="card-text text-muted">${pkg.description}</p>
                        <ul class="list-unstyled text-start small text-muted mb-3 mt-auto">
                            ${detailsHtml}
                        </ul>
                        <a href="detalhes-pacote.html?id=${pkg.id}" class="btn btn-primary btn-sm mt-auto">Detalhes do Pacote</a>
                    </div>
                </div>
            `;
            packagesList.appendChild(colDiv);
        });
    }

    // Helper para ícones (simplificado)
    function getIconForDetail(detail) {
        if (detail.includes('dias') || detail.includes('noites')) return 'clock-fill';
        if (detail.includes('R$') || detail.includes('A partir de')) return 'currency-dollar';
        return 'geo-alt-fill'; // Padrão para localização
    }

    function applyFilters() {
        const tipoViagem = document.getElementById('tipoViagem').value;
        const regiao = document.getElementById('regiao').value;
        const orcamento = document.getElementById('orcamento').value;

        const filtered = packagesData.filter(pkg => {
            return (tipoViagem === 'todos' || pkg.type === tipoViagem) &&
                   (regiao === 'todos' || pkg.region === regiao) &&
                   (orcamento === 'todos' || pkg.budget === orcamento);
        });
        renderPackages(filtered);
    }

    function clearFilters() {
        document.getElementById('tipoViagem').value = 'todos';
        document.getElementById('regiao').value = 'todos';
        document.getElementById('orcamento').value = 'todos';
        renderPackages(packagesData); // Renderiza todos os pacotes novamente
    }

    // Event Listeners
    applyFiltersBtn.addEventListener('click', applyFilters);
    clearFiltersBtn.addEventListener('click', clearFilters);

    // Renderiza todos os pacotes na carga inicial da página
    renderPackages(packagesData);
});