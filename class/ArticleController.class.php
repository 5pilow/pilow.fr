<?php

class ArticleController {

	public static function serviceGetLast() {

		$articles = json_decode(file_get_contents("../articles/articles.json"));

		$articles = array_map(function($article) {
			$article->preview = substr(file_get_contents('../http/articles/' . $article->id . '/' . $article->id . '.md'), 0, 100);
			return $article;
		}, array_slice($articles, 0, 10));

		return Response::success(["articles" => array_slice($articles, 0, 10)]);
	}

	public static function serviceGet($id) {

		$articles = json_decode(file_get_contents("../articles/articles.json"));

		foreach ($articles as $article) {
			if ($article->id == $id) {
				$article->content = file_get_contents("../http/articles/" . $id . '/' . $article->id . '.md');
				return Response::success(["article" => $article]);
			}
		}

		return Response::fail(['error' => 'no such article']);
	}
}
