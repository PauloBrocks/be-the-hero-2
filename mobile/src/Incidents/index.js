import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, RefreshControl } from 'react-native';
import api from '../services/api';

import logoImg from '../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false); 

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  async function loadIncidents() {
    
    setRefreshing(false);
    if (loading) {
      return;
    }
    if (total > 0 && incidents.length == total) {
      return;
    }

    setLoading(true);
    
    const response = await api.get(`incidents?page=${page}`);

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }
  function onRefresh () {
    setRefreshing(true);
    setTotal(0);
    setPage(1);
    setLoading(false);
    setIncidents([]);
    loadIncidents();
  };



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident).id}
        //showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({ item: incident }) => (
          <View style={styles.incidentList}>
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>ONG - id {incident.ong_id}:</Text>
              <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

              <Text style={styles.incidentProperty}>Caso - {incident.id}:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>

              <Text style={styles.incidentProperty}>Valor:</Text>
              <Text style={styles.incidentValue}>
                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}
              </Text>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigateToDetail(incident)}
              >
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#e02041" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

    </View>
  );
}