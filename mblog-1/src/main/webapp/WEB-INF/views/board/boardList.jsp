<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.util.List, java.util.Map"%>
<%
List<Map<String, Object>> bList = null;
bList = (List<Map<String, Object>>) request.getAttribute("bList");

if (bList != null) {
	for (int i = 0; i < bList.size(); i++) {
		Map<String, Object> rMap = bList.get(i);
		out.print(rMap.get("BM_TITLE"));
	}
}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>계층형 게시판[WEB-INF]</title>
</head>
<body>
	<h3>계층형 게시판</h3>
</body>
</html>