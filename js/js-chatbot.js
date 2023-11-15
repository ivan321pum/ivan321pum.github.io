var chats = {};
var currentChat = null;

window.onload = function() {
    // Cargamos los chats cuando se cargue la página.
    loadSettings();
    setUpModal();
    loadChatsFromLocalStorage();
    updateChatList();
}

function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;
    if (message.trim() === '') {
        // No hagas nada si el mensaje está vacío o solo contiene espacios en blanco.
        return;
    }

    // Si aún no se ha seleccionado un chat, creamos uno nuevo.
    if (!currentChat) {
        var timestamp = Date.now();
        var genericChatName = 'Chat Sin Nombre ' + timestamp;
        createChat(genericChatName); // Usamos la nueva función createChat para generar el chat.
        openChat(genericChatName);
    }

    var messages = document.getElementById('messages');
    messages.innerHTML += '<p>' + message + '</p>';
    messageInput.value = '';
    if (currentChat) {
        chats[currentChat] = chats[currentChat] || '';
        chats[currentChat] += '<p>' + message + '</p>';
        saveChatsToLocalStorage();
    }
}

function createChat(chatName) {
    chats[chatName] = '';
    saveChatsToLocalStorage();
    updateChatList();
    // Seleccionamos el nuevo chat para continuar la conversación ahí.
    openChat(chatName);
}

function openChat(chatName) {
    document.getElementById('header').textContent = chatName;
    document.getElementById('messages').innerHTML = chats[chatName] || '';
    currentChat = chatName;
}

function addChat() {
    var chatName = prompt('Nombre del chat:');
    if (chatName && !chats[chatName]) {
        chats[chatName] = '';
        saveChatsToLocalStorage();
        updateChatList();
    }
}

function saveChatsToLocalStorage() {
    localStorage.setItem('chats', JSON.stringify(chats));
}

function loadChatsFromLocalStorage() {
    var storedChats = localStorage.getItem('chats');
    if (storedChats) {
        chats = JSON.parse(storedChats);
    }
}


function updateChatList() {
    var chatListDiv = document.getElementById('chatlist');
    // Limpiamos la lista de chats primero para evitar duplicados
    chatListDiv.innerHTML = '';

    // Creamos y agregamos el div de botones de chat
    var chatButtonsDiv = document.createElement('div');
    chatButtonsDiv.id = 'chatButtons';

    // Creamos y agregamos el div de botones de acción
    var actionButtonsDiv = document.createElement('div');
    actionButtonsDiv.id = 'actionButtons';

    chatListDiv.appendChild(chatButtonsDiv); // Añade los chats arriba
    chatListDiv.appendChild(actionButtonsDiv); // Añade los botones de acción abajo

    // Agregamos el botón Añadir chat al div de acción
    var addButton = document.createElement('button');
    addButton.textContent = 'Añadir chat';
    addButton.onclick = addChat;
    actionButtonsDiv.appendChild(addButton);


    // Creamos y añadimos un botón para cada chat en el objeto de chats
    for (var chatName in chats) {
        var chatButton = document.createElement('button');
        chatButton.textContent = chatName;
        chatButton.onclick = (function(name) {
            return function() {
                openChat(name);
            };
        })(chatName);
        chatButtonsDiv.appendChild(chatButton);
    }

    var settingsButton = document.createElement('button');
    settingsButton.id = 'settings';
    settingsButton.textContent = 'Ajustes';
    settingsButton.onclick = function() {
        settingsModal.style.display = 'block';
    };
    actionButtonsDiv.appendChild(settingsButton);

    // Ahora asegúrate de que los eventos del modal estén configurados
    setUpModal();
}

// Obtén el modal
var settingsModal = document.getElementById('settingsModal');

// Obtén el botón que abre el modal
var settingsButton = document.getElementById('settings');

// Obtén el elemento que cierra el modal
var closeButton = document.querySelector('.close-button');

// Cuando el usuario haga clic en el botón, abre el modal
settingsButton.onclick = function() {
    settingsModal.style.display = "block";
}

// Cuando el usuario haga clic en (x), cierra el modal
closeButton.onclick = function() {
    settingsModal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérralo
window.onclick = function(event) {
    if (event.target == settingsModal) {
        settingsModal.style.display = "none";
    }
}

function setUpModal() {
    // Asegúrate de que el modal y el botón estén presente en el DOM antes de llamar a esta función
    var settingsModal = document.getElementById('settingsModal');
    var closeButton = document.querySelector('.close-button');

    closeButton.onclick = function() {
        settingsModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == settingsModal) {
            settingsModal.style.display = 'none';
        }
    }
}

// Llama a updateChatList para configurar todo al cargar la página.
window.onload = function() {
    // ... código previo que tengas en window.onload ...
    updateChatList();
};

function saveSettings() {
    var apiKeyValue = document.getElementById('apiKey').value;
    var modelValue = document.getElementById('model').value;

    // Guarda la configuración en localStorage para que persista entre cargas de página
    localStorage.setItem('openAIKey', apiKeyValue);
    localStorage.setItem('selectedModel', modelValue);

    // Cierra el modal y limpia el formulario (opcional)
    document.getElementById('settingsModal').style.display = 'none';
    document.getElementById('settingsForm').reset();
}

function loadSettings() {
    var apiKeyValue = localStorage.getItem('openAIKey');
    var modelValue = localStorage.getItem('selectedModel');

    if (apiKeyValue && modelValue) {
        // Si existen en localStorage, actualizamos los valores
        document.getElementById('apiKey').value = apiKeyValue;
        document.getElementById('model').value = modelValue;
    }
}

function askOpenAI(userMessage) {
    var apiKeyValue = localStorage.getItem('openAIKey'); // Obtenemos la clave API de localStorage
    var modelValue = localStorage.getItem('selectedModel'); // Obtenemos el modelo seleccionado de localStorage

    if (!apiKeyValue) {
        alert('Por favor, proporciona una clave API válida en Ajustes.');
        return;
    }

    // Preparar la solicitud a la API de OpenAI
    var data = {
        prompt: userMessage,
        temperature: 0.7,
        max_tokens: 150,
        model: modelValue || 'text-davinci-003'
    };

    fetch('https://api.openai.com/v1/engines/' + encodeURIComponent(data.model) + '/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKeyValue}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud a la API de OpenAI');
            }
            return response.json();
        })
        .then(data => {
            var responseText = data.choices[0].text.trim();
            addMessageToChat('Bot', responseText); // Función para añadir la respuesta al chat
        })
        .catch(error => {
            console.error('Error al conectar con OpenAI:', error);
        });
}

function addMessageToChat(sender, message) {
    var messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML += `<p><strong>${sender}:</strong> ${message}</p>`;
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Asegurarse de que el chat se desplaza hacia la nueva respuesta
}