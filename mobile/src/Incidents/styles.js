import { StyleSheet } from "react-native";

import Constants from "expo-constants";

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#666'
    },
    headerTextBold: {
        fontWeight: 'bold'
    },

    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 10,
    },

    description:{
        marginTop: 10,
        marginBottom: 10,
        color: '#41414d'
    },

    incidentList: {
        marginTop: 12,
    },

    incident:{
        padding: 18,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 20,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText:{
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    },
});