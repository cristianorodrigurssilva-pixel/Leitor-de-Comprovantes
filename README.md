# ReciboBox Pro
PWA para captura de comprovantes, reconhecimento por Gemini e controle de lançamentos.

## Uso
1. Publique os arquivos em HTTPS.
2. Abra o app.
3. Em Configurar, informe uma chave Gemini para uso pessoal ou um proxy.
4. Fotografe o comprovante.
5. Confira e confirme o lançamento.

## Segurança
A chave digitada no navegador pode ser descoberta por quem tem acesso ao dispositivo/navegador. Para distribuição pública, use um backend/proxy.

A integração direta usa `models.generateContent` e saída JSON estruturada.
