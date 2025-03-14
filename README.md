# TryPhisher
[figma do projeto](https://www.figma.com/design/mqpO2mRxWBUCKkuegiI4eq/Untitled?node-id=0-1&p=f&t=jtaRjn2IC8vvcu0N-0)

# Padrão de Commits

-FEAT: Alguma funcionalidade nova que você fez.<br>
-FIX: Algum Bug que você arrumou.<br>
-TEST: Teste que você escreveu.<br>
-REFACTOR: Alguma refatoração que você fez.<br>
-DOCS: Alguma alteração no README<br>

## Workflow no Git.
warning **NUNCA DÊ UM PUSH NOS BRANCHS DEV E MAIN.**: Tome cuidado!

1. Vá no branch dev, e dê um pull pra pegar as últimas atualizações.

    ```powershell
    git checkout dev
    git pull
    ```

2. Logo em seguida crie o seu próprio branch. 

    ```powershell
    git checkout -B nome_do_branch
    ```

3. Realize todas as suas modificações nesse branch e logo em seguida dê um git add e um git commit.

    ```powershell
    git add .
    git commit -m "FEAT: descrição do que foi feito."
    ```

4. Envie o seu branch para o repositório remoto.

    ```powershell
    git push -u origin nome_do_branch
    ```

5. Peça um pull request para requisitar o merge das suas modificações no branch dev.