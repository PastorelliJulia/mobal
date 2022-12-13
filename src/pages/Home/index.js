// import { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

// export default function Home() {
//     const [postagens, setPostagens] = useState([]);

//     useEffect(() => {
//       fetch("http://10.87.207.22:3000/postagens/read")
//       .then(res => {return res.json()})
//       .then(data => {
//         setPostagens(data);
//       })
//     }, []);

// return (
//     <View style={styles.container}>
//         {
//             postagens.map((postagem) => {
//                 return(
//                     <View>
//                         <Text>{postagem.title}</Text>
//                     </View>
//                 )
//             })
//         }
//     </View>
// )
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     titulo: {
//         color: 'black'
//     }
//   });

import { useState, useEffect } from 'react';
import {View, Text} from 'react-native';

export default function Home() {
        const [postagens, setPostagens] = useState([]);

    useEffect(() => {
      fetch("http://10.87.207.22:3000/postagens/read")
      .then(res => {return res.json()})
      .then(data => {
        console.log(data)
        setPostagens(data);
      })
    }, []);
    return(
        <View>
            {
                postagens.map((post, index) => {
                    return (
                        <View key={index}>
                            <Text>{post.titulo}</Text>
                            <Text>{post.conteudo}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}