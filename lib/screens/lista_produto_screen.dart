// lib/screens/lista_produtos_screen.dart
import 'package:flutter/material.dart';
import '../models/produto.dart';
import '../services/api_service.dart';
import '../widgets/produto_card.dart';

class ListaProdutosScreen extends StatefulWidget {
  @override
  _ListaProdutosScreenState createState() => _ListaProdutosScreenState();
}

class _ListaProdutosScreenState extends State<ListaProdutosScreen> {
  late Future<List<Produto>> produtos;

  @override
  void initState() {
    super.initState();
    produtos = ApiService.fetchProdutos();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Produtos')),
      body: FutureBuilder<List<Produto>>(
        future: produtos,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return ListView.builder(
              itemCount: snapshot.data!.length,
              itemBuilder: (context, index) {
                return ProdutoCard(produto: snapshot.data![index]);
              },
            );
          } else if (snapshot.hasError) {
            return Center(child: Text('Erro ao carregar produtos'));
          }
          return Center(child: CircularProgressIndicator());
        },
      ),
    );
  }
}
