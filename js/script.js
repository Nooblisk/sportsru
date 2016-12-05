
var seriea = '{"teams":[{"name":"Ювентус","flag_country":"Италия","tag_url":"http://www.sports.ru/juventus/","matches":11,"win":9,"draw":0,"lose":2,"score":27,"goals":23,"conceded_goals":8,"place":1,"color":"1"},{"name":"Рома","flag_country":"Италия","tag_url":"http://www.sports.ru/roma/","matches":10,"win":7,"draw":1,"lose":2,"score":22,"goals":26,"conceded_goals":12,"place":2,"color":"1"},{"name":"Наполи","flag_country":"Италия","tag_url":"http://www.sports.ru/napoli/","matches":11,"win":6,"draw":2,"lose":3,"score":20,"goals":20,"conceded_goals":12,"place":3,"color":"1"},{"name":"Аталанта","flag_country":"Италия","tag_url":"http://www.sports.ru/atalanta/","matches":11,"win":6,"draw":1,"lose":4,"score":19,"goals":16,"conceded_goals":13,"place":4,"color":"2"},{"name":"Милан","flag_country":"Италия","tag_url":"http://www.sports.ru/milan/","matches":10,"win":6,"draw":1,"lose":3,"score":19,"goals":16,"conceded_goals":14,"place":5,"color":"2"},{"name":"Лацио","flag_country":"Италия","tag_url":"http://www.sports.ru/lazio/","matches":10,"win":5,"draw":3,"lose":2,"score":18,"goals":20,"conceded_goals":11,"place":6,"color":""},{"name":"Фиорентина","flag_country":"Италия","tag_url":"http://www.sports.ru/fiorentina/","matches":10,"win":4,"draw":4,"lose":2,"score":16,"goals":13,"conceded_goals":10,"place":7,"color":""},{"name":"Торино","flag_country":"Италия","tag_url":"http://www.sports.ru/torino/","matches":10,"win":4,"draw":3,"lose":3,"score":15,"goals":20,"conceded_goals":13,"place":8,"color":""},{"name":"Дженоа","flag_country":"Италия","tag_url":"http://www.sports.ru/genoa/","matches":10,"win":4,"draw":3,"lose":3,"score":15,"goals":12,"conceded_goals":10,"place":9,"color":""},{"name":"Кьево","flag_country":"Италия","tag_url":"http://www.sports.ru/chievo/","matches":10,"win":4,"draw":3,"lose":3,"score":15,"goals":11,"conceded_goals":10,"place":10,"color":""},{"name":"Интер","flag_country":"Италия","tag_url":"http://www.sports.ru/inter/","matches":10,"win":4,"draw":2,"lose":4,"score":14,"goals":13,"conceded_goals":13,"place":11,"color":""},{"name":"Болонья","flag_country":"Италия","tag_url":"http://www.sports.ru/bologna/","matches":11,"win":3,"draw":4,"lose":4,"score":13,"goals":11,"conceded_goals":15,"place":12,"color":""},{"name":"Сассуоло","flag_country":"Италия","tag_url":"http://www.sports.ru/sassuolo/","matches":10,"win":4,"draw":1,"lose":5,"score":13,"goals":13,"conceded_goals":17,"place":13,"color":""},{"name":"Удинезе","flag_country":"Италия","tag_url":"http://www.sports.ru/udinese/","matches":10,"win":4,"draw":1,"lose":5,"score":13,"goals":13,"conceded_goals":16,"place":14,"color":""},{"name":"Кальяри","flag_country":"Италия","tag_url":"http://www.sports.ru/cagliari/","matches":10,"win":4,"draw":1,"lose":5,"score":13,"goals":17,"conceded_goals":23,"place":15,"color":""},{"name":"Сампдория","flag_country":"Италия","tag_url":"http://www.sports.ru/sampdoria/","matches":10,"win":3,"draw":2,"lose":5,"score":11,"goals":11,"conceded_goals":16,"place":16,"color":""},{"name":"Пескара","flag_country":"Италия","tag_url":"http://www.sports.ru/tags/72491088/","matches":10,"win":1,"draw":4,"lose":5,"score":7,"goals":9,"conceded_goals":15,"place":17,"color":""},{"name":"Эмполи","flag_country":"Италия","tag_url":"http://www.sports.ru/tags/1046357/","matches":10,"win":1,"draw":3,"lose":6,"score":6,"goals":2,"conceded_goals":13,"place":18,"color":"4"},{"name":"Палермо","flag_country":"Италия","tag_url":"http://www.sports.ru/palermo/","matches":10,"win":1,"draw":3,"lose":6,"score":6,"goals":7,"conceded_goals":19,"place":19,"color":"4"},{"name":"Кротоне","flag_country":"Италия","tag_url":"http://www.sports.ru/tags/5049877/","matches":10,"win":0,"draw":2,"lose":8,"score":2,"goals":8,"conceded_goals":21,"place":20,"color":"4"}]}';
var object = JSON.parse(seriea);
var teams = object.teams;

function comparePlaces(a, b) {
    if (a.place > b.place) return 1;
    if (a.place < b.place) return -1;
}
var arraySortPlace = teams.sort(comparePlaces);

function colorClass(colorNumber){
    if (colorNumber == 1 || colorNumber == 2 || colorNumber ==4) return " color"+colorNumber;
    else return "";
}

for (var i=0; i<arraySortPlace.length; i++){
    var color = colorClass(arraySortPlace[i].color);
    var place = "<td class='left-text"+color+"'>"+arraySortPlace[i].place+"</td>";
    var flag = "<i class='flag flag-it' title='Италия'/>";
    var href = "<a href='"+arraySortPlace[i].tag_url+"' title='"+ arraySortPlace[i].name +"'>"+arraySortPlace[i].name+"</a>";
    var name = "<td class='left-text team'>"+ flag +" "+ href + "</td>";
    var matches = "<td>"+arraySortPlace[i].matches+"</td>";
    var win = "<td class='class2'>"+arraySortPlace[i].win+"</td>";
    var draw = "<td class='class2'>"+arraySortPlace[i].draw+"</td>";
    var lose = "<td class='class2'>"+arraySortPlace[i].lose+"</td>";
    var goals = "<td class='class1'>"+arraySortPlace[i].goals+"</td>";
    var conceded_goals = "<td class='class1'>"+arraySortPlace[i].conceded_goals+"</td>";
    var score = "<td class='color-grey'>"+arraySortPlace[i].score+"</td>";


    $("#table").append("<tr>" + place + name + matches + win + draw + lose + goals + conceded_goals + score + "</tr>");

};