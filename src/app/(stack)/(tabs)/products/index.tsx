import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const PRODUCTS = [
    { id: '1', name: 'Product A', price: 19.99 },
    { id: '2', name: 'Product B', price: 29.99 },
    { id: '3', name: 'Product C', price: 39.99 },
];

const ProductItem = ({ name, price }: { name: string; price: number }) => (
    <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
    </View>
);

const ProductsPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Products</Text>
            <FlatList
                data={PRODUCTS}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ProductItem name={item.name} price={item.price} />
                )}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
    list: { paddingBottom: 16 },
    item: {
        padding: 16,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: { fontSize: 18 },
    price: { fontSize: 16, color: '#888' },
});

export default ProductsPage;