import { StyleSheet, Text, View } from "react-native"

const BoxComp = ({label, bgColor})=>{
    return(
        <View style={[styles.box, {backgroundColor:bgColor}]}>
            <Text>
                {label}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        height:600,
        width:400,
    }
})

export default BoxComp