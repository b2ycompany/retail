// lib/models/produto.dart
class Produto {
  final String id;
  final String nome;
  final String descricao;
  final double preco;
  final String imageUrl;

  Produto({
    required this.id,
    required this.nome,
    required this.descricao,
    required this.preco,
    required this.imageUrl,
  });

  factory Produto.fromJson(Map<String, dynamic> json) {
    return Produto(
      id: json['id'],
      nome: json['nome'],
      descricao: json['descricao'],
      preco: json['preco'].toDouble(),
      imageUrl: json['imageUrl'],
    );
  }
}
