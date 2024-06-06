<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Multilayer Inline Editor for XML</title>
    <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>
    <script>
        tinymce.init({
            selector:'#mytextarea'
        });
    </script>
</head>

<body>
    <h1>Multilayer Inline Editor for XML</h1>
    <form method="post">
        <textarea id="mytextarea">Put charters in me</textarea>
    </form>
</body>

</html>