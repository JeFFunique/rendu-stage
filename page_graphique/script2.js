var ctx = document.getElementById("myChart2");
var temps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]; // les thèmes sont les secteurs dans lesquels travaillent les startups qui viennent consulter le pôle Fintech
var nbs = [2, 3, 4, 6, 8, 5, 6, 7, 8, 2, 2, 3, 5, 3, 2, 1, 7, 6, 8, 2, 2, 3, 3, 3]; // nb représente le nombre de startups que le Pôle Fintech a reçu dans leurs secteurs respectifs durant les 2 dernières années.
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: temps,
        datasets: [
            {
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132',
                data: nbs
            }

        ]
    }
});