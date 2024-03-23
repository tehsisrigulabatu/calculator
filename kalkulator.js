const buttons = document.querySelectorAll('.bawah button');
const tampil = document.querySelector('.tampil');

const hasil = () => tampil.value = eval(tampil.value);
const hapus = () => tampil.value = '';
const balik = () => tampil.value = tampil.value.substring(0, tampil.value.length - 1);


buttons.forEach((button) => {
    button.onclick = (e) => {
        const gas = e.target.textContent;
        if (gas !== 'C' && gas !== 'DEL' && gas !== '='){
            if (gas === 'MOD') {
                tampil.value += '%';
            } else {
                tampil.value += gas;

            }
        } else {
            if (gas === 'C') return hapus();
            if (gas === 'DEL') return balik();
            return hasil();

        }
    }

});