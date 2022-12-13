import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import style from './style.js';

export default function Home({navigation}) {
    const json = [
        {
            "Nome": "Monalisa",
            "Artista": "Leonardo da 20",
            "Valor": "Inestimável",
            "Descrição": "Mona Lisa (ou La Gioconda) é uma famosíssima obra de arte feita pelo italiano Leonardo da Vinci. O quadro, no qual foi utilizada a técnica do sfumato, retrata a figura de uma mulher com um sorriso tímido e uma expressão introspectiva. ... Depois disso, a obra passou por várias mãos, chegando até mesmo a ser roubada.",
            "Museu": "Louvre",
            "Imagem": "https://urbanarts.vteximg.com.br/arquivos/ids/4761194-1000-1000/monalisa-for-destruction-quadrado.jpg?v=637200641630870000"
        },
        {
            "Nome": "Monalisa",
            "Artista": "Leonardo da 20",
            "Valor": "Inestimável",
            "Descrição": "Mona Lisa (ou La Gioconda) é uma famosíssima obra de arte feita pelo italiano Leonardo da Vinci. O quadro, no qual foi utilizada a técnica do sfumato, retrata a figura de uma mulher com um sorriso tímido e uma expressão introspectiva. ... Depois disso, a obra passou por várias mãos, chegando até mesmo a ser roubada.",
            "Museu": "Louvre",
            "Imagem": "https://urbanarts.vteximg.com.br/arquivos/ids/4761194-1000-1000/monalisa-for-destruction-quadrado.jpg?v=637200641630870000"
        },
        {
            "Nome": "Monalisa",
            "Artista": "Leonardo da 20",
            "Valor": "Inestimável",
            "Descrição": "Mona Lisa (ou La Gioconda) é uma famosíssima obra de arte feita pelo italiano Leonardo da Vinci. O quadro, no qual foi utilizada a técnica do sfumato, retrata a figura de uma mulher com um sorriso tímido e uma expressão introspectiva. ... Depois disso, a obra passou por várias mãos, chegando até mesmo a ser roubada.",
            "Museu": "Louvre",
            "Imagem": "https://urbanarts.vteximg.com.br/arquivos/ids/4761194-1000-1000/monalisa-for-destruction-quadrado.jpg?v=637200641630870000"
        },
        {
            "Nome": "Monalisa",
            "Artista": "Leonardo da 20",
            "Valor": "Inestimável",
            "Descrição": "Mona Lisa (ou La Gioconda) é uma famosíssima obra de arte feita pelo italiano Leonardo da Vinci. O quadro, no qual foi utilizada a técnica do sfumato, retrata a figura de uma mulher com um sorriso tímido e uma expressão introspectiva. ... Depois disso, a obra passou por várias mãos, chegando até mesmo a ser roubada.",
            "Museu": "Louvre",
            "Imagem":"https://urbanarts.vteximg.com.br/arquivos/ids/4761194-1000-1000/monalisa-for-destruction-quadrado.jpg?v=637200641630870000"
        },
        {
            "Nome": "Monalisa",
            "Artista": "Leonardo da 20",
            "Valor": "Inestimável",
            "Descrição": "Mona Lisa (ou La Gioconda) é uma famosíssima obra de arte feita pelo italiano Leonardo da Vinci. O quadro, no qual foi utilizada a técnica do sfumato, retrata a figura de uma mulher com um sorriso tímido e uma expressão introspectiva. ... Depois disso, a obra passou por várias mãos, chegando até mesmo a ser roubada.",
            "Museu": "Louvre",
            "Imagem": "https://urbanarts.vteximg.com.br/arquivos/ids/4761194-1000-1000/monalisa-for-destruction-quadrado.jpg?v=637200641630870000"
        },
        {
            "Nome": "Monalisa",
            "Artista": "Leonardo da 20",
            "Valor": "Inestimável",
            "Descrição": "Mona Lisa (ou La Gioconda) é uma famosíssima obra de arte feita pelo italiano Leonardo da Vinci. O quadro, no qual foi utilizada a técnica do sfumato, retrata a figura de uma mulher com um sorriso tímido e uma expressão introspectiva. ... Depois disso, a obra passou por várias mãos, chegando até mesmo a ser roubada.",
            "Museu": "Louvre",
            "Imagem": "https://urbanarts.vteximg.com.br/arquivos/ids/4761194-1000-1000/monalisa-for-destruction-quadrado.jpg?v=637200641630870000"
        },
        {
            "Nome": "Monalisa",
            "Artista": "Leonardo da 20",
            "Valor": "Inestimável",
            "Descrição": "Mona Lisa (ou La Gioconda) é uma famosíssima obra de arte feita pelo italiano Leonardo da Vinci. O quadro, no qual foi utilizada a técnica do sfumato, retrata a figura de uma mulher com um sorriso tímido e uma expressão introspectiva. ... Depois disso, a obra passou por várias mãos, chegando até mesmo a ser roubada.",
            "Museu": "Louvre",
            "Imagem": "https://urbanarts.vteximg.com.br/arquivos/ids/4761194-1000-1000/monalisa-for-destruction-quadrado.jpg?v=637200641630870000"
        },
        {
            "Nome": "Monalisa",
            "Artista": "Leonardo da 20",
            "Valor": "Inestimável",
            "Descrição": "Mona Lisa (ou La Gioconda) é uma famosíssima obra de arte feita pelo italiano Leonardo da Vinci. O quadro, no qual foi utilizada a técnica do sfumato, retrata a figura de uma mulher com um sorriso tímido e uma expressão introspectiva. ... Depois disso, a obra passou por várias mãos, chegando até mesmo a ser roubada.",
            "Museu": "Louvre",
            "Imagem": "https://urbanarts.vteximg.com.br/arquivos/ids/4761194-1000-1000/monalisa-for-destruction-quadrado.jpg?v=637200641630870000"
        }
    ]
    return (
        <View style={style.cor}>
            {json.map((item, index) =>
                <TouchableOpacity style={style.botao} key={index} onPress={()=>{navigation.navigate('detalhes', item)}}>
                    <Text style={style.texto}>{item.Nome}</Text>
                    <Text style={style.texto}>{item.Artista}</Text>
                    <Text style={style.texto}>{item.Valor}</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}