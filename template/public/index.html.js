module.exports = (options) => `
${options.html ? `
<html>
<head>
  <title>${options.name}</title>
  <link rel="icon" type="image/png" href="./favicon.png" />
</head>
<body>
  <div class="main"></div>
  <script src="bundle.js"></script>
</body>
</html>
` : `
<div class="main"></div>
<script src="bundle.js"></script>
`}`
