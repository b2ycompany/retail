// lib/services/api_service.dart
import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/produto.dart';

class ApiService {
  static const String baseUrl = 'http://seu-backend.com/api';

  static Future<List<Produto>> fetchProdutos() async {
    final response = await http.get(Uri.parse('$baseUrl/produtos'));
    if (response.statusCode == 200) {
      List jsonResponse = json.decode(response.body);
      return jsonResponse.map((produto) => Produto.fromJson(produto)).toList();
    } else {
      throw Exception('Falha ao carregar produtos');
    }
  }
}
