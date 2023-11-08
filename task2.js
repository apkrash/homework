        function razmenSum() {
            var inputAmount = parseFloat(document.getElementById('inputAmount').value);

            if (isNaN(inputAmount)) {
                document.getElementById('result').innerHTML = 'Пожалуйста, введите числовую сумму.';
                return;
            }

            var availableNotes = [500, 100, 10, 2];
            var change = [];

            for (var i = 0; i < availableNotes.length; i++) {
                var note = availableNotes[i];
                while (inputAmount >= note) {
                    change.push(note);
                    inputAmount -= note;
                }
            }

            if (inputAmount === 0) {
                document.getElementById('result').innerHTML = 'Разменяно: ' + change.join(', ');
            } else {
                document.getElementById('result').innerHTML = 'Невозможно разменять данную сумму купюрами и монетами.';
            }
        }



