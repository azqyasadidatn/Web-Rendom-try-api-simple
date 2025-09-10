//tahap 1 memastikan js nya berjalan pemanggilan api

// const fetchButton = document.getElementById('fetch-button')
//     console.log('Memulai Permintaan ke API...')
//     async function fatchRandomFact() {
        
    
//     try{
//         const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
//         const data = await response.json();
//         console.log('Data berhasil di terima', data)
//     } catch{
//         console.log('Terjadi kesalahan', eror)
//     }
//     }
// fetchButton.addEventListener('click', fatchRandomFact)

//  Tahap 2

const fatchButton = document.getElementById('fetch-button')
const fatchText = document.getElementById('fact-text')
const loadingIndikator = document.getElementById('loading')
const factCard = document.getElementById('fact-card')
const erorMesage = document.getElementById('eror-message')

async function fatchRandomFact() {
    erorMesage.style.display='none'
    loadingIndikator.style.display='block'
    fatchButton.disabled= true
    factCard.classList.add('dimmed')
    try{
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        if(!response.ok){
            throw new Error(`HTTP error! status${response.status}`);
            
        }
        
        const data= await response.json()

        fatchText.textContent = data.text;
        console.log('fakta berhasil di tampilkan')

    }catch(error){

        console.log('Terjadi kesalahan :', error)
        erorMesage.style.display = 'block';
        fatchText.textContent= 'Gagal mengambil fakta, Silahkan coba kembali'
  
    } finally{
        loadingIndikator.style.display = 'none'
        fatchButton.disabled= false
        factCard.classList.remove('dimmed');
    }
}

fatchButton.addEventListener('click', fatchRandomFact)

