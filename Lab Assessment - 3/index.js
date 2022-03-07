// const form = document.querySelector('form');
// const patientName = document.getElementById('patient-name');
// const patientAge = document.getElementById('age');
// const totalVisits = document.getElementById('total-visits');
// const date = document.getElementById('date');
// const department = document.getElementById('department');
// const acceptableDepartments = [
//     'Paediatrician',
//     'Ophthalmology',
//     'Cardiac',
//     'Dental',
// ];
// const formSubmitHandler = (e) => {
//     e.preventDefault();
//     try {
//         console.log(date.value);
//         const day = date.value.split('-')[2];
//         const month = date.value.split('-')[1];
//         const year = date.value.split('-')[0];
//         console.log(day, month, year);
//         if (
//             isNaN(patientAge.value) ||
//             patientAge.value < 0 ||
//             isNaN(totalVisits.value) ||
//             totalVisits.value < 0
//         ) {
//             throw 'Please enter a valid number';
//         }
//         if (!acceptableDepartments.includes(department.value)) {
//             throw 'Please enter a valid department name';
//         }
//         if (day >= 1 && day <= 31 && month == 05 && year == 2022) {
//             throw 'Cannot book appointment during vacation time';
//         }
//     } catch (err) {
//         alert(err);
//     }
// };

// form.addEventListener('submit', formSubmitHandler);

$('#add-movie').on('click', () => {
    const movieName = $('#movieName').val();
    const rating = $('#rating').val();
    const count = $('#movieList tr').length;
    if (movieName != '' && rating != '') {
        $('#movieList tbody').append(
            '<tr class="child"><td>' +
                count +
                '</td><td>' +
                movieName +
                '</td><td>' +
                rating +
                '</td><td><a href="javascript:void(0);" class="remCF1 btn btnsmall btn-danger">Delete</a></td></tr>'
        );
    }
});
$(document).on('click', '.remCF1', function () {
    $(this).parent().parent().remove();
    $('#movieList tbody tr').each((i) => {
        $($(this).find('td')[0]).html(i + 1);
    });
});
const sortByMovie = () => {
    const table = $('#tbl');
    const tbody = $('#table-main');
    tbody
        .find('tr')
        .sort((a, b) => {
            if ($('#movie_order').val() == 'asc') {
                return $('td:nth-child(2)', a)
                    .text()
                    .localeCompare($('td:nth-child(2)', b).text());
            } else {
                return $('td:nth-child(2)', b)
                    .text()
                    .localeCompare($('td:nth-child(2)', a).text());
            }
        })
        .appendTo(tbody);
    const sortingOrder = $('#movie_order').val();
    if (sortingOrder == 'asc') {
        $('#movie_order').value = 'desc';
    }
    if (sortingOrder == 'desc') {
        $('#movie_order').value = 'asc';
    }
};
const sortByRating = () => {
    const table = $('#tbl');
    const tbody = $('#table-main');
    tbody
        .find('tr')
        .sort((a, b) => {
            if ($('#rating-order').val() == 'asc') {
                return $('td:nth-child(3)', a)
                    .text()
                    .localeCompare($('td:nth-child(3)', b).text());
            } else {
                return $('td:nth-child(3)', b)
                    .text()
                    .localeCompare($('td:nth-child(3)', a).text());
            }
        })
        .appendTo(tbody);
    const sortingOrder = $('#rating-order').val();
    if (sortingOrder == 'asc') {
        $('#rating-order').value = 'desc';
    }
    if (sortingOrder == 'desc') {
        $('#rating-order').value = 'asc';
    }
};
